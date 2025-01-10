<template>
    <v-row class="pa-8">
        <v-col cols="12" md="4">
            <v-card class="rounded-lg">
                <v-toolbar class="px-5 text-h6 font-weight-bold">
                    General Information
                </v-toolbar>
                <v-card-text>
                    <div class="text-center my-4">
                        <v-avatar size="150">
                            <v-img
                                alt="Display Img"
                                src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                            ></v-img>
                            <!-- https://cdn.vuetifyjs.com/images/profiles/marcus.jpg -->
                        </v-avatar>
                        
                        <!-- <v-icon
                            v-if="!selectedDisciple?.displayPhoto"
                            size="150"
                            class="border rounded-xl">
                            mdi-account-outline
                        </v-icon> -->
                    </div>

                    <v-list density="compact" class="mt-4">
                        <v-list-item class="pl-0">
                            <span class="font-weight-bold">Name</span>
                            <template v-slot:append>
                                {{
                                `${selectedDisciple?.surname}, ${selectedDisciple?.givenName} ${selectedDisciple?.middleName}`
                                }}
                            </template>
                        </v-list-item>
                        <v-divider></v-divider>
                        
                        <v-list-item class="pl-0">
                            <span class="font-weight-bold">Status</span>
                            <template v-slot:append>
                                {{ selectedDisciple?.status }}
                            </template>
                        </v-list-item>
                        <v-divider></v-divider>
                        
                        <v-list-item class="pl-0">
                            <span class="font-weight-bold">Network</span>
                            <template v-slot:append>
                                {{ selectedDisciple?.network }}
                            </template>
                        </v-list-item>
                        <v-divider></v-divider>
                        
                        <v-list-item class="pl-0">
                            <span class="font-weight-bold">Status</span>
                            <template v-slot:append>
                                {{ useGlobal().getAge(selectedDisciple?.birthdate) || '--' }}
                            </template>
                        </v-list-item>
                        <v-divider></v-divider>
                        
                        <v-list-item class="pl-0">
                            <span class="font-weight-bold">Birthdate</span>
                            <template v-slot:append>
                                {{ useGlobal().formatDate(selectedDisciple?.birthdate) || '--' }}
                            </template>
                        </v-list-item>
                        <v-divider></v-divider>
                        
                        <v-list-item class="pl-0">
                            <span class="font-weight-bold">Contact No.</span>
                            <template v-slot:append>
                                {{ selectedDisciple?.contactNo || '--' }}
                            </template>
                        </v-list-item>
                        <v-divider></v-divider>
                        
                        <v-list-item class="pl-0">
                            <span class="font-weight-bold">Address</span>
                            <template v-slot:append>
                                {{ selectedDisciple?.address || '--' }}
                            </template>
                        </v-list-item>
                        <v-divider></v-divider>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" md="8">
            <v-card class="rounded-lg">
                <v-toolbar class="px-6 text-h6 font-weight-bold">
                    SUYNL
                </v-toolbar>
                
                <v-card-text>
                    <!-- {{ selectedDisciple }} -->
                    
                    <v-data-iterator :items="suynlLog" :items-per-page="10">
                        <template v-slot:header>
                            <v-list density="compact" v-if="$vuetify.display.mdAndUp">
                                <v-list-item>
                                    <v-list-item-title>
                                        <v-row no-gutters>
                                            <v-col cols="12" md="2">
                                                <v-row
                                                no-gutters
                                                class="fill-height"
                                                align-content="center"
                                                >
                                                <span
                                                    class="d-inline-block text-truncate text-capitalize text-body-2 font-weight-bold"
                                                >
                                                    Status
                                                </span>
                                                </v-row>
                                            </v-col>

                                            <v-col cols="12" md="4">
                                                <v-row
                                                no-gutters
                                                class="fill-height"
                                                align-content="center"
                                                >
                                                <span
                                                    class="d-inline-block text-truncate text-capitalize text-body-2 font-weight-bold"
                                                >
                                                    Topic
                                                </span>
                                                </v-row>
                                            </v-col>

                                            <v-col cols="12" md="2">
                                                <v-row
                                                no-gutters
                                                class="fill-height"
                                                align-content="center"
                                                >
                                                <span
                                                    class="d-inline-block text-truncate text-capitalize text-body-2 font-weight-bold"
                                                >
                                                    Date
                                                </span>
                                                </v-row>
                                            </v-col>
                                            
                                            <v-col cols="12" md="4">
                                                <v-row
                                                no-gutters
                                                class="fill-height"
                                                align-content="center"
                                                >
                                                <span
                                                    class="d-inline-block text-truncate text-capitalize text-body-2 font-weight-bold"
                                                >
                                                    Remarks
                                                </span>
                                                </v-row>
                                            </v-col>
                                        </v-row>
                                    </v-list-item-title>
                                    <template v-slot:append>
                                        <v-icon
                                            v-bind="props"
                                            density="compact"
                                            color="transparent">
                                            mdi-dots-vertical
                                        </v-icon>
                                    </template>
                                </v-list-item>
                                <v-divider />
                            </v-list>
                        </template>
                        <template #default="{ items }">
                            <v-list density="compact">
                                <template v-for="(item, key) in items" :key="key">
                                    <v-list-item :class="$vuetify.display.mobile && key ? 'py-4' : 'pb-4'">
                                        <v-list-item-title>
                                            <v-row no-gutters align="center">
                                                <v-col cols="12" md="2">
                                                    <v-row no-gutters align="center">
                                                        <span
                                                            class="text-body-2"
                                                            style="word-break: break-word; white-space: normal"
                                                        >
                                                            {{ item.raw?.status }}
                                                        </span>
                                                    </v-row>
                                                </v-col>

                                                <v-col cols="12" md="4">
                                                    <v-row no-gutters align="center">
                                                        <span
                                                            class="text-body-2"
                                                            style="word-break: break-word; white-space: normal"
                                                        >
                                                        {{ item.raw?.topic }}
                                                        </span>
                                                    </v-row>
                                                </v-col>
                                                
                                                <v-col cols="12" md="2">
                                                    <v-row no-gutters align="center">
                                                        <span
                                                            class="text-body-2"
                                                            style="word-break: break-word; white-space: normal"
                                                        >
                                                        {{ item.raw?.date ? useGlobal().formatDate(item.raw.date) : '--' }}
                                                        </span>
                                                    </v-row>
                                                </v-col>
                                                
                                                <v-col cols="12" md="4" class="text-capitalize">
                                                    <v-row no-gutters align="center">
                                                        <span
                                                            class="text-body-2"
                                                            style="word-break: break-word; white-space: normal"
                                                        >
                                                        {{ item.raw?.remarks || '--' }}
                                                        </span>
                                                    </v-row>
                                                </v-col>

                                            </v-row>
                                        </v-list-item-title>
                                        <!-- <template v-slot:append>
                                            <v-menu location="start">
                                                <template v-slot:activator="{ props }">
                                                    <v-icon
                                                        v-bind="props"
                                                        density="compact">
                                                        mdi-dots-vertical
                                                    </v-icon>
                                                </template>
                                                <v-list density="compact">
                                                    <v-list-item :to="`/suynl/${item.raw.id}`">
                                                        <template #title>
                                                            <span class="text-caption">
                                                                SUYNL
                                                            </span>
                                                        </template>
                                                    </v-list-item>
                                                </v-list>
                                            </v-menu>
                                        </template> -->
                                    </v-list-item>

                                    <v-divider v-if="itemIndex + 1 !== items.length"></v-divider>
                                </template>
                            </v-list>
                        </template>
                    </v-data-iterator>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
<script setup>
import useGlobal from '@/composables/useGlobal';
import router from '@/router';
import Api from '@/services/api'
import { ref, onMounted } from 'vue';

const selectedDisciple = ref({})

const suynlLog = ref([
    { status: '1T', topic: 'Salvation', date: '', remarks: '' },
    { status: '2T', topic: 'Repentance', date: '', remarks: '' },
    { status: '3T', topic: 'Lordship', date: '', remarks: '' },
    { status: '4T', topic: 'Forgiveness', date: '', remarks: '' },
    { status: '5T', topic: '4 Basic Life Style', date: '', remarks: '' },
    { status: '6T', topic: 'Devotional Life', date: '', remarks: '' },
    { status: '7T', topic: 'Active Prayer Life', date: '', remarks: '' },
    { status: '8T', topic: 'Sharing Your Testimony', date: '', remarks: '' },
    { status: '9T', topic: 'Life of Obedience', date: '', remarks: '' },
    { status: '10T', topic: 'Church Life', date: '', remarks: '' },
])

onMounted(async () => {
    const _id = router.currentRoute.value.params.id
    if (_id) {
        Api.getDisciple(_id).then(res => {
            selectedDisciple.value = res.data
        })
    }
})
</script>