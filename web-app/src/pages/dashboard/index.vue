<template>
  <div class="my-8 w-[95vw] lg:w-[85vw] xl:w-[60vw] place-self-center px-2">
    <div class="md:flex md:place-content-between">
      <h2 class="text-[1.7rem] uppercase">Registered Disciples</h2>
      <Add />
    </div>
    <div class="rounded-lg shadow-lg p-4 mt-6">
      <table>
        <tr class="text-left border-b border-gray-200 custom-hide">
          <th>Name</th>
          <th>Network</th>
          <th></th>
        </tr>
        <tr
          v-for="(data, key) in disciples"
          :key="key"
          :class="`text-[0.875rem] border-b border-gray-100 ${key % 2 === 0 && 'bg-slate-50'}`"
        >
          <td class="custom-hide">{{ `${data?.surname}, ${data?.givenName}` }}</td>
          <td class="custom-hide">{{ fullNetworkString(data?.network) }}</td>
          <td class="text-right custom-hide">
            <button>
              <i class="pi pi-ellipsis-v rounded-full p-2 hover:bg-gray-200" />
            </button>
          </td>

          <td class="flex relative custom-mobile-only">
            <div class="grid">
              <strong>{{ `${data?.surname}, ${data?.givenName}` }}</strong>
              <span class="font-[100] text-[0.775rem]">{{ fullNetworkString(data?.network) }}</span>
            </div>
            <button class="absolute right-1">
              <i class="pi pi-ellipsis-v rounded-full p-2 hover:bg-gray-200" />
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>
import Add from './actions/add.vue'
import { ref, onBeforeMount, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const disciples = ref([
  {
    givenName: 'Gerard',
    surname: 'Mendiola',
    network: 'M',
  },
  { givenName: 'Hana', surname: 'Mendiola', network: 'YW' },
  { givenName: 'Darwin', surname: 'Bading', network: 'YM' },
])

const fullNetworkString = computed(() => {
  const networks = {
    M: 'Mens',
    W: 'Womens',
    YM: 'Youth Mens',
    YW: 'Youth Womens',
  }

  return (data) => {
    return networks[data]
  }
})

onBeforeMount(() => {
  const validateAuth = localStorage.getItem('isAuthenticated')
  router.push(`${validateAuth == 'true' ? '/dashboard' : '/login'}`)
})
</script>

<style scoped>
table {
  width: 100%;
}

th,
td {
  padding: 7px !important;
}

.custom-hide {
  @media screen and (max-width: 425px) {
    display: none;
  }
}

.custom-mobile-only {
  display: none;

  @media screen and (max-width: 425px) {
    display: flex;
  }
}
/* input {
  width: 100%;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
} */
</style>
