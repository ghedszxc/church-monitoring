<template>
  <div class="my-8 w-[95vw] lg:w-[85vw] xl:w-[60vw] place-self-center px-2">
    <div class="rounded-lg shadow-lg p-4 w-95 place-self-end">
      <form @submit.prevent="onSubmit()">
        <input type="text" v-model="code" required placeholder="Input your code" />
        <button
          class="bg-sky-500 hover:bg-sky-400 mt-3 py-2 px-4 rounded-sm text-white hover:cursor-pointer font-[500] w-full"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const code = ref('')

onBeforeMount(() => {
  const validateAuth = localStorage.getItem('isAuthenticated')
  if (validateAuth == 'true') router.push('/dashboard') // To check if user is authenticated; if YES: redirect to dashboard
})

function onSubmit() {
  if (code.value == 'vc') {
    localStorage.setItem('isAuthenticated', true)
    alert('Code is correct!')
    router.push('/dashboard')
  } else {
    alert('Code is incorrect!')
  }
}
</script>

<style scoped>
input {
  width: 100%;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
}
</style>
