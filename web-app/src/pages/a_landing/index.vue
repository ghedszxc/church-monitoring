<template>
  <div class="mt-12 w-[95vw] lg:w-[75vw] place-self-center">
    <!-- <ImageBanner :url="'fd-26.jpg'" :alt="'faith declaration 2026'" /> -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <template v-for="(data, key) in items" :key="key">
        <CardCount :data="data" />
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
      { text: 'Registered Disciples', icon: 'pi-users', count: 75 },
      { text: 'Active Disciples', icon: 'pi-user', count: 65 },
      { text: 'Registered Leaders', icon: 'pi-android', count: 35 },
      { text: 'Active Leaders', icon: 'pi-apple', count: 25 },
    ],
  }),
}
</script>
