<template>
  <div class="mb-4">
    <label :for="id" class="mb-1 block font-medium">{{ label }}</label>
    <BaseSelect
      :id="id"
      :model-value="modelValue"
      :options="options"
      :has-error="error !== ''"
      @update:model-value="$emit('update:modelValue', $event)"
      @blur="$emit('blur')"
    />
    <p v-if="error !== ''" class="mt-1 text-sm text-red-700">
      {{ error }}
    </p>
  </div>
</template>

<script>
import BaseSelect from "@/components/atoms/BaseSelect.vue";

// label + dropdown + error message
export default {
  name: "FormSelect",
  components: {
    BaseSelect,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
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
    error: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue", "blur"],
};
</script>
