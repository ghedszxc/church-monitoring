<template>
  <footer class="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div class="w-[95vw] lg:w-[85vw] xl:w-[60vw] place-self-center px-2 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <!-- Church Info -->
        <div>
          <h3 class="font-[500] uppercase mb-2">Vision Church Bocaue</h3>
          <p class="font-[100] text-[0.75rem] text-gray-600 dark:text-gray-400">
            A community of disciples growing together in faith, love, and service.
          </p>
        </div>

        <!-- Contact -->
        <div class="mt-3 md:mt-0 md:text-end">
          <h3 class="font-[500] uppercase mb-2">Connect With Us</h3>
          <p class="font-[100] text-[0.75rem] text-gray-600 dark:text-gray-400">
            <i class="pi pi-map-marker text-red-500 mr-1" />
            2nd Fl. Tordel Bldg., Bunlo Bocaue, Bulacan, Philippines
          </p>
        </div>
      </div>

      <div class="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-center text-sm font-[300] text-gray-500 dark:text-gray-400">
        &copy; {{ currentYear }} Vision Church Bocaue. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
