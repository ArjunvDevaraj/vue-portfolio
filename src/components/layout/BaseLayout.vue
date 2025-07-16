<!-- src/components/layout/BaseLayout.vue -->
<template>
    <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <!-- Navbar -->
      <header>
        <nav class="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-900 fixed w-full z-50">
          <div class="flex items-center gap-2">
            <span class="font-bold text-2xl">Arjun V D</span>
            <span class="text-sm text-gray-500 dark:text-gray-400">| Software Developer</span>
          </div>
          <ul class="hidden md:flex gap-6 font-medium">
            <li><a href="#skills" class="hover:text-primary">Skills</a></li>
            <li><a href="#projects" class="hover:text-primary">Projects</a></li>
            <li><a href="#download-cv" class="hover:text-primary">Resume</a></li>
            <li><a href="#contact" class="hover:text-primary">Contact</a></li>
          </ul>
        </nav>
      </header>
  
      <!-- Page content -->
      <main class="flex-grow pt-24">
        <slot />
      </main>
  
      <!-- Footer -->
      <footer class="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2025 Arjun V D — All rights reserved.
      </footer>
    </div>
  </template>


  <style scoped>
  .text-primary {
    @apply text-green-600 dark:text-green-400;
  }
  </style>
  