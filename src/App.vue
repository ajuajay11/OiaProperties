<template>
   <Suspense>
    <template #default>
      <main>
       <router-view/>
      </main>
    </template>
    <template #fallback>
      <Preloader />
    </template>
  </Suspense>
  
</template>

<script>
 import Preloader from './components/Preloader.vue'
 
</script>

<style>
.section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}
</style>
