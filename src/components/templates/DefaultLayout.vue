<template>
  <div class="flex min-h-screen flex-col bg-gray-50 text-gray-900">
    <header class="bg-green-800 text-white">
      <NavBar />
    </header>

    <!-- page content -->
    <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-6">
      <slot />
    </main>

    <footer class="border-t border-gray-300 px-4 py-3 text-center text-sm">
      TooGoodToGo Clone
    </footer>
  </div>
</template>

<script>
import NavBar from "@/components/organisms/NavBar.vue";

// layout for every page: navbar, content, footer
export default {
  name: "DefaultLayout",
  components: {
    NavBar,
  },
};
</script>
