<template>
  <button
    class="py-2 px-4 place-items-center text-[0.875rem] bg-sky-500 hover:bg-sky-400 rounded-sm text-white hover:cursor-pointer font-[500]"
    @click="onUpdateDialog()"
  >
    <i class="pi pi-plus mr-1" />
    New
  </button>

  <div class="custom-dialog-shadow">
    <div class="custom-dialog">
      <button class="float-right m-3 md:m-4" @click="onUpdateDialog()">
        <i class="pi pi-times" />
      </button>

      <form @submit.prevent="onAddDisciple()"></form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

function onUpdateDialog() {
  const dialogElem = document.getElementsByClassName('custom-dialog-shadow')[0]

  dialogElem.style.visibility =
    !dialogElem.style.visibility || dialogElem.style.visibility == 'hidden' ? 'visible' : 'hidden'
}

const form = ref({
  givenName: '',
  surname: '',
  birthdate: '',
})

function onAddDisciple() {
  console.log('SUBMITTED')
}
</script>

<style scoped>
.custom-dialog-shadow {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
}

.custom-dialog {
  position: absolute;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  height: 50vh;
  width: 30vw;
  background-color: #ffffff;
  z-index: 2;

  border-radius: 5px;

  /* small desktop */
  @media screen and (max-width: 1024px) {
    width: 40vw;
  }

  /* tablet */
  @media screen and (max-width: 768px) {
    width: 50vw;
  }

  /* mobile */
  @media screen and (max-width: 425px) {
    width: 95vw;
  }
}
</style>
