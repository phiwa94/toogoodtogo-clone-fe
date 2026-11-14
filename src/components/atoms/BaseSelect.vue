<template>
  <select
    :id="id"
    :value="modelValue"
    class="w-full rounded border bg-white px-3 py-2"
    :class="hasError ? 'border-red-600' : 'border-gray-400'"
    @change="$emit('update:modelValue', $event.target.value)"
    @blur="$emit('blur')"
  >
    <!-- nothing selected at the start -->
    <option value="">Please choose</option>
    <option v-for="option in options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script>
// dropdown, works with v-model
export default {
  name: "BaseSelect",
  props: {
    id: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue", "blur"],
};
</script>
