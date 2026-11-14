<template>
  <article class="rounded border border-gray-300 bg-white p-4 shadow-sm">
    <h3 class="text-lg font-semibold">{{ offer.title }}</h3>
    <p class="text-sm text-gray-700">{{ offer.storeName }}, {{ offer.city }}</p>

    <p class="mt-2">{{ offer.description }}</p>

    <p class="mt-2">
      <span class="text-xl font-bold text-green-800">
        € {{ formatPrice(offer.price) }}
      </span>
      <span class="ml-2 text-gray-700 line-through">
        € {{ formatPrice(offer.originalValue) }}
      </span>
    </p>

    <p class="mt-2 text-sm">
      Pickup: {{ formatDate(offer.pickupStart) }},
      {{ formatTime(offer.pickupStart) }} to {{ formatTime(offer.pickupEnd) }}
    </p>
    <p class="text-sm">Bags left: {{ offer.quantityAvailable }}</p>
  </article>
</template>

<script>
// card for one offer
export default {
  name: "OfferCard",
  props: {
    offer: {
      type: Object,
      required: true,
    },
  },
  methods: {
    // 3.5 -> "3.50"
    formatPrice(price) {
      return price.toFixed(2);
    },
    // "2026-11-20T18:00:00" -> "20/11/2026"
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-GB");
    },
    // "2026-11-20T18:00:00" -> "18:00"
    formatTime(dateString) {
      const date = new Date(dateString);
      return date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },
};
</script>
