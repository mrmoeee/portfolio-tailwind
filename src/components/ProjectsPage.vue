<script setup>
import ProjectsPageCardVue from './ProjectsPageCard.vue';
const projects = [
  {
    id: 1,
    cardHeader: 'some image',
    projectName: 'My Journal',
    projectTech: 'description of technology used',
    projectDesc: 'summary of the project',
  },
  {
    id: 2,
    cardHeader: 'some image',
    projectName: 'Some API project',
    projectTech: 'description of technology used',
    projectDesc: 'summary of the project',
  },
  {
    id: 3,
    cardHeader: 'some image',
    projectName: 'another game like snake maybe asteroids',
    projectTech: 'description of technology used',
    projectDesc: 'summary of the project',
  },
  {
    id: 4,
    cardHeader: 'some image',
    projectName: 'Cosmic Snaps',
    projectTech: 'JavaScript, HTML, CSS, React.js, Redux, PostgreSQL, Ruby, Rails',
    projectDesc: 'A space-themed clone of 500px, an Image Hosting Site',
  },
  {
    id: 5,
    cardHeader: 'some image',
    projectName: 'TypeDraw',
    projectTech: 'MongoDB, Express, React/ React Native, Node',
    projectDesc: 'Multi-platform mobile and web application for real-time collaboration on a digital whiteboard',
  },
  {
    id: 6,
    cardHeader: 'some image',
    projectName: 'Snake',
    projectTech: 'JavaScript, CSS, HTML5 Canvas ',
    projectDesc: 'Implementation of classic Snake game with extra features',
  },

]
</script>

<template>
  <div class="text-center">
    <p class="text-center mb-8 text-center text-2xl antialiased font-light tracking-widest">Projects page</p>
    <!-- 1 card for now, for loop later -->
    <!-- gonna have to put in ul, using a for loop to return li items that return this component -->
    <div class="">
      <ul class="grid grid-cols-3 gap-8">
        <li v-for="project in projects" :key="project.id" class="flex justify-center p-2">
          <ProjectsPageCardVue :project="project" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>