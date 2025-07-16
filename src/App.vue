<!-- src/App.vue -->
<template>
  <BaseLayout>
    <HeroSection />
    <SkillsSection />
    <ProjectsSection />
    <DownloadCVSection /> 
    <ContactSection />
  </BaseLayout>
</template>

<script setup>
import BaseLayout from './components/layout/BaseLayout.vue'
import HeroSection from './views/sections/HeroSection.vue'
import SkillsSection from './views/sections/SkillsSection.vue'
import DownloadCVSection from './views/sections/DownloadCVSection.vue'
import ProjectsSection from './views/sections/ProjectsSection.vue'
import ContactSection from './views/sections/ContactSection.vue'

import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
})
</script>