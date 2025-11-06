<template>
  <div class="relative min-h-screen bg-neutral-950 text-white overflow-hidden">
    <HeroSection :scrollY="scrollY" />
    <About />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import HeroSection from "~/components/ui/HeroSection.vue";
import About from "./about.vue";

const scrollY = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.transition-section {
  position: relative;
  background: linear-gradient(to bottom, #000010, #0a0a0a);
}

html,
body {
  scroll-snap-type: y mandatory;
}
section {
  scroll-snap-align: start;
}
</style>
