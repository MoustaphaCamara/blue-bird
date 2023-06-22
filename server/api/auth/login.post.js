import { getUserByUsername } from "~/server/db/users";
import bcrypt from "bcrypt";
import { generateTokens, sendRefreshToken } from "~/server/utils/jwt";
import { userTransformer } from "~/server/transformers/user";
import { createRefreshToken } from "~/server/db/refreshToken";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, password } = body;

  // no username/password
  if (!username || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid params",
      })
    );
  }

  // IS USER REGISTERED
  const user = await getUserByUsername(username);

  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "One of the credentials is invalid",
      })
    );
  }
  // COMPARE PASSWORDS
  const isPasswordMatching = await bcrypt.compare(password, user.password);

  if (!isPasswordMatching) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "One of the credentials is invalid",
      })
    );
  }
  // GENERATE NEW TOKENS
  //   -- access token
  //   -- refresh token
  const { accessToken, refreshToken } = generateTokens(user);

  //   SAVE TOKEN INSIDE DB
  await createRefreshToken({
    token: refreshToken,
    userId: user.id,
  });

  //   STORE TOKEN AS HTTP ONLY COOKIE
  sendRefreshToken(event, refreshToken);
  return {
    user: userTransformer(user),
    access_token: accessToken,
  };
});
