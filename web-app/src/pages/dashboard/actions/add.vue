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
      <div class="relative h-full">
        <div class="flex place-content-between m-3 md:m-4">
          <h3 class="text-[1.3rem]">Add New Disciple</h3>
          <button class="" @click="onUpdateDialog()">
            <i class="pi pi-times" />
          </button>
        </div>

        <form @submit.prevent="onAddDisciple()" class="px-3 md:px-4 mt-4 md:mt-6">
          <input
            type="text"
            v-model="form.givenName"
            placeholder="Input first name"
            required
            class="mb-3"
          />
          <input
            type="text"
            v-model="form.surname"
            placeholder="Input surname"
            required
            class="mb-3"
          />
          <div class="flex grid-cols-1 md:grid-cols-2 gap-3">
            <select v-model="form.network" required>
              <option value="" disabled>Select network</option>
              <option value="YM">Youth Men</option>
              <option value="YW">Youth Women</option>
              <option value="M">Youth Men</option>
              <option value="W">Women</option>
            </select>
            <input type="date" v-model="form.birthdate" placeholder="Input birthdate" required />
          </div>

          <button
            class="bg-sky-500 hover:bg-sky-400 mt-3 py-2 px-4 rounded-sm text-white font-[500] w-full"
          >
            Submit
          </button>
        </form>
      </div>
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
  network: '',
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

  height: 300px;
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
