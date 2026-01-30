<template>
  <div>
    <h2 class="text-3xl uppercase">Birthday Celebrants</h2>
    <div class="mt-2">
      <template v-for="(data, key) in sortedCelebrants" :key="key">
        <div
          :class="` border-l-4 mb-2 p-2 ${key % 2 === 0 ? 'bg-slate-50 border-slate-400 ' : 'bg-sky-50 border-sky-400 '}`"
        >
          <strong> {{ dateFormat(data.date) }}</strong>

          <ul class="mt-2">
            <li
              v-for="(subData, key_1) in data?.celebrants"
              :key="key_1"
              :class="`${data?.celebrants?.length > 1 && 'list-decimal'} list-inside font-[100]`"
            >
              {{ `${subData?.givenName} ${subData?.surname}` }}
              <span class="text-[0.875rem] text-gray-500"
                >({{ `${currentAge(subData.birthdate)} yrs old` }})</span
              >
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import moment from 'moment'
import { ref, onMounted, computed } from 'vue'

const today = ref(new Date())
const weekDates = ref([])

const celebrants = ref([
  { givenName: 'Leia Therese', surname: 'Mendiola', birthdate: '01/31/2026' },
  { givenName: 'Hana', surname: 'Mendiola', birthdate: '01/25/2025' },
  { givenName: 'Darwin', surname: 'Bading', birthdate: '01/29/1700' },
  { givenName: 'Gerard', surname: 'Mendiola', birthdate: '01/24/2024' },
  { givenName: 'Daniel', surname: 'Ebas', birthdate: '01/27/2023' },
  { givenName: 'Joshua', surname: 'High Maintenance', birthdate: '01/28/2022' },
  { givenName: 'Luke Theodore', surname: 'Mendiola', birthdate: '01/26/2021' },
])

onMounted(async () => {
  getDatesForCurrentWeek()
})

const sortedCelebrants = computed(() => {
  weekDates.value.map((data) => {
    data.celebrants = celebrants.value.filter((filter) => {
      return new Date(filter.birthdate).toLocaleDateString().slice(0, 4) == data.date.slice(0, 4)
    })
  })

  return weekDates.value.filter((filter) => {
    return filter.celebrants.length
  })
})

const dateFormat = computed(() => {
  return (date) => {
    return moment(new Date(date)).format('MMM DD, YYYY')
  }
})

const currentAge = computed(() => {
  return (date) => {
    if (!date) return 0

    // Ensure date is parsed correctly. The 'YYYY-MM-DD' format from
    // the input type="date" is handled correctly by the Date constructor.
    const birthDate = new Date(date)

    let age = today.value.getFullYear() - birthDate.getFullYear()
    const m = today.value.getMonth() - birthDate.getMonth()

    console.log(birthDate, age)

    // If the current month is before the birth month, or it's the same month but
    // the current day is before the birth day, the birthday hasn't happened this year yet.
    if (m < 0 || (m === 0 && today.value.getDate() < birthDate.getDate())) age--

    return age
  }
})

function getDatesForCurrentWeek() {
  const currentDayOfWeek = today.value.getDay() // 0 is Sunday, 6 is Saturday
  const sundayDate = new Date(today.value) // Clone today's date

  // Set the date to the Sunday of the current week
  // Subtract the current day's index from the current date's day of the month
  sundayDate.setDate(today.value.getDate() - currentDayOfWeek)

  // Iterate from Sunday to Saturday (0 to 6 days after Sunday)
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(sundayDate) // Clone the Sunday date
    currentDate.setDate(sundayDate.getDate() + i) // Add 'i' days

    weekDates.value.push({
      date: currentDate.toLocaleDateString(),
      celebrants: [],
    })
  }
}

function getThisWeeksBirthdays() {
  const currentYear = today.value.getFullYear()

  // 1. Calculate Sunday (start of week)
  const sunday = new Date(today.value)
  sunday.setDate(today.value.getDate() - today.value.getDay())
  sunday.setHours(0, 0, 0, 0)

  // 2. Calculate Saturday (end of week)
  const saturday = new Date(today.value)
  saturday.setDate(today.value.getDate() + (6 - today.value.getDay()))
  saturday.setHours(23, 59, 59, 999)

  return celebrants.value.filter((person) => {
    // 3. Create a Date object for this year's birthday
    const bday = new Date(person.birthdate)
    const bdayThisYear = new Date(currentYear, bday.getMonth(), bday.getDate())

    // 4. Check if within Sunday-Saturday range
    return bdayThisYear >= sunday && bdayThisYear <= saturday
  })
}
</script>

<style scoped>
/* li:hover {
  background-color: red;
  cursor: pointer;
} */
</style>
