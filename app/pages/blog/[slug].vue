<!-- pages/blog/[slug].vue -->
<template>
  <div v-if="pending">Cargando...</div>
  <div v-else-if="error">
    <p>Error cargando el post: {{ error.message }}</p>
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
  <div v-else>
    <p>Post no encontrado</p>
  </div>
</template>

<script setup>
// Obtener el slug de la ruta
const route = useRoute();
const slug = route.params.slug;
const config = useRuntimeConfig();

// URL de la API
const apiUrl = `${config.public.apiBase}/posts/${slug}`;

// Cargar datos con mejor manejo de errores
const {
  data: post,
  pending,
  error,
} = await useAsyncData(`post-${slug}`, () =>
  $fetch(apiUrl).catch((err) => {
    console.error("Error fetching post:", err);
    throw err;
  })
);

// Manejo de errores - SIN throw createError durante prerender
if (process.server) {
  // Durante el prerender, solo log el error
  if (error.value) {
    console.error(`Error prerenderizando /blog/${slug}:`, error.value);
  }

  if (!post.value) {
    console.error(`Post no encontrado para slug: ${slug}`);
  }
} else {
  // En el cliente, usa createError normalmente
  if (error.value || !post.value) {
    throw createError({
      statusCode: error.value?.statusCode || 404,
      statusMessage: "Post no encontrado",
    });
  }
}

// SEO condicional
useSeoMeta({
  title: post.value
    ? `${post.value.title} | Jair Pariona`
    : "Post no encontrado",
  description: post.value?.excerpt || "Artículo del blog",
  ogTitle: post.value?.title,
  ogDescription: post.value?.excerpt,
  ogImage: post.value?.image,
  twitterCard: "summary_large_image",
});
</script>
