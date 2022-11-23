<script setup>
const skills = [
  {
    language: 'JavaScript',
    image: 'javascript icon'
  },
  {
    language: 'React',
    image: 'React icon'
  },
  {
    language: 'Next.js',
    image: 'Next.js icon'
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
    <div class="w-full h-full grid grid-cols-1 content-evenly justify-items-center">
      <p>Skills</p>
      <ul class="grid grid-cols-2 gap-2 justify-items-center">
        <li v-for="skill in skills" :key="skill.language" class="flex">
          <p>{{ skill.image }}</p>
          <p>{{ skill.language }}</p>
        </li>
      </ul>
    </div>

    <div class="w-full h-full border-2 border-black">
      stuff about me, music, movies, how i keep uptodate with
    </div>
  </div>
</template>