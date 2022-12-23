<script setup>
import { onMounted, onUpdated } from 'vue';
import initType from '../lib/typingIntro';
const name = "Hello, my name's Matthew Moe"
const introHighlight = "I am a Software Developer"
const introMsg = "Some sort of intro message here"

onMounted(() => {
  initType();
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
        return star;
      },

      // function to draw the star
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill()
      },
      // randomize starspeed
      setSpeed(speed) {
        let randomSpeed = randomInt(3);
        randomSpeed === 0 ? randomSpeed = 0.5 : randomSpeed;
        return randomSpeed * speed;
      },

      update() {
        this.x += this.vx;
        this.y += this.vy;
      },
      // reset star location
      resetStar() {
        this.x = randomInt(canvas.width);
        this.y = randomInt(canvas.height);
      },
    }
    // variables for stars
    let stars = [];
    // different layers for stars
    let layers = [
      { speed: 0.04, scale: 0.2, count: 500 },
      { speed: 0.07, scale: 0.4, count: 75 },
      { speed: 0.09, scale: 0.6, count: 30 },
    ];
    let starBaseRadius = 4;

    // creating the stars
    layers.forEach((layer) => {
      for (let i = 0; i < layer.count; i += 1) {
        let starLayer = star.create(randomInt(canvas.width), randomInt(canvas.height))
        starLayer.radius = starBaseRadius * layer.scale;
        starLayer.vx = starLayer.setSpeed(layer.speed);
        starLayer.vy = starLayer.setSpeed(layer.speed);
        stars.push(starLayer);
      }
    })

    function randomInt(max) {
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
        star.update();
        // boundary check for stars
        if (star.y + star.vy > canvas.height || star.y + star.vy < 0) {
          star.resetStar();
        }
        if (star.x + star.xy > canvas.width || star.x + star.xy < 0) {
          star.resetStar();
        }
      })


      raf = window.requestAnimationFrame(draw);
    }

    window.requestAnimationFrame(draw);
  } else {
    // canvas-unsupported code here (image)
  }

})
</script>

<template>
  <div class="flex flex-row justify-evenly max-w-5xl h-96 items-center my-20">
    <div class="w-full h-full border-2 border-black">
      <p class="">{{ name }}</p>
      <p class="txt-type" data-wait="2000"
        data-words='["a&nbsp;Software&nbsp;Developer", "a&nbsp;creator", "driven", "motivated"]'>temp span</p>
      <p class="">{{ introMsg }}</p>
    </div>
    <div id="canvas-container" class="w-full h-full">
      <canvas class="rounded" id="canvas"></canvas>
    </div>
  </div>
</template>