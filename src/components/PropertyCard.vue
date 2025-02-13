<script setup lang="ts">
import type { Property } from '../types/property';

defineProps<{
  property: Property;
}>();
</script>

<template>
  <router-link :to="{ name: 'property-details', params: { id: property.id }}" class="property-card">
    <div class="relative">
      <img :src="property.coverPhoto" :alt="property.title" class="w-full h-64 object-cover" />
      <div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
        {{ property.purpose === 'for-rent' ? 'For Rent' : 'For Sale' }}
      </div>
    </div>
    <div class="p-4">
      <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ property.title }}</h3>
      <p class="text-primary text-lg font-bold mb-2">
        ${{ property.price.toLocaleString() }}
        <span class="text-sm text-gray-500">{{ property.purpose === 'for-rent' ? '/month' : '' }}</span>
      </p>
      <div class="flex items-center text-gray-600 mb-2">
        <span class="mr-4">{{ property.rooms }} beds</span>
        <span class="mr-4">{{ property.baths }} baths</span>
        <span>{{ Math.round(property.area) }} sqft</span>
      </div>
      <p class="text-gray-500">{{ property.location }}</p>
    </div>
  </router-link>
</template>