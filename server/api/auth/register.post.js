import { sendError } from "h3";
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

  return {
    body: body,
  };
});
