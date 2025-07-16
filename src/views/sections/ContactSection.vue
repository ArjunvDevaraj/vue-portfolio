<template>
  <section id="contact" class="py-20 px-6">
    <h2 class="text-3xl font-bold mb-8 text-center">Contact Me</h2>

    <div class="text-center">
      <p class="mb-4 text-gray-600 dark:text-gray-300">
        Feel free to reach out for collaboration or just a friendly chat.
      </p>

      <!-- Email Button -->
      <a
        href="mailto:arjunamb96@gmail.com"
        class="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors mb-4"
      >
        Email Me
      </a>

      <!-- Mobile Number -->
      <p class="mt-4 text-lg text-gray-800 dark:text-gray-200">
        Or call me: 
        <a
          href="tel:+917994692302"
          class="text-primary underline hover:text-green-700"
        >
          +91 79946 92302
        </a>
      </p>
    </div>
  </section>
</template>

<style scoped>
.bg-primary {
  @apply bg-green-600;
}
</style>
