<template>
  <nav class="h-[4rem] lg:h-[5rem] flex border-b border-gray-100">
    <div class="flex-1 place-content-end">
      <img
        src="/src/assets/images/logo.jpg"
        alt="logo"
        class="place-self-start lg:place-self-end h-full w-auto cursor-pointer"
        @click="router.push('/')"
      />
    </div>
    <div class="flex-2 place-content-center text-end lg:text-center">
      <div class="hidden lg:inline">
        <template v-for="(item, key) in menus" :key="key">
          <a
            v-if="item?.text"
            :href="item?.url"
            :target="item.isExternal ? '_blank' : '_self'"
            :class="`mr-6 px-2 py-3 font-[300] ${$route.path == item.url && 'border-b-3 border-red-500 pb-1 font-[500]'}`"
          >
            {{ item?.text }}
          </a>
          <button v-else @click="onTrigger(item?.url)">
            <i
              :class="`${isAuthenticated == 'false' || isAuthenticated == null ? item.icon : 'pi pi-sign-out'} p-2 border hover:border-gray-400 hover:bg-gray-0 rounded-full cursor-pointer bg-gray-100 border-gray-200`"
            />
          </button>
        </template>
      </div>
      <div class="inline lg:hidden mr-4">
        <button>
          <i class="pi pi-bars rounded-full p-3 hover:bg-slate-100 hover:cursor-pointer"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const menus = ref([
  {
    text: 'Home',
    url: '/',
    isExternal: false,
  },
  {
    text: 'Social Media',
    url: 'https://www.facebook.com/visionchurchbocaue',
    isExternal: true,
  },
  {
    text: 'About Us',
    url: '/about-us',
    isExternal: false,
  },
  {
    text: 'Contact Us',
    url: '/contact-us',
    isExternal: false,
  },
  {
    text: '',
    icon: 'pi pi-user',
    url: '/login',
    isExternal: false,
  },
])

const isAuthenticated = ref(localStorage?.getItem('isAuthenticated'))

function onTrigger(url) {
  // if (isAuthenticated.value == 'false' || isAuthenticated.value == null) {
  router.push(url)
  // } else {
  //   router.push('/')
  //   localStorage.setItem('isAuthenticated', false)
  // }
}
</script>
