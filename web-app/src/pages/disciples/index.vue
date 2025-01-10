<template>
    <v-card class="ma-8">
        <v-toolbar :class="`px-6 py-3 text-${$vuetify.display.mdAndUp ? 'h4' : 'h6'}`">
            <template v-slot:prepend>
                Master List
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
                                                {{ useGlobal().getAge(item.raw?.birthdate) }}
                                                </span>
                                            </v-row>
                                        </v-col>

                                        <v-col cols="12" md="2" class="text-capitalize">
                                            <v-row no-gutters align="center">
                                                <span
                                                    class="text-body-2"
                                                    style="word-break: break-word; white-space: normal"
                                                >
                                                {{ useGlobal().formatDate(item.raw.birthdate) }}
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
                                <template v-slot:append>
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
                                </template>
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
import useGlobal from '@/composables/useGlobal';

const discipleList = ref([])

onMounted(async () => {
    const res = await Api.getDiscipleList()
    discipleList.value = res.data
})
</script>