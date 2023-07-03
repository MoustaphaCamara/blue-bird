<template>
  <div>
    <label
      for=""
      v-if="props.label"
      class="ml-px block pl-3 text-sm font-medium text-gray-700"
      >{{ props.label }}</label
    >
    <input
      @input="(event) => emits('update:modelValue', event.target.value)"
      :type="props.type"
      :value="$props.modelValue"
      class="block w-full rounded-full border-gray-300 px-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<script setup>
// notify parent when input has changes
const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  modelValue: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
});
</script>
