<template>
  <div class="border-x" :class="twitterBorderColor">
    <div
      class="sticky top-0 bg-white/80 px-4 py-3 backdrop-blur-md dark:bg-dim-900/80 dark:text-white"
    >
      <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">
        {{ props.title }}
      </h2>
    </div>

    <div
      v-if="loading"
      class="flex items-center justify-center border-b p-4"
      :class="twitterBorderColor"
    >
      <UILoader />
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const { twitterBorderColor } = useTailwindConfig();

const props = defineProps({
  title: {
    required: true,
    type: String,
  },
  loading: {
    required: true,
    type: Boolean,
  },
});
</script>
