<template>
  <div class="mt-12 w-[95vw] lg:w-[85vw] xl:w-[60vw] place-self-center px-2">
    <div class="my-6 lg:my-12">
      <img src="@/assets/images/fd-26.jpg" class="h-full w-full" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12">
      <Birthday />

      <div>
        <h2 class="text-[1.7rem] uppercase text-[#ffffff] hidden md:inline">.</h2>
        <div class="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
          <template v-for="(data, key) in items" :key="key">
            <CardCount :data="data" :index="key">
              <template #actualCount>{{ data?.count }}</template>
              <template #icon
                ><i :class="`pi ${data?.icon} text-red-500 text-[2rem] mr-3`"
              /></template>
              <template #subtitle>{{ data?.text }}</template>
            </CardCount>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CardCount from '@/components/cardCount/index.vue'
import Birthday from '@/components/birthday/index.vue'

const items = ref([
  { text: 'Disciples', icon: 'pi-users', count: 75 },
  { text: 'Leaders', icon: 'pi-user', count: 35 },
])
</script>
