<template>
  <div class="rounded-lg shadow-lg grid place-items-center py-3">
    <span :id="`count_${index}`" class="text-[3rem] font-bold">{{ data?.count }}</span>

    <i :class="`pi ${data?.icon} text-red-500 text-[4rem] my-2`"></i>
    <h3>
      {{ data?.text }}
    </h3>
  </div>
</template>

<script>
export default {
  props: ['data', 'index'],
  mounted() {
    const counterElement = document.getElementById(`count_${this.index}`)
    const targetNumber = this.data.count

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
  },
}
</script>
