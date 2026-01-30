<template>
  <div class="mt-12 w-[95vw] lg:w-[75vw] place-self-center">
    <!-- <ImageBanner :url="'fd-26.jpg'" :alt="'faith declaration 2026'" /> -->
    <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <template v-for="(data, key) in items" :key="key">
        <CardCount :data="data" :index="key" />
      </template>
    </div>
  </div>
</template>

<script>
import ImageBanner from '@/components/imageBanner/index.vue'
import CardCount from '@/components/cardCount/index.vue'
export default {
  components: {
    ImageBanner,
    CardCount,
  },
  data: () => ({
    items: [
      { text: 'Disciples', icon: 'pi-users', count: 75 },
      { text: 'Leaders', icon: 'pi-user', count: 35 },
    ],
  }),
}
</script>
