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
        <button @click="updateNavDrawer()">
          <i class="pi pi-bars rounded-full p-3 hover:bg-slate-100 hover:cursor-pointer"></i>
        </button>
      </div>
    </div>
  </nav>

  <div class="custom-nav-drawer">
    <button @click="updateNavDrawer()" class="text-white mt-2">
      <i
        class="text-2xl pi pi-angle-right rounded-full p-3 hover:bg-slate-100 hover:cursor-pointer"
      />
    </button>

    <div>
      <ul>
        <li v-for="(item, key) in menus" :key="key" :class="`${item?.text && 'py-1'}`">
          <a
            v-if="item?.text"
            :href="item?.url"
            :target="item.isExternal ? '_blank' : '_self'"
            :class="`font-[300] text-white ${$route.path == item.url && 'border-l-3 border-white pl-2 pb-1 font-[500]'}`"
          >
            {{ item?.text }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from 'vue'
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

onBeforeMount(() => {
  console.log(window.location.pathname)
  if (window.location.pathname == '/dashboard') {
    menus.value.push({
      text: 'Dashboard',
      url: '/dashboard',
      isExternal: false,
    })
  }
  // console.log(route.path)
})

const isAuthenticated = ref(localStorage?.getItem('isAuthenticated'))
const displayNavDrawer = ref(false)

function onTrigger(url) {
  // if (isAuthenticated.value == 'false' || isAuthenticated.value == null) {
  router.push(url)
  // } else {
  //   router.push('/')
  //   localStorage.setItem('isAuthenticated', false)
  // }
}

function updateNavDrawer() {
  displayNavDrawer.value = !displayNavDrawer.value

  const customNavDrawer = document.getElementsByClassName('custom-nav-drawer')[0]

  customNavDrawer.style.visibility = 'visible'
  customNavDrawer.style.transform = `translateX(${displayNavDrawer.value ? 0 : '300px'})`
}
</script>

<style scoped>
.custom-nav-drawer {
  background-color: oklch(63.7% 0.237 25.331);

  visibility: hidden;
  height: 100%;
  width: 300px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  overflow-x: hidden;
  transition: transform 0.5s ease-in-out;
  transform: translateX(300px);

  @media screen and (max-width: 425px) {
    width: 100vw;
  }

  div {
    margin-left: 20px;
  }
}
</style>
