<script setup>
import { onMounted, onUpdated } from 'vue';

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
    const star = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      radius: 0,
      color: "white",
      // create star
      create(x, y) {
        let star = Object.create(this);
        star.x = x;
        star.y = y;
        // set speed
        // this.vx = this.setSpeed();
        // this.vy = this.setSpeed();
        // 
        return star;
      },

      // function to draw the object
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill()
      },

      setSpeed(speed) {

      },

      update() {
        this.x += this.vx;
        this.y += this.vy;
      },

      resetStar() {
        this.x = 100;
        this.y = 100;
      },
    }
    // variables for stars
    let stars = [];
    // different layers for stars
    let layers = [
      { speed: 0.02, scale: 0.2, count: 500 },
      { speed: 0.04, scale: 0.5, count: 75 },
      { speed: 0.05, scale: 0.75, count: 30 },
    ];
    let starBaseRadius = 4;

    // creating the stars
    layers.forEach((layer) => {
      for (let i = 0; i < layer.count; i += 1) {
        let starLayer = star.create(randomSpawn(canvas.width), randomSpawn(canvas.height))
        starLayer.radius = starBaseRadius * layer.scale;
        stars.push(starLayer);
      }
    })
    // function to randomize star spawn point
    function randomSpawn(max) {
      return Math.floor(Math.random() * max);
    }

    function draw() {
      // black background
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // draw stars
      stars.forEach((star) => {
        star.draw();
        // update star here to move the star
      })

      // boundary check for stars
      if (star.y + star.vy > canvas.height || star.y + star.vy < 0) {
        star.resetStar();
        console.log('reset! y');
      }
      if (star.x + star.xy > canvas.width || star.x + star.xy < 0) {
        star.resetStar();
        console.log('reset! x');
      }

      raf = window.requestAnimationFrame(draw);
    }

    window.requestAnimationFrame(draw);
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
      <canvas class="rounded" id="canvas"></canvas>
    </div>
  </div>
</template>