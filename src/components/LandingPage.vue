<script setup>
import { onMounted } from 'vue';

const name = "Hello, my name's Matthew Moe and"
const introHighlight = "I am a Software Developer"
const introMsg = "Some sort of intro message here"

onMounted(() => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  ctx.fillStyle = "green";
  ctx.fillRect(canvas.width / 20, canvas.height / 20, 150, 100);

})
</script>

<template>
  <div class="flex flex-row justify-evenly max-w-5xl h-96 items-center my-20">
    <div class="w-full h-full border-2 border-black">
      <p class="">{{ name }}</p>
      <p class="">{{ introHighlight }}</p>
      <p class="">{{ introMsg }}</p>
    </div>
    <div id="canvas-container" class="w-full h-full">
      <canvas class="p-2" id="canvas"></canvas>
    </div>
  </div>
</template>