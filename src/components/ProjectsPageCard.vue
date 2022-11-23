<script setup>
defineProps({
  project: Object
})

</script>

<template>
  <div class="card w-full h-full border border-2 text-center">
    <div class="header">{{ project.cardHeader }}</div>
    <div class="main-section">
      <div class="project-title ">{{ project.projectName }}</div>
      <div class="project-technologies">{{ project.projectTech }}</div>
      <div class="project-description">{{ project.projectDesc }}</div>
    </div>
  </div>
</template>