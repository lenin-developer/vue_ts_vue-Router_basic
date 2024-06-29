<script setup lang="ts"></script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/articulos:id">articulos</router-link> |
  </nav>
  <main>
    <router-view />
  </main>
</template>

<style scoped>
a {
  color: #8895f7;
}

/** para la ruta proncipal  */
.router-link-active {
  color: #42b983;
}

/** para las subrutas  */
.router-link-exact-active {
  color: #42b983;
}
</style>
