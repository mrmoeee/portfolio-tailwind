<script setup>
const name = "Hello, my name's Matthew Moe and"
const introHighlight = "I am a Software Developer"
const introMsg = "Some sort of intro message here"
</script>

<template>
  <div class="flex flex-row justify-evenly max-w-5xl">
    <div class="flex flex-col w-full items-center">
      <p>{{ name }}</p>
      <p>{{ introHighlight }}</p>
      <p>{{ introMsg }}</p>
    </div>
    <div class="flex flex-col w-full items-center">
      Somesort of catchy art piece
    </div>
  </div>
</template>