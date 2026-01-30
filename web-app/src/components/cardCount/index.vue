<template>
  <div class="rounded-lg shadow-lg py-4 custom-div">
    <span :id="`count_${index}`" class="text-[3rem] font-bold">{{ props?.data?.count }}</span>

    <div class="flex md:grid lg:flex place-items-center mt-2">
      <i :class="`pi ${props?.data?.icon} text-red-500 text-[2rem] mr-3`"></i>
      <span class="mt-0 md:mt-2 lg:mt-0">{{ props?.data?.text }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'

const props = defineProps({
  data: Object,
  index: Number,
})

onMounted(async () => {
  const counterElement = document.getElementById(`count_${props.index}`)
  const targetNumber = props?.data?.count

  let currentNumber = 0
  const intervalTime = 20 // Time in milliseconds between updates

  const interval = setInterval(() => {
    currentNumber += 1

    if (currentNumber >= targetNumber) {
      currentNumber = targetNumber
      clearInterval(interval)
    }

    counterElement.textContent = currentNumber
  }, intervalTime)
})
</script>

<style scoped>
.custom-div {
  display: grid;
  place-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 15px;
  }

  @media screen and (max-width: 425px) {
    display: grid;
  }
}
</style>
