<template>
  <nav class="h-[4rem] lg:h-[5rem] flex">
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
            :class="`mr-6 px-2 py-3 ${$route.path == item.url && 'border-b-3 border-red-500 pb-1 font-bold'}`"
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

<script>
export default {
  data: () => ({
    menus: [
      {
        text: 'Home',
        url: '/',
      },
      {
        text: 'Social Media',
        url: '/social-media',
      },
      {
        text: 'About Us',
        url: '/about-us',
      },
      {
        text: 'Contact Us',
        url: '/contact-us',
      },
    ],
  }),
}
</script>
