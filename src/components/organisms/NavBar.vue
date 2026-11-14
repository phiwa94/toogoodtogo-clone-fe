<template>
  <nav class="flex flex-wrap items-center justify-between gap-2 px-4 py-3">
    <router-link to="/" class="text-xl font-bold">
      TooGoodToGo Clone
    </router-link>

    <ul class="flex gap-4">
      <!-- link of the current page is underlined -->
      <li>
        <router-link to="/" exact-active-class="underline">Home</router-link>
      </li>
      <li>
        <router-link to="/register" exact-active-class="underline">
          Register
        </router-link>
      </li>
      <li>
        <router-link to="/login" exact-active-class="underline">
          Login
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
// navigation bar, shown on every page
export default {
  name: "NavBar",
};
</script>
