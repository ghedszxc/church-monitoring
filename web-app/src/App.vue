<template>
  <!-- <header style="border: 1px solid red"> -->
  <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->

  <TopNav />

  <!-- {{ theme }} -->
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TopNav from '@/components/topNav/index.vue'
export default {
  components: { TopNav },
  computed: {
    theme() {
      return this.$store.state.theme
    },
  },
}
</script>

<style>
h1,
h2,
h3,
span,
p {
  font-family: var(--font-tt-norms-pro);
}
/* h1 {
  color: var(--p-white-0);
  text-align: center;
  text-transform: uppercase;
  font-size: var(--p-typography-h1);

  font-size: var(--p-typography-h1);
  padding: 1rem 0;
}

h2 {
  font-size: var(--p-typography-h2);
}

span {
  font-weight: 100;
  font-size: var(--p-typography-span);
} */
</style>
