<template>
  <input
    :id="id"
    :type="type"
    :value="modelValue"
    class="w-full rounded border px-3 py-2"
    :class="hasError ? 'border-red-600' : 'border-gray-400'"
    @input="$emit('update:modelValue', $event.target.value)"
    @blur="$emit('blur')"
  />
</template>

<script>
// input field, works with v-model
export default {
  name: "BaseInput",
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: String,
      default: "",
    },
    // red border if true
    hasError: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue", "blur"],
};
</script>
