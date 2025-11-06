<template>
  <section class="min-h-screen bg-neutral-950 text-white px-8 py-20">
    <h2 class="text-4xl font-bold mb-10 text-cyan-400 text-center">Blog</h2>

    <!-- Formulario -->
    <form
      @submit.prevent="submitPost"
      class="max-w-2xl mx-auto bg-neutral-900 p-8 rounded-xl shadow-lg space-y-6 border border-neutral-800"
    >
      <div>
        <label class="block mb-2 text-cyan-400 font-semibold">Título</label>
        <input
          v-model="form.title"
          type="text"
          placeholder="Título del artículo"
          class="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 focus:border-cyan-500 outline-none"
          required
        />
      </div>

      <div>
        <label class="block mb-2 text-cyan-400 font-semibold">Extracto</label>
        <textarea
          v-model="form.excerpt"
          placeholder="Resumen breve del artículo"
          class="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 h-24 resize-none focus:border-cyan-500 outline-none"
        ></textarea>
      </div>

      <div>
        <label class="block mb-2 text-cyan-400 font-semibold">Contenido</label>
        <textarea
          v-model="form.content"
          placeholder="Contenido del artículo..."
          class="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 h-40 resize-none focus:border-cyan-500 outline-none"
          required
        ></textarea>
      </div>

      <div>
        <label class="block mb-2 text-cyan-400 font-semibold"
          >Imagen (URL)</label
        >
        <input
          v-model="form.image"
          type="url"
          placeholder="https://..."
          class="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 focus:border-cyan-500 outline-none"
        />
      </div>

      <button
        type="submit"
        class="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all w-full"
      >
        Publicar artículo 🚀
      </button>

      <p v-if="successMessage" class="text-green-400 text-center mt-4">
        {{ successMessage }}
      </p>
      <p v-if="errorMessage" class="text-red-400 text-center mt-4">
        {{ errorMessage }}
      </p>
    </form>
  </section>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const form = ref({
  title: "",
  excerpt: "",
  content: "",
  image: "",
});

const successMessage = ref("");
const errorMessage = ref("");

// Cambia esta URL a la de tu backend
const API_URL = "https://jairpl.com/back/public/api/posts";

const submitPost = async () => {
  try {
    const { data } = await axios.post(API_URL, form.value);
    successMessage.value = "Artículo publicado correctamente 🎉";
    errorMessage.value = "";
    // Limpia el formulario
    form.value = { title: "", excerpt: "", content: "", image: "" };
    console.log("Nuevo post:", data);
  } catch (error) {
    console.error(error);
    errorMessage.value = "Ocurrió un error al publicar el artículo ❌";
    successMessage.value = "";
  }
};
</script>
