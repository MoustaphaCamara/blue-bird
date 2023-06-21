<template>
  <nuxt-link
    to="#"
    class="flex w-min items-center rounded-full p-3 text-black hover:bg-gray-200 dark:text-white dark:hover:bg-dim-200"
    :class="defaultTransition"
  >
    <div class="text-dark h-6 w-6">
      <slot name="icon"></slot>
    </div>
    <div class="ml-4 hidden text-xl xl:block" :class="textClasses">
      <slot name="name"></slot>
    </div>
  </nuxt-link>
</template>

<script setup>
const { defaultTransition } = useTailwindConfig();

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const textClasses = computed(() =>
  props.active ? "font-semibold" : "font-normal"
);
</script>

<style lang="scss" scoped></style>
