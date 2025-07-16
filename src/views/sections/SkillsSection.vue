<!-- src/components/sections/SkillsSection.vue -->
<template>
    <section id="skills" class="py-20 px-6">
      <h2 class="text-3xl font-bold mb-8 text-center">Skills</h2>
      <!-- Example grid -->
      <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <li
          v-for="skill in skills"
          :key="skill.name"
          class="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition"
        >
        <font-awesome-icon :icon="skill.icon" class="text-primary mb-2" size="2x" />
          <span>{{ skill.name }}</span>
        </li>
      </ul>
    </section>
  </template>
  
  <script setup>
  const skills = [
  { name: 'Laravel', icon: ['fab', 'laravel'] },
  { name: 'Vue.js', icon: ['fab', 'vuejs'] },
  { name: 'Nuxt.js', icon: ['fas', 'code'] }, // Font Awesome does not have Nuxt, use code icon
  { name: 'JavaScript', icon: ['fab', 'js'] },
  { name: 'TypeScript', icon: ['fas', 'code'] }, // Or use another suitable icon
  { name: 'SQL / MySQL / PostgreSQL', icon: ['fas', 'database'] },
  { name: 'Git', icon: ['fab', 'git-alt'] },
  { name: 'REST API', icon: ['fas', 'project-diagram'] },
]
  </script>
  