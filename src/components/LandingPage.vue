<script setup>
const name = "Hello, my name's Matthew Moe and"
const introHighlight = "I am a Software Developer"
const introMsg = "Some sort of intro message here"
</script>

<template>
  <div class="flex flex-row justify-evenly max-w-5xl h-96 items-center">
    <div class="w-full h-full border-2 border-black">
      <p class="">{{ name }}</p>
      <p class="">{{ introHighlight }}</p>
      <p class="">{{ introMsg }}</p>
    </div>
    <div class="w-full h-full">
      Somesort of catchy art piece or canvas ? no need to center this text if canvas
    </div>
  </div>
</template>