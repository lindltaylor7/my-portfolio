<template>
  <footer
    class="bg-neutral-900 text-gray-300 py-12 px-8 flex flex-col md:flex-row items-center justify-between border-t border-neutral-800"
  >
    <!-- Nombre / Marca -->
    <div class="text-2xl font-bold mb-6 md:mb-0">
      Jair Pariona<span class="text-red-500">*</span>
    </div>

    <!-- Enlaces -->
    <ul class="flex flex-wrap justify-center gap-8 text-lg">
      <li v-for="item in footerLinks" :key="item.name">
        <NuxtLink
          :to="item.to"
          class="relative group transition-colors duration-300"
        >
          {{ item.name }}
          <span
            class="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"
          ></span>
        </NuxtLink>
      </li>
    </ul>

    <!-- Redes sociales -->
    <div class="flex gap-6 mt-6 md:mt-0">
      <a
        v-for="social in socials"
        :key="social.name"
        :href="social.link"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-400 hover:text-red-500 transition-colors duration-300"
      >
        <component :is="social.icon" class="w-6 h-6" />
      </a>
    </div>
  </footer>

  <div
    class="bg-neutral-950 text-center text-gray-500 py-4 text-sm border-t border-neutral-800"
  >
    © {{ new Date().getFullYear() }} Jair Pariona. Todos los derechos
    reservados.
  </div>
</template>

<script setup lang="ts">
import { Github, Linkedin, Instagram } from "lucide-vue-next";

const footerLinks = [
  { name: "Inicio", to: "/" },
  { name: "Proyectos", to: "/" },
  { name: "Blog", to: "/" },
  { name: "Contacto", to: "/" },
];

const socials = [
  { name: "GitHub", icon: Github, link: "https://github.com/lindltaylor7" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/jair-pariona-4a4712337",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://www.instagram.com/geekpilgrim",
  },
];
</script>

<style scoped>
footer {
  backdrop-filter: blur(4px);
}
</style>
