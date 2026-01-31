<template>
  <TopNav />
  <RouterView />
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import TopNav from '@/components/topNav/index.vue'

const route = useRoute()

onMounted(() => {
  // To check if user is authenticated at first load of page
  if (localStorage.getItem('isAuthenticated') == null)
    localStorage.setItem('isAuthenticated', false)
})

watch(
  () => route.path,
  async () => {
    const customNavDrawer = document.getElementsByClassName('custom-nav-drawer')[0]

    if (customNavDrawer?.style) {
      customNavDrawer.style.visibility = 'visible'
      customNavDrawer.style.transform = `translateX(300px)`
    }
  },
  // Use immediate: true to run the watcher on initial page load as well
  { immediate: true },
)
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
