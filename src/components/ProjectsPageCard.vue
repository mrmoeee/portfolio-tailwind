<script setup>
defineProps({
  project: Object
})

</script>

<template>
  <div class="card border border-2 w-4/5 h-72 flex flex-col justify-evenly">
    <div class="header">{{ project.cardHeader }}</div>
    <div class="main-section break-words">
      <div class="project-title">{{ project.projectName }} </div>
      <div class="project-technologies">{{ project.projectTech }}
      </div>
      <div class="project-description">{{ project.projectDesc }}</div>
    </div>
    <div class="buttons">
      <button class="b1">button1</button>
      <button class="b1">button2</button>
    </div>
  </div>
</template>