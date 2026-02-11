<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
    <TopNav />
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import TopNav from '@/components/topNav/index.vue'

const route = useRoute()
const store = useStore()

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

onMounted(async () => {
  // To check if user is authenticated at first load of page
  if (localStorage.getItem('isAuthenticated') == null)
    localStorage.setItem('isAuthenticated', false)

  applyTheme(store.state.theme)
})

watch(
  () => store.state.theme,
  (newTheme) => applyTheme(newTheme),
)

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
