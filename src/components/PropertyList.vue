<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PropertyCard from './PropertyCard.vue';
import { getProperties } from '../services/api';
import type { Property } from '../types/property';

const properties = ref<Property[]>([]);
const loading = ref(true);
const purpose = ref('for-rent');

const fetchProperties = async () => {
  loading.value = true;
  properties.value = await getProperties(purpose.value);
  loading.value = false;
};

onMounted(fetchProperties);
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-center mb-8 space-x-4">
      <button 
        @click="purpose = 'for-rent'; fetchProperties()"
        :class="[
          'px-6 py-2 rounded-full font-medium transition-colors',
          purpose === 'for-rent' 
            ? 'bg-primary text-white' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        ]"
      >
        For Rent
      </button>
      <button 
        @click="purpose = 'for-sale'; fetchProperties()"
        :class="[
          'px-6 py-2 rounded-full font-medium transition-colors',
          purpose === 'for-sale' 
            ? 'bg-primary text-white' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        ]"
      >
        For Sale
      </button>
    </div>

    <div v-if="loading" class="flex justify-center items-center min-h-[400px]">
      <div class="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
      <PropertyCard 
        v-for="property in properties" 
        :key="property.id" 
        :property="property"
        class="animate-slide-up"
      />
    </div>
  </div>
</template>