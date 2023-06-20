<template>
  <div :class="{ dark: darkMode }">
    <h1 class="text-red-500 text-4xl dark:text-dim-500">Clone</h1>
  </div>
</template>
<script setup>
const darkMode = ref(true);
</script>
