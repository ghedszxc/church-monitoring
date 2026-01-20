<template>
  <div class="rounded-lg shadow-lg grid place-items-center py-3">
    <span>{{ data?.count }}</span>

    <!-- <NumberAnimation
      ref="number1"
      :from="100"
      :to="10000"
      :format="theFormat"
      :duration="5"
      autoplay
      easing="linear"
    /> -->
    <i :class="`pi ${data?.icon} text-red-500 text-[4rem] my-2`"></i>
    <h3>
      {{ data?.text }}
    </h3>
  </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>
