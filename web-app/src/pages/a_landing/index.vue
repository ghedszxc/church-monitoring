<template>
  <div class="my-8 w-[95vw] lg:w-[85vw] xl:w-[60vw] place-self-center px-2">
    <div class="mb-6">
      <img src="@/assets/images/fd-26.jpg" class="w-full rounded-lg h-auto min-h-[200px] object-cover object-center" />
    </div>

    <!-- Hero / Welcome Section -->
    <div class="mb-8 text-center mb-6 md:mb-10">
      <h1 class="text-[2rem] lg:text-[2.5rem] font-bold uppercase">
        Welcome to Vision Church Bocaue
      </h1>
      <p class="mt-2 font-[300] text-gray-600 dark:text-gray-400 text-lg">
        A community of disciples growing together in faith, love, and service.
      </p>
      <a
        href="https://www.facebook.com/visionchurchbocaue"
        target="_blank"
        class="inline-block mt-4 bg-red-500 hover:bg-red-600 text-white font-[500] py-2 px-6 rounded-full transition-colors"
      >
        <i class="pi pi-map-marker mr-1" />
        Visit Us This Sunday
      </a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12 mb-6 md:mb-10">
      <Birthday />

      <div>
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

    <!-- Weekly Schedule & Featured Verse -->
    <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12 mb-6 md:mb-10"> -->
      <!-- Weekly Schedule -->
      <!-- <div>
        <h2 class="text-[1.7rem] uppercase mb-2">Weekly Schedule</h2>
        <ul class="space-y-2">
          <li
            v-for="(event, key) in schedule"
            :key="key"
            class="flex items-start gap-3 p-3 rounded-sm bg-slate-50 dark:bg-gray-800 border-l-4 border-red-500"
          >
            <i :class="`pi ${event.icon} text-red-500 mt-1`" />
            <div>
              <strong>{{ event.day }}</strong>
              <span class="text-gray-500 dark:text-gray-400 ml-1 text-sm">{{ event.time }}</span>
              <p class="font-[300] text-sm text-gray-600 dark:text-gray-400">{{ event.label }}</p>
            </div>
          </li>
        </ul>
      </div> -->

      <!-- Featured Verse -->
      <!-- <div>
        <h2 class="text-[1.7rem] uppercase mb-2">Verse of the Week</h2>
        <div class="p-5 rounded-sm bg-slate-50 dark:bg-gray-800 border-l-4 border-red-500">
          <p class="italic font-[300] text-lg leading-relaxed">
            "{{ verse.text }}"
          </p>
          <p class="mt-3 font-[500] text-red-500 text-right">— {{ verse.reference }}</p>
        </div>
      </div> -->
    <!-- </div> -->
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

const schedule = ref([
  { day: 'Sunday', time: '4:00 PM', label: 'Sunday Worship Service', icon: 'pi-heart' },
  // { day: 'Wednesday', time: '7:00 PM', label: 'Midweek Prayer Meeting', icon: 'pi-star' },
  // { day: 'Saturday', time: '3:00 PM', label: 'Youth Service', icon: 'pi-users' },
])

const verse = ref({
  text: 'Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.',
  reference: 'Matthew 28:19',
})
</script>
