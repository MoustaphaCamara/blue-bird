<template>
  <div
    class="m-2 overflow-hidden rounded-2xl border bg-gray-50 dark:bg-dim-700 dark:text-white"
    :class="twitterBorderColor"
  >
    <h1
      class="border-b p-3 text-xl font-extrabold text-gray-900 dark:border-white dark:text-white"
    >
      {{ props.title }}
    </h1>
    <slot></slot>
    <div
      class="cursor-pointer p-3 text-sm text-blue-400 hover:bg-gray-100 dark:hover:bg-dim-300"
      :class="defaultTransition"
    >
      Voir plus..
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
const { twitterBorderColor, defaultTransition } = useTailwindConfig();
</script>
