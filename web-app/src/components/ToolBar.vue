<template>
    <div>
        <v-app-bar
            prominent
        >
            <v-app-bar-nav-icon
                variant="text"
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>

            <!-- <v-toolbar-title>{{ drawer }}</v-toolbar-title> -->

            <v-spacer></v-spacer>

            <!-- <template v-if="$vuetify.display.mdAndUp">
            <v-btn icon="mdi-magnify" variant="text"></v-btn>

            <v-btn icon="mdi-filter" variant="text"></v-btn>
            </template> -->

            <!-- <v-btn icon="mdi-dots-vertical" variant="text"></v-btn> -->
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            :permanent="$vuetify.display.mobile"
        >
            <v-list>
                <!-- <v-list-item @click="drawer = !drawer">
                    <template v-slot:append>
                        <v-btn
                            icon="mdi-chevron-left"
                            size="small"
                            variant="text"
                        />
                    </template>
                </v-list-item> -->
                <v-list-item v-for="(item, key) in routes" :key="key"
                    :title="item.title"
                    :value="item.value"
                    :to="item.value"
                />
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'

const drawer = ref(true);
const routes = ref([
    {
        title: 'Attendance',
        value: '/attendance',
    },
    {
        title: 'Disciples',
        value: '/disciples',
    },
    // {
    //     title: 'Events',
    //     value: '/events',
    // },
])

// onMounted(() => {
// })

// watch(
//   () => props.templateList,
//   (newVal) => {
//     localTemplateList.value = newVal;
//   },
// );
</script>