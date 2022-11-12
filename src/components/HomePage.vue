<script setup>
import { ref } from 'vue'
import NavBar from './NavBar.vue';
defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <NavBar />
  <div>This is in HomePage Component</div>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

</template>

<style scoped>

</style>
