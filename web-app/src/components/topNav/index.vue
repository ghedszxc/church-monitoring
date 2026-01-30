<template>
  <nav class="h-[4rem] lg:h-[5rem] flex border-b border-gray-100">
    <div class="flex-1 place-content-end">
      <img
        src="/src/assets/images/logo.jpg"
        alt="logo"
        class="place-self-start lg:place-self-end h-full w-auto"
      />
    </div>
    <div class="flex-2 place-content-center text-end lg:text-center">
      <div class="hidden lg:inline">
        <template v-for="(item, key) in menus" :key="key">
          <a
            :href="item?.url"
            :target="isExternal ? '_blank' : '_self'"
            :class="`mr-6 px-2 py-3 font-[300] ${$route.path == item.url && 'border-b-3 border-red-500 pb-1 font-[500]'}`"
          >
            {{ item?.text }}
          </a>
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
import { ref } from 'vue'

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
])
</script>
