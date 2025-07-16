<template>
    <section id="download-cv" class="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <h2 class="text-3xl font-bold mb-8 text-center">Resume</h2>
  
      <div class="flex flex-col items-center">
        <!-- Thumbnails Preview -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-6xl">
          <div
            v-for="page in pageThumbs"
            :key="page"
            class="relative group overflow-hidden rounded-lg shadow-lg border"
          >
            <img
              :src="`/cv/thumb/${page}.png`"
              :alt="`Resume Page ${page}`"
              class="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
  
        <!-- Download Button -->
        <a
          :href="pdfUrl"
          download
          class="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
        >
          Download CV
        </a>
      </div>
    </section>
  </template>
  
  <script setup>
  const pdfUrl = '/cv/Arjun_V_D_CV.pdf'
  const pageThumbs = [1, 2, 3]
  </script>
  
  <style scoped>
  .bg-primary {
    @apply bg-green-600;
  }
  </style>
  