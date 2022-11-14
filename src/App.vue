<script setup>
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue';
import ProjectsPage from './components/ProjectsPage.vue';
import ResumePage from './components/ResumePage.vue';
import ContactPage from './components/ContactPage.vue';
</script>

<template>
  <div class="container mx-auto max-w-5xl">
    <HomePage />
    <AboutPage />
    <ProjectsPage />
    <ResumePage />
    <ContactPage />
    <h1 class="scoper text-3xl font-bold underline">
      This is the hompage in App.vue delete me later
    </h1>
  </div>
</template>

<style scoped>

</style>
