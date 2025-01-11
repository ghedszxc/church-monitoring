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
                                                
                                                <v-col cols="12" md="2"
                                                    v-if="toBeUpdate.status != item.raw.status">
                                                    <v-row no-gutters align="center">
                                                        <span
                                                            class="text-body-2"
                                                            style="word-break: break-word; white-space: normal"
                                                        >
                                                        {{ item.raw?.date ? useGlobal().formatDate(item.raw.date) : '--' }}
                                                        </span>

                                                        <!-- <v-date-input
                                                            v-else
                                                            v-model="toBeUpdate.date"
                                                            hide-details
                                                            density="compact"
                                                            variant="outlined"
                                                            show-adjacent-months>
                                                            <template v-slot:default></template>
                                                        </v-date-input> -->
                                                        <!-- <input
                                                            v-else
                                                            type="date"
                                                            @input="onSelectDate" /> -->
                                                    </v-row>
                                                </v-col>
                                                
                                                <v-col cols="12" md="4" class="text-capitalize"
                                                    v-if="toBeUpdate.status != item.raw.status">
                                                    <v-row no-gutters align="center">
                                                        <span
                                                            class="text-body-2"
                                                            style="word-break: break-word; white-space: normal"
                                                            v-if="toBeUpdate.status != item.raw.status"
                                                        >
                                                        {{ item.raw?.remarks || '--' }}
                                                        </span>
                                                    </v-row>
                                                </v-col>

                                                <v-col cols="6" :class="{ 'mt-1': $vuetify.display.mobile }" v-else>
                                                    <v-row no-gutters>
                                                        <v-col cols="12" md="4" :class="{ 'mb-1': $vuetify.display.mobile }">
                                                            <input
                                                                type="date"
                                                                class="redesign-picker"
                                                                :style="{ 'width': $vuetify.display.mobile ? '50vw': '90%' }"
                                                                v-model="toBeUpdate.date" />
                                                        </v-col>
                                                        <v-col cols="12" md="8">
                                                            <input
                                                                type="text"
                                                                v-model="toBeUpdate.remarks"
                                                                class="redesign-input"
                                                                :style="{ 'width': $vuetify.display.mobile ? '50vw': '90%' }"
                                                                placeholder="Remarks" />
                                                        </v-col>
                                                    </v-row>
                                                </v-col>

                                            </v-row>
                                        </v-list-item-title>
                                        <template v-slot:append>
                                            <v-btn icon size="x-small"
                                                v-if="toBeUpdate.status != item.raw.status"
                                                @click="onselectTopic(item.raw)">
                                                <v-icon color="warning" size="22">mdi-pencil</v-icon>
                                            </v-btn>

                                            <v-btn icon size="x-small"
                                                v-if="toBeUpdate.status == item.raw.status"
                                                @click="onUpdateSuynl()">
                                                <v-icon color="success" size="22">mdi-check</v-icon>
                                            </v-btn>
                                            
                                            <v-btn icon size="x-small"
                                                v-if="toBeUpdate.status == item.raw.status"
                                                @click="onDiscard()">
                                                <v-icon color="error" size="22">mdi-close</v-icon>
                                            </v-btn>
                                        </template>
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
    { status: '5T', topic: 'Life Style - The 4 Greatest Meetings', date: '', remarks: '' },
    { status: '6T', topic: 'Devotional Life', date: '', remarks: '' },
    { status: '7T', topic: 'Your Active Life of Prayer', date: '', remarks: '' },
    { status: '8T', topic: 'Witnessing - Sharing Your New Life with Others', date: '', remarks: '' },
    { status: '9T', topic: 'Life of Obedience', date: '', remarks: '' },
    { status: '10T', topic: 'Life in the Church', date: '', remarks: '' },
])

const toBeUpdate = ref({
    status: "",
    date: "",
    remarks: ""
})

onMounted(async () => {
    const _id = router.currentRoute.value.params.id
    if (_id) {
        Api.getDisciple(_id).then(res => {
            selectedDisciple.value = res.data
        })
    }
})

async function onselectTopic(data) {
    toBeUpdate.value = data
}

async function onUpdateSuynl() {
    const payload = {
        discipleId: router.currentRoute.value.params.id,
        status: toBeUpdate.value.status,
        date: toBeUpdate.value.date,
        remarks: toBeUpdate.value.remarks
    }
    
    try {
        const result = await Api.populateSuynl(payload)
        // console.log("!!! res: ", result)

        useGlobal().displaySnackbar({
            msg: 'this is my msg',
            color: 'success',
            isActive: true
        })
    } catch (err) {
        console.log("!!! err: ", err)
    }
}

async function onDiscard() {
    toBeUpdate.value = {
        status: "",
        date: "",
        remarks: ""
    }
}
</script>

<style scoped>
.redesign-picker {
    border: 1px solid grey;
    height: 25px;
    border-radius: 3px;
    padding: 5px;
    font-size: 13px;
}

.redesign-input {
    border: 1px solid grey;
    height: 25px;
    border-radius: 3px;
    padding: 5px;
    font-size: 13px;
}
</style>