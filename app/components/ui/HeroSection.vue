<template>
  <section
    class="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden"
  >
    <!-- Canvas 3D -->
    <canvas ref="bgCanvas" class="absolute inset-0 w-full h-full"></canvas>

    <!-- Texto principal -->
    <div
      class="relative z-10 rounded-xl p-8 backdrop-blur-md bg-white/5 border border-white/10 shadow-lg"
    >
      <h1 class="text-5xl font-bold">Hello Friend 👋</h1>
      <p class="text-xl mt-4 text-gray-400">I'm a FullStack Dev</p>
    </div>

    <!-- Gradiente superior -->
    <div
      class="absolute inset-0 bg-gradient-radial from-cyan-400/10 via-transparent to-transparent pointer-events-none"
    />
  </section>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import * as THREE from "three";

const props = defineProps({
  scrollY: {
    type: Number,
    default: 0,
  },
});

const bgCanvas = ref(null);

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({
    canvas: bgCanvas.value,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.z = 8;

  const light = new THREE.AmbientLight(0x00ffff, 0.8);
  scene.add(light);

  const particles = [];
  const geometry = new THREE.SphereGeometry(0.1, 16, 16);
  const material = new THREE.MeshStandardMaterial({ color: 0x00ffff });

  for (let i = 0; i < 50; i++) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    );
    scene.add(mesh);
    particles.push(mesh);
  }

  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x00bfff,
    transparent: true,
    opacity: 0.25,
  });
  const lineGeometry = new THREE.BufferGeometry();
  const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
  scene.add(lineMesh);

  function updateLines() {
    const positions = [];
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dist = particles[i].position.distanceTo(particles[j].position);
        if (dist < 3) {
          positions.push(
            particles[i].position.x,
            particles[i].position.y,
            particles[i].position.z,
            particles[j].position.x,
            particles[j].position.y,
            particles[j].position.z
          );
        }
      }
    }
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
  }

  const mouse = { x: 0, y: 0 };
  window.addEventListener("mousemove", (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  });

  function animate() {
    requestAnimationFrame(animate);

    particles.forEach((p) => {
      p.position.x += Math.sin(Date.now() * 0.0001 + p.position.y) * 0.002;
      p.position.y += Math.cos(Date.now() * 0.0001 + p.position.x) * 0.002;
    });

    // Parallax suave según scroll
    camera.position.z = 8 + props.scrollY * 0.002;

    camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
    camera.position.y += (mouse.y * 2 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    updateLines();
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(to right, #00bcd4, #67f6ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
