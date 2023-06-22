import { sendError } from "h3";
import { createUser } from "~/server/db/users.js";
import { userTransformer } from "~/server/transformers/user";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, email, password, repeatPassword, name } = body;
  //   missing parameter
  if (!username || !email || !password || !repeatPassword || !name) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid params: one of the fields is missing",
      })
    );
  }
  if (password !== repeatPassword) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "The passwords do not match",
      })
    );
  }
  const userData = {
    username,
    email,
    password,
    name,
    profileImage: "https://picsum.photos/200/200",
  };

  const user = await createUser(userData);

  return {
    body: userTransformer(user),
  };
});
