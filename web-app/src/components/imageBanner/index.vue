<template>
  <div class="relative">
    <div class="h-full w-full bg-slate-950 opacity-10 absolute"></div>
    <img :src="url" :alt="alt || ''" class="h-full w-full" />
  </div>
</template>

<script>
export default {
  props: ['url', 'alt'],
}
</script>
