<template>
  <section
    class="relative min-h-screen bg-[#0b0f12] text-white px-6 md:px-16 py-24 overflow-hidden"
  >
    <!-- Fondo con gradiente animado -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-600/5 blur-3xl pointer-events-none"
    ></div>

    <div class="relative z-10 max-w-7xl mx-auto">
      <!-- Título -->
      <h2
        class="text-5xl md:text-6xl font-extrabold mb-16 text-center tracking-tight"
      >
        <span class="text-cyan-400">#</span>Blog
      </h2>

      <!-- Grid de posts -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="post in posts"
          :key="post.id"
          class="group relative bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 rounded-2xl shadow-xl overflow-hidden border border-neutral-800 hover:border-cyan-500/50 transition-all duration-300"
        >
          <!-- Imagen -->
          <div class="overflow-hidden h-48">
            <img
              v-if="post.image"
              :src="post.image"
              alt="post image"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          </div>

          <!-- Contenido -->
          <div class="p-6">
            <h3
              class="text-2xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300"
            >
              {{ post.title }}
            </h3>

            <p class="text-gray-400 text-base line-clamp-3 mb-4">
              {{ post.excerpt }}
            </p>

            <NuxtLink
              :to="`/blog/${post.slug}`"
              class="inline-flex items-center gap-2 text-cyan-400 hover:gap-3 transition-all duration-300 font-medium"
            >
              Leer más
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </NuxtLink>
          </div>

          <!-- Efecto glow en hover -->
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_#00ffff33,_transparent_70%)]"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const posts = ref([]);

onMounted(async () => {
  try {
    const { data } = await axios.get(
      "https://jairpl.com/back/public/api/posts"
    );
    posts.value = data;
  } catch (error) {
    console.error("Error al cargar los posts:", error);
  }
});
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
