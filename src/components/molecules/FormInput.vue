<template>
  <div class="mb-4">
    <label :for="id" class="mb-1 block font-medium">{{ label }}</label>
    <BaseInput
      :id="id"
      :type="type"
      :model-value="modelValue"
      :has-error="error !== ''"
      @update:model-value="$emit('update:modelValue', $event)"
      @blur="$emit('blur')"
    />
    <!-- error message -->
    <p v-if="error !== ''" class="mt-1 text-sm text-red-700">
      {{ error }}
    </p>
  </div>
</template>

<script>
import BaseInput from "@/components/atoms/BaseInput.vue";

// label + input + error message
export default {
  name: "FormInput",
  components: {
    BaseInput,
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
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: String,
      default: "",
    },
    // empty = no error
    error: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue", "blur"],
};
</script>
