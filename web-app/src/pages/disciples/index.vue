<template>
    <v-card class="ma-8">
        <v-toolbar :class="`px-6 py-3 text-${$vuetify.display.mdAndUp ? 'h4' : 'h6'}`">
            <template v-slot:prepend>
                Disciple Master
            </template>
            <template v-slot:append>
                <add-disciple></add-disciple>
            </template>
        </v-toolbar>

        <v-card-text>
            <v-data-iterator :items="discipleList">
                <template v-slot:header>
                    <v-list density="compact" v-if="$vuetify.display.mdAndUp">
                        <v-list-item>
                            <v-list-item-title>
                                <v-row no-gutters>
                                    <v-col cols="12" md="3">
                                        <v-row
                                        no-gutters
                                        class="fill-height"
                                        align-content="center"
                                        >
                                        <span
                                            class="d-inline-block text-truncate text-capitalize text-body-2 font-weight-bold"
                                        >
                                            Name
                                        </span>
                                        </v-row>
                                    </v-col>

                                    <v-col cols="12" md="1">
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

                                    <v-col cols="12" md="1">
                                        <v-row
                                        no-gutters
                                        class="fill-height"
                                        align-content="center"
                                        >
                                        <span
                                            class="d-inline-block text-truncate text-capitalize text-body-2 font-weight-bold"
                                        >
                                            Network
                                        </span>
                                        </v-row>
                                    </v-col>
                                    
                                    <v-col cols="12" md="1">
                                        <v-row
                                        no-gutters
                                        class="fill-height"
                                        align-content="center"
                                        >
                                        <span
                                            class="d-inline-block text-truncate text-capitalize text-body-2 font-weight-bold"
                                        >
                                            Age
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
                                            Birthdate
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
                                            Contact No.
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
                                            Address
                                        </span>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider />
                    </v-list>
                </template>
                <template #default="{ items }">
                    <v-list density="compact">
                        <template v-for="(item, key) in items" :key="key">
                            <v-list-item>
                                <v-list-item-title>
                                <v-row no-gutters align="center">
                                    <v-col cols="12" md="3">
                                        <v-row no-gutters align="center">
                                            <span
                                                class="text-body-2"
                                                style="word-break: break-word; white-space: normal"
                                            >
                                                {{ `${item.raw.surname}, ${item.raw.givenName} ${item.raw.middleName}` }}
                                            </span>
                                        </v-row>
                                    </v-col>

                                    <v-col cols="12" md="1">
                                        <v-row no-gutters align="center">
                                            <span
                                                class="text-body-2"
                                                style="word-break: break-word; white-space: normal"
                                            >
                                            {{ item.raw?.status }}
                                            </span>
                                        </v-row>
                                    </v-col>
                                    
                                    <v-col cols="12" md="1">
                                        <v-row no-gutters align="center">
                                            <span
                                                class="text-body-2"
                                                style="word-break: break-word; white-space: normal"
                                            >
                                            {{ item.raw.network }}
                                            </span>
                                        </v-row>
                                    </v-col>
                                    
                                    <v-col cols="12" md="1" class="text-capitalize">
                                        <v-row no-gutters align="center">
                                            <span
                                                class="text-body-2"
                                                style="word-break: break-word; white-space: normal"
                                            >
                                            {{ getAge(item.raw?.birthdate) }}
                                            </span>
                                        </v-row>
                                    </v-col>

                                    <v-col cols="12" md="2" class="text-capitalize">
                                        <v-row no-gutters align="center">
                                            <span
                                                class="text-body-2"
                                                style="word-break: break-word; white-space: normal"
                                            >
                                            {{ formatDate(item.raw.birthdate) }}
                                            </span>
                                        </v-row>
                                    </v-col>

                                    <v-col cols="12" md="2">
                                        <v-row no-gutters align="center">
                                            <span
                                                class="text-body-2"
                                                style="word-break: break-word; white-space: normal"
                                            >
                                                {{ item.raw.contactNo }}
                                            </span>
                                        </v-row>
                                    </v-col>

                                    <v-col cols="12" md="2">
                                        <v-row no-gutters align="center">
                                            <span
                                                class="text-capitalize text-body-2"
                                                style="word-break: break-word; white-space: normal"
                                            >
                                            {{ item.raw.address.toLowerCase() }}
                                            </span>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                </v-list-item-title>
                            </v-list-item>

                            <v-divider v-if="itemIndex + 1 !== items.length"></v-divider>
                        </template>
                    </v-list>
                </template>
            </v-data-iterator>
        </v-card-text>
    </v-card>
</template>


<script setup>
import { onMounted, ref } from 'vue'
import Api from '@/services/api'

const discipleList = ref([])

onMounted(async () => {
    const res = await Api.getDiscipleList()
    discipleList.value = res.data
})

function getAge(payload) {
    var today = new Date();
    var birthDate = new Date(payload);

    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    

    return age;
}

function formatDate(date) {
    let formatDate = new Date(date)
    let month = formatDate.getMonth() + 1; // Months are zero-based
    let day = formatDate.getDate();
    let year = formatDate.getFullYear();

    let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    // Add leading zero to month and day if they are single digits
    // if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    
    return `${months[month+1]} ${day}, ${year}`;
}
</script>