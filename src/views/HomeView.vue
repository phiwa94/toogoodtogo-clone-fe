<template>
  <div>
    <section class="mb-8">
      <h1 class="mb-2 text-3xl font-bold">Save food, save money</h1>
      <p class="mb-4">
        Bakeries, supermarkets and restaurants offer their leftover food in
        surprise bags for a lower price. Reserve a bag and pick it up at the
        store.
      </p>
      <router-link
        to="/register"
        class="inline-block rounded bg-green-700 px-4 py-2 font-semibold text-white hover:bg-green-800"
      >
        Register now
      </router-link>
    </section>

    <OfferList title="Newest offers" :offers="offers" />
  </div>
</template>

<script>
import OfferList from "@/components/organisms/OfferList.vue";
import offers from "@/data/offers.js";

// home page (dummy data for now)
export default {
  name: "HomeView",
  components: {
    OfferList,
  },
  data() {
    return {
      offers: offers,
    };
  },
};
</script>
