import { getTweets } from "~/server/db/createTweet";
import { tweetTransformer } from "~/server/transformers/tweet";

export default defineEventHandler(async (event) => {
  const tweets = await getTweets({
    include: {
      author: true,
      MediaFiles: true,
      replies: {
        include: {
          author: true,
        },
      },
    },
  });

  return {
    tweets: tweets.map(tweetTransformer),
  };
});
