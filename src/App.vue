<script setup>
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue';
import ProjectsPage from './components/ProjectsPage.vue';
import ContactPage from './components/ContactPage.vue';
import FooterSocials from './components/FooterSocials.vue';
</script>

<template>
  <div class="container mx-auto max-w-5xl shadow-2xl shadow-slate-50 p-10">
    <HomePage />
    <AboutPage />
    <ProjectsPage />
    <ContactPage />
  </div>

  <FooterSocials />
</template>

<style scoped>

</style>