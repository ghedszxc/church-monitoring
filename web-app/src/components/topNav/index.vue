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
          <button v-else @click="onUpdateDropdown()" class="relative">
            <i
              :class="`${isAuthenticated == 'false' || isAuthenticated == null ? item.icon : 'pi pi-angle-down'} p-2 border hover:border-gray-400 hover:bg-gray-0 rounded-full cursor-pointer bg-gray-100 border-gray-200`"
            />

            <div id="dropdown_menu" class="custom-dropdown-menu">
              <ul class="bg-white border border-gray-300 w-30 text-left mt-1">
                <template v-for="(subItem, key_1) in item?.subLinks" :key="key_1">
                  <li
                    :class="`py-2 px-3 hover:cursor-pointer hover:bg-gray-100 ${key_1 < item?.subLinks?.length - 1 && 'border-b border-gray-300'}`"
                    @click="onRedirect(subItem)"
                  >
                    <i v-if="subItem?.icon" :class="`${subItem?.icon} text-[0.75rem] mr-1`" />
                    {{ subItem?.text }}
                  </li>
                </template>
              </ul>
            </div>
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

  <!-- NAV DRAWER -->
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
            v-if="displayLogin(item?.text)"
            :href="item?.url"
            :target="item.isExternal ? '_blank' : '_self'"
            :class="`font-[300] text-white ${$route.path == item.url && 'border-l-3 border-white pl-2 pb-1 font-[500]'}`"
          >
            <i v-if="!item?.text" :class="`${item.icon} text-[0.75rem] mr-1 mt-3`" />
            {{ `${item?.text ? item?.text : 'Login'}` }}
          </a>

          <template
            v-if="item?.subLinks?.length"
            v-for="(subItem, key_1) in item?.subLinks"
            :key="key_1"
          >
            <a
              v-if="subItem.action != 'logout'"
              :href="subItem.url"
              :class="`grid font-[100] text-white py-1 my-1 ${$route.path == subItem.url && 'border-l-3 border-white pl-2 pb-1'}`"
            >
              <span>
                <i v-if="subItem?.icon" :class="`${subItem?.icon} text-[0.75rem] mr-1`" />
                {{ subItem?.text }}
              </span>
            </a>

            <button v-else @click="onRedirect(subItem)" class="font-[100] text-white">
              <span>
                <i v-if="subItem?.icon" :class="`${subItem?.icon} text-[0.75rem] mr-1`" />
                {{ subItem?.text }}
              </span>
            </button>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()

const router = useRouter()
const route = useRoute()

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
const displayNavDrawer = ref(false)

watch(
  () => route.path,
  async (newValue, oldValue) => {
    if (newValue == '/dashboard' && oldValue == '/login') {
      validateAuthentication()
      menus.value.map((data) => {
        displayLogin(data.text)
      })
    }
  },
  { immediate: true },
)

onBeforeMount(() => {
  validateAuthentication()
})

function displayLogin(text) {
  if (
    localStorage?.getItem('isAuthenticated') == null ||
    localStorage?.getItem('isAuthenticated') == 'false'
  ) {
    return true
  } else {
    return text ? true : false
  }
}

function updateNavDrawer() {
  displayNavDrawer.value = !displayNavDrawer.value

  const customNavDrawer = document.getElementsByClassName('custom-nav-drawer')[0]

  customNavDrawer.style.visibility = 'visible'
  customNavDrawer.style.transform = `translateX(${displayNavDrawer.value ? 0 : '300px'})`
}

function onUpdateDropdown() {
  const dropdownMenu = document.getElementById('dropdown_menu')
  dropdownMenu.style.visibility =
    !dropdownMenu.style.visibility || dropdownMenu.style.visibility == 'hidden'
      ? 'visible'
      : 'hidden'
}

function onRedirect(data) {
  if (data.action == 'redirect') {
    router.push(data.url)
  } else if (data.action == 'logout') {
    localStorage.setItem('isAuthenticated', false)
    router.push('/login')

    menus.value[4] = {
      text: '',
      icon: 'pi pi-user',
      url: '/login',
      isExternal: false,
    }

    alert('Logged out!')
  }
}

async function validateAuthentication() {
  const validateAuth = localStorage.getItem('isAuthenticated')

  if (validateAuth == 'true') {
    menus.value[4].subLinks = [
      {
        text: 'Dashboard',
        action: 'redirect',
        url: '/dashboard',
        icon: '',
      },
      {
        text: 'Log Out',
        action: 'logout',
        url: '',
        icon: 'pi pi-sign-out',
      },
    ]
  }
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

  div {
    margin-left: 20px;
  }
}

.custom-dropdown-menu {
  visibility: hidden;
  position: fixed;
}
</style>
