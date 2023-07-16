<template>
  <TweetFormInput :user="props.user" @onSubmit="handleFormSubmit" />
</template>

<script setup>
const { postTweet } = useTweets();

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

async function handleFormSubmit(data) {
  try {
    const response = await postTweet(data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
</script>
