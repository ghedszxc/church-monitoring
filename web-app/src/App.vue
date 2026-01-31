<template>
  <TopNav />
  <RouterView />
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import TopNav from '@/components/topNav/index.vue'

onMounted(() => {
  // To check if user is authenticated at first load of page
  if (localStorage.getItem('isAuthenticated') == null)
    localStorage.setItem('isAuthenticated', false)
})
</script>

<style>
h1,
h2,
h3,
span,
p {
  font-family: var(--font-tt-norms-pro);
}
</style>
