<script setup>
import { onMounted } from 'vue';

const name = "Hello, my name's Matthew Moe and"
const introHighlight = "I am a Software Developer"
const introMsg = "Some sort of intro message here"

onMounted(() => {
  const canvas = document.getElementById("canvas");
  let raf;
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  // check for support of canvas
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // drawing code
    const ball = {
      x: 100,
      y: 100,
      vx: 0.2,
      vy: 0.5,
      radius: 25,
      color: "blue",
      // function to draw the object
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill()
      },

      resetBall() {
        this.x = 100;
        this.y = 100;
      }
    }
    // variables for stars
    let stars = [];
    // different layers for stars
    let layers = [
      { speed: 0.02, scale: 0.2, count: 150 },
      { speed: 0.04, scale: 0.5, count: 50 },
      { speed: 0.05, scale: 0.75, count: 20 },
    ];
    let starBaseRadius = 3;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ball.draw();
      ball.x += ball.vx;
      ball.y += ball.vy;

      if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
        ball.resetBall();
        console.log('reset! y');
      }
      if (ball.x + ball.xy > canvas.width || ball.x + ball.xy < 0) {
        ball.resetBall();
        console.log('reset! x');
      }




      raf = window.requestAnimationFrame(draw);
    }

    window.requestAnimationFrame(draw);

    ball.draw();

  } else {
    // canvas-unsupported code here (image or art piece)
  }

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