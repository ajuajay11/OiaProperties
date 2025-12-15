<template>
  <div class="scroll-wrapper">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import Lenis from 'lenis';

let lenis = null;

onMounted(() => {
  lenis = new Lenis({
    autoRaf: true,
  });
  
  // Make it globally accessible if needed
  window.lenis = lenis;
});

onUnmounted(() => {
  lenis?.destroy();
});
</script>