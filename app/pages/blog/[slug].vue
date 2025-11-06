<template>
  <article class="max-w-3xl mx-auto py-20 px-6 text-gray-200">
    <h1 class="text-5xl font-bold mb-6">{{ post?.title }}</h1>
    <img v-if="post?.image" :src="post.image" class="rounded-lg mb-6" />
    <div v-html="post?.content" class="prose prose-invert"></div>
  </article>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useHead, useFetch, createError } from "#app"; // Importaciones necesarias

// 1. Obtener la ruta
const route = useRoute();
const slug = route.params.slug;

// 2. Usar useFetch para cargar datos. Esto funciona tanto en SSR como en el cliente.
const { data: post, error } = await useFetch(
  `https://jairpl.com/back/public/api/posts/${slug}`,
  {
    // Opciones para manejar la carga y el error
    key: `post-${slug}`, // Clave única para la caché
  }
);

// 3. Manejo de errores 404
if (error.value || !post.value) {
  // Si useFetch encuentra un error de red o la API devuelve un código de error (ej. 404),
  // o si la respuesta es nula/vacía, forzamos un error de Nuxt.

  // Si la API devuelve un 404, useFetch captura 'error.value'
  const statusCode = error.value?.statusCode || 404;

  throw createError({
    statusCode: statusCode,
    statusMessage: "Artículo de Blog no encontrado",
    fatal: true, // Esto asegura que la página de error de Nuxt se muestre.
  });
}

// 4. Configuración del <head> (SEO) - Ahora se ejecuta de forma síncrona después de obtener los datos
useHead({
  title: post.value.title + " | Jair Pariona",
  meta: [
    { name: "description", content: post.value.excerpt },
    { property: "og:title", content: post.value.title },
    { property: "og:description", content: post.value.excerpt },
    { property: "og:image", content: post.value.image },
  ],
});
</script>
