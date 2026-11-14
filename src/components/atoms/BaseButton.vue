<template>
  <button
    :type="type"
    class="rounded bg-green-700 px-4 py-2 font-semibold text-white hover:bg-green-800"
  >
    <!-- button text -->
    <slot />
  </button>
</template>

<script>
// simple button
export default {
  name: "BaseButton",
  props: {
    // "button" or "submit"
    type: {
      type: String,
      default: "button",
    },
  },
};
</script>
