import { mediaFileTransformer } from "./mediaFiles";
import { userTransformer } from "./user";

export const tweetTransformer = (tweet) => {
  return {
    id: tweet.id,
    text: tweet.text,
    mediaFiles: !!tweet.MediaFiles
      ? tweet.MediaFiles.map(mediaFileTransformer)
      : [],
    author: !!tweet.author ? userTransformer(tweet.author) : null,
    replies: !!tweet.replies ? tweet.replies.map(tweetTransformer) : [],
    replyTo: !!tweet.replyTo ? tweetTransformer(tweet.replyTo) : null,
  };
};
