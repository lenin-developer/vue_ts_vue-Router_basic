<script setup lang="ts">
import { ref, Ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <h3>Articulos {{ $route.params.id }}</h3>
  <ul>
    <router-link :to="{ name: 'articulos', params: { id: 1 } }"
      >articulo-1
    </router-link>
    <router-link :to="{ name: 'articulos', params: { id: 2 } }"
      >articulo-2
    </router-link>
    <router-link :to="{ name: 'articulos', params: { id: 3 } }"
      >articulo-3
    </router-link>
  </ul>
</template>
