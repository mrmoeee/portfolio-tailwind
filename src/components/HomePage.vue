<script setup>
import { ref } from 'vue'
import NavBar from './NavBar.vue'
import LandingPage from './LandingPage.vue'
defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <NavBar />
  <LandingPage />
  <!-- <h1>{{ msg }}</h1> remove later, just here to show props -->
</template>

<style scoped>

</style>
