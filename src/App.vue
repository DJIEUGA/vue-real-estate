<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-screen">
    <header class="bg-white shadow-sm">
      <nav class="container mx-auto px-4 py-4">
        <router-link to="/" class="text-2xl font-bold text-primary">
          VueEstate
        </router-link>
      </nav>
    </header>

    <RouterView v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>