<template>
  <div class="min-h-screen bg-neutral-950 text-white">
    <ClientOnly>
      <UiMainNav />
    </ClientOnly>
    <NuxtPage />
    <UiMainFooter />
  </div>
</template>

<script setup>
import UiMainNav from "~/components/ui/MainNav.vue";
import UiMainFooter from "~/components/ui/MainFooter.vue";
</script>
