<template>
  <section
    id="hero"
    ref="heroSection"
    class="relative flex flex-col items-center justify-center text-center overflow-hidden py-40 px-6"
  >
    <!-- Animated blobs -->
    <div
      v-for="(blob, index) in blobs"
      :key="index"
      class="absolute pointer-events-none rounded-full blur-3xl opacity-30"
      :ref="el => blobRefs[index] = el"
      :style="{
        width: blob.size + 'px',
        height: blob.size + 'px',
        background: blob.gradient
      }"
    ></div>

    <!-- Hero content -->
    <h1 class="text-4xl md:text-5xl font-extrabold mb-4 text-white relative z-10">
      Hi, I'm
      <span class="ml-2 text-primary">
        <span class="typing inline-block">{{ name }}</span>
      </span>
    </h1>

    <p class="text-lg md:text-xl mb-6 text-gray-200 relative z-10">
      Senior Software Engineer | Laravel | Vue | Nuxt
    </p>

    <a
      href="mailto:arjunamb96@gmail.com"
      class="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors relative z-10"
    >
      Let’s Connect
    </a>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

// Name text
const name = 'Arjun V D'

// Blobs config
const blobs = [
  { size: 300, gradient: 'radial-gradient(circle at center, #4ade80, transparent)' },
  { size: 250, gradient: 'radial-gradient(circle at center, #22d3ee, transparent)' },
  { size: 200, gradient: 'radial-gradient(circle at center, #a78bfa, transparent)' },
]

const blobRefs = []
const heroSection = ref(null)

function handleMouseMove(e) {
  const { clientX, clientY } = e
  const rect = heroSection.value.getBoundingClientRect()
  const x = clientX - rect.left
  const y = clientY - rect.top

  blobRefs.forEach((blob, index) => {
    const factor = (index + 1) * 0.05
    gsap.to(blob, {
      x: x * factor - blob.offsetWidth / 2,
      y: y * factor - blob.offsetHeight / 2,
      scale: 1 + factor,
      ease: 'power2.out',
      duration: 0.5,
    })
  })
}

onMounted(() => {
  heroSection.value.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  heroSection.value.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped>
section {
  background-color: #0f172a; /* slate-900 */
}

.text-primary {
  @apply text-green-400;
}

.bg-primary {
  @apply bg-green-600;
}

.typing {
  display: inline-block; /* ensure block/inline-block for width animation */
  border-right: 2px solid #4ade80; /* blinking cursor */
  white-space: nowrap;
  overflow: hidden;
  animation:
    typing 2s steps(9, end), /* 9 = name length */
    blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  50% {
    border-color: transparent;
  }
}
</style>
