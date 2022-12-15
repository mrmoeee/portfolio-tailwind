<script setup>
const skills = [
  {
    language: 'JavaScript',
    image: 'fa-brands fa-square-js'
  },
  {
    language: 'React',
    image: 'React icon'
  },
  {
    language: 'Next.js',
    image: 'Next.js Icon'
  },
  {
    language: 'TypeScript',
    image: 'TypeScript icon'
  },
  {
    language: 'HTML',
    image: 'HTML icon'
  },
  {
    language: 'CSS3',
    image: 'CSS3 icon'
  },
]
</script>

<template>
  <div class="flex flex-row max-w-5xl h-96 my-20">
    <div class="w-full h-full grid grid-cols-1 content-center">
      <p class="text-center mb-8 text-center text-2xl antialiased font-light tracking-widest">Skills</p>
      <div class="flex justify-center mb-4">
        <ul class="grid grid-cols-2 gap-2 justify-items-center w-4/6">
          <li key="JavaScript" class="flex flex-col">
            <font-awesome-icon icon="fa-brands fa-square-js" size="4x" />
            <p class="text-center text-center text-xl antialiased font-light tracking-widest my-2">JavaScript</p>
          </li>
          <li key="React" class="flex flex-col">
            <font-awesome-icon icon="fa-brands fa-react" size="4x" />
            <p class="text-center text-center text-xl antialiased font-light tracking-widest my-2">React</p>
          </li>
          <li key="HTML" class="flex flex-col">
            <font-awesome-icon icon="fa-brands fa-html5" size="4x" />
            <p class="text-center text-center text-xl antialiased font-light tracking-widest my-2">HTML</p>
          </li>
          <li key="CSS3" class="flex flex-col">
            <font-awesome-icon icon="fa-brands fa-css3" size="4x" />
            <p class="text-center text-center text-xl antialiased font-light tracking-widest my-2">CSS3</p>
          </li>
        </ul>
      </div>
      <div class="flex justify-center">
        <button class="shadow-md rounded w-3/4 p-2">
          <a class="text-center text-center text-xl antialiased font-light tracking-widest" href="path_to_file"
            download="proposed_file_name">
            Download my resume
            <font-awesome-icon icon="fa-solid fa-download" />
          </a>
        </button>
      </div>
    </div>
    <div class="w-full h-full border-2 border-black">
      stuff about me, music, movies, how i keep uptodate with
    </div>
  </div>
</template>