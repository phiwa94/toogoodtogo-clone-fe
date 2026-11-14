<template>
  <DefaultLayout>
    <!--page is shown here -->
    <router-view />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/components/templates/DefaultLayout.vue";

export default {
  name: "App",
  components: {
    DefaultLayout,
  },
};
</script>
