<template>
    <v-snackbar
        v-model="useGlobal().snackbar.isActive"
        :timeout="useGlobal().snackbar.timeout"
        :color="useGlobal().snackbar.color">
        {{ useGlobal().snackbar.msg }}
    </v-snackbar>
    <!-- <div>
        
    {{ useGlobal().snackbar }}
    </div> -->
</template>
<script setup>
import useGlobal from '@/composables/useGlobal';
</script>