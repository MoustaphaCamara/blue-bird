<template>
  <div>
    <MainSection title="Home" :loading="loading" class="dark:text-white">
      {{ user }}

      <TweetForm :user="user" />
    </MainSection>
  </div>
</template>

<script setup>
const loading = ref(false);
const { useAuthUser } = useAuth();
const user = useAuthUser();
</script>
