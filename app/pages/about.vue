<template>
  <section
    class="min-h-screen flex flex-col justify-center items-center bg-[#0d161c] text-neutral-900 px-8 py-20"
  >
    <div class="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
      <!-- Columna de texto -->
      <div>
        <h2 class="text-4xl font-bold mb-6 text-white">Sobre Mí</h2>
        <p class="text-lg text-neutral-600 leading-relaxed mb-4">
          Soy un
          <span class="font-semibold text-cyan-600"
            >desarrollador FullStack</span
          >
          con pasión por construir experiencias digitales inmersivas y
          funcionales. Me enfoco en crear interfaces limpias y eficientes,
          cuidando tanto el rendimiento como la estética visual de cada
          proyecto.
        </p>
        <p class="text-lg text-neutral-600 leading-relaxed">
          Disfruto aprender nuevas tecnologías, experimentar con animaciones web
          y fusionar la lógica del código con el arte del diseño. Mi objetivo es
          seguir creciendo profesionalmente mientras impacto positivamente a
          través de la innovación.
        </p>

        <!-- Botón o enlace -->
        <div class="mt-8">
          <a
            href="#contact"
            class="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg shadow-md transition-all"
          >
            Contáctame
          </a>
        </div>
      </div>

      <!-- Columna de imagen -->
      <div class="flex justify-center">
        <img
          src="https://thumbs.dreamstime.com/b/detailed-technical-drawing-humanoid-robot-head-pencil-drawing-showing-inner-workings-futuristic-robot-head-ai-338913526.jpg"
          alt="Foto de Jair Pariona"
          class="rounded-2xl shadow-lg max-w-sm w-full object-cover mask-reveal"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// No necesitas lógica por ahora
</script>

<style scoped>
section {
  scroll-snap-align: start;
}

.mask-reveal {
  animation: reveal 2.5s ease forwards;
  mask-image: linear-gradient(to right, transparent 0%, black 50%, black 100%);
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 50%,
    black 100%
  );
  mask-size: 200%;
  -webkit-mask-size: 200%;
}

@keyframes reveal {
  from {
    mask-position: 100%;
    -webkit-mask-position: 100%;
  }
  to {
    mask-position: 0%;
    -webkit-mask-position: 0%;
  }
}
</style>
