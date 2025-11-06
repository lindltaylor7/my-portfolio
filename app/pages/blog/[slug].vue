<template>
  <article class="max-w-3xl mx-auto py-20 px-6 text-gray-200">
    <h1 class="text-5xl font-bold mb-6">{{ post?.title }}</h1>
    <img v-if="post?.image" :src="post.image" class="rounded-lg mb-6" />
    <div v-html="post?.content" class="prose prose-invert"></div>
  </article>
</template>

<script setup>
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const post = ref(null);

onMounted(async () => {
  const { data } = await axios.get(
    `http://localhost:8000/api/posts/${route.params.slug}`
  );
  post.value = data;

  useHead({
    title: post.value.title + " | Jair Pariona",
    meta: [
      { name: "description", content: post.value.excerpt },
      { property: "og:title", content: post.value.title },
      { property: "og:description", content: post.value.excerpt },
      { property: "og:image", content: post.value.image },
    ],
  });
});
</script>
