<template>
  <div v-if="pending" class="text-center py-20">
    <p>Cargando post...</p>
  </div>
  <div v-else-if="error" class="text-center py-20">
    <p>Error cargando el post</p>
    <button
      @click="reload"
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
    >
      Reintentar
    </button>
  </div>
  <article v-else-if="post" class="max-w-3xl mx-auto py-20 px-6 text-gray-200">
    <h1 class="text-5xl font-bold mb-6">{{ post.title }}</h1>
    <img
      v-if="post.image"
      :src="post.image"
      class="rounded-lg mb-6 w-full"
      alt="Imagen del post"
    />
    <div v-html="post.content" class="prose prose-invert max-w-none"></div>
  </article>
</template>

<script setup>
const route = useRoute();
const config = useRuntimeConfig();

// Obtener el slug desde query parameter
const slug = ref(route.query.slug || "");

// Cargar el post
const {
  data: post,
  pending,
  error,
} = await useAsyncData(
  "blog-post",
  () => $fetch(`${config.public.apiBase}/posts/${slug.value}`),
  {
    watch: [slug], // Recargar cuando cambie el slug
  }
);

// Recargar si hay error
const reload = () => {
  refreshNuxtData("blog-post");
};

// SEO dinámico
useSeoMeta({
  title: post.value ? `${post.value.title} | Jair Pariona` : "Blog Post",
  description: post.value?.excerpt || "Artículo del blog de Jair Pariona",
  ogTitle: post.value?.title,
  ogDescription: post.value?.excerpt,
  ogImage: post.value?.image,
});

// Si no hay slug, redirigir al listado
if (!slug.value) {
  await navigateTo("/blog");
}
</script>
