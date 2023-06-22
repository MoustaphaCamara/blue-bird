import { getUserByUsername } from "~/server/db/users";
import bcrypt from "bcrypt";
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

  // is he registered
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
  // compare password
  const isPasswordMatching = await bcrypt.compare(password, user.password);

  // generate new token

  return {
    user,
    isPasswordMatching,
  };
});
