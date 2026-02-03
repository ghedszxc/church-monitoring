<template>
  <input type="file" id="csvFile" v-on:change="onSelectCsvFile" accept=".csv" class="hidden" />
  <!-- <input type="file" id="csv_file_upload" name="csv_file" accept=".csv, text/csv" /> -->
  <button
    class="ml-3 py-2 px-4 place-items-center text-[0.875rem] border border-green-600 text-green-600 rounded-sm hover:cursor-pointer font-[500]"
    @click="importCSV()"
  >
    <i class="pi pi-file-excel" />
    Add Multiple
  </button>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

function importCSV() {
  document.getElementById('csvFile').click()
}

function onSelectCsvFile(event) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = function (e) {
      store.dispatch('ADD_MULTIPLE_DISCIPLES', csvToArray(e.target.result))
    }

    reader.readAsText(file)
  }
}

function csvToArray(csvString) {
  const lines = csvString.trim().split(/\r?\n|\r/) // Split into lines
  const headers = lines[0].split(',') // Extract headers
  const result = []

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',')
    if (values.length === headers.length) {
      const obj = {}
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j].trim()] = values[j].trim()
      }

      result.push(obj)
    }
  }
  return result
}
</script>
