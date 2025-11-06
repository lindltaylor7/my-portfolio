<template>
  <nav
    :class="'fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 transition-all duration-500 backdrop-blur-sm bg-transparent text-white'"
  >
    <!-- Logo / Nombre -->
    <div class="text-3xl font-bold select-none tracking-wide">
      Jair Pariona<span class="text-red-500">*</span>
    </div>

    <!-- Links -->
    <ul class="hidden md:flex gap-10 text-xl font-normal">
      <li v-for="item in navItems" :key="item.name">
        <NuxtLink :to="item.to" class="relative group">
          {{ item.name }}
          <span
            class="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"
          ></span>
        </NuxtLink>
      </li>
    </ul>

    <!-- Menú móvil -->
    <button
      @click="isOpen = !isOpen"
      class="md:hidden focus:outline-none"
      :class="scrolled ? 'text-black' : 'text-white'"
    >
      <svg
        v-if="!isOpen"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Menú móvil desplegable -->
    <transition name="fade">
      <ul
        v-if="isOpen"
        class="absolute top-20 right-10 bg-black/90 text-white rounded-2xl p-6 flex flex-col gap-4 text-lg"
      >
        <li v-for="item in navItems" :key="item.name">
          <NuxtLink
            :to="item.to"
            @click="isOpen = false"
            class="hover:text-red-500 transition font-brush"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isOpen = ref(false);
const scrolled = ref(false);

const navItems = [
  { name: "Inicio", to: "/" },
  { name: "Proyectos", to: "/" },
  { name: "Blog", to: "/" },
  { name: "Contacto", to: "/" },
];

const handleScroll = () => {
  scrolled.value = window.scrollY > window.innerHeight * 0.6;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap");

.font-brush {
  font-family: "Caveat", cursive;
}

/* Animación fade para menú móvil */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
