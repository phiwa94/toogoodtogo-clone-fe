<template>
  <section>
    <h2 class="mb-4 text-2xl font-bold">{{ title }}</h2>

    <p v-if="offers.length === 0">There are no offers at the moment.</p>

    <!-- 1 column on phones, 2 on tablets, 3 on desktop -->
    <ul v-else class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="offer in offers" :key="offer.id">
        <OfferCard :offer="offer" />
      </li>
    </ul>
  </section>
</template>

<script>
import OfferCard from "@/components/molecules/OfferCard.vue";

// list of offer cards
export default {
  name: "OfferList",
  components: {
    OfferCard,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    offers: {
      type: Array,
      required: true,
    },
  },
};
</script>
