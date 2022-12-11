<script setup>
defineProps({
  project: Object
})
</script>

<template>
  <div class="card border rounded-lg w-4/5 h-72 flex flex-col">
    <div class="header h-36">{{ project.cardHeader }}</div>
    <div class="main-section break-words">
      <div class="project-title p-2 text-sm">{{ project.projectName }} </div>
      <div class="project-technologies p-2 text-sm truncate ">{{ project.projectTech }}
      </div>
      <div class="project-description p-2 text-xs truncate hover:">{{ project.projectDesc }}</div>
    </div>
    <div class="buttons">
      <button class="b1">button1</button>
      <button class="b2">button2</button>
    </div>
  </div>
</template>