<template>
  <div class="flex flex-col min-h-screen bg-white dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
    <TopNav />
    <div class="flex-1">
      <RouterView />
    </div>
    <Footer />

    <!-- Global Modal -->
    <Modal
      v-model="store.state.modal.visible"
      :title="store.state.modal.title"
      :size="store.state.modal.size"
      @close="handleModalClose"
    >
      <div class="text-center py-4">
        <i
          :class="[
            'text-5xl mb-4',
            store.state.modal.type === 'success' ? 'pi pi-check-circle text-green-500' :
            store.state.modal.type === 'error' ? 'pi pi-times-circle text-red-500' :
            store.state.modal.type === 'warning' ? 'pi pi-exclamation-triangle text-yellow-500' :
            'pi pi-info-circle text-blue-500'
          ]"
        />
        <p class="text-lg">{{ store.state.modal.message }}</p>
      </div>

      <template #footer>
        <button
          @click="handleModalClose"
          :class="[
            'px-6 py-2 rounded-lg font-[500] w-full transition-colors',
            store.state.modal.type === 'success' ? 'bg-green-500 hover:bg-green-600 text-white' :
            store.state.modal.type === 'error' ? 'bg-red-500 hover:bg-red-600 text-white' :
            store.state.modal.type === 'warning' ? 'bg-yellow-500 hover:bg-yellow-600 text-white' :
            'bg-blue-500 hover:bg-blue-600 text-white'
          ]"
        >
          OK
        </button>
      </template>
    </Modal>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import TopNav from '@/components/topNav/index.vue'
import Footer from '@/components/footer/index.vue'
import Modal from '@/components/modal/index.vue'

const route = useRoute()
const store = useStore()

function applyTheme(theme) {
  theme === 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
}

function handleModalClose() {
  store.dispatch('HIDE_MODAL')
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
