<template>
    <div>
        <v-btn color="primary" variant="flat" @click="addDialog = true">
            <v-icon size="18" class="mr-2">
                mdi-plus
            </v-icon>
            Register
        </v-btn>

        <v-dialog v-model="addDialog" persistent max-width="500">
            <v-card>
                <v-toolbar class="text-h6">
                    <v-btn class="mx-2" icon @click="addDialog = false">
                        <v-icon size="18">
                            mdi-chevron-left
                        </v-icon>
                    </v-btn>
                    Register
                </v-toolbar>
                <v-card-text style="height: 50vh; overflow-y: auto;">
                    <v-form ref="form">
                        <v-row>
                            <v-col cols="12">
                                <span class="text-overline">General Info</span>
                                <v-divider></v-divider>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.surname"
                                    label="Surname"
                                    hide-details
                                    density="compact"
                                    variant="outlined"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.givenName"
                                    label="Given Name"
                                    hide-details
                                    density="compact"
                                    variant="outlined"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.middleName"
                                    label="Middle Name"
                                    hide-details
                                    density="compact"
                                    variant="outlined"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-select
                                    v-model="form.network"
                                    label="Network"
                                    :items="networkList"
                                    hide-details
                                    density="compact"
                                    variant="outlined"
                                ></v-select>
                                <!-- :rules="[v => !!v || 'Item is required']" -->
                            </v-col>
                            <v-col cols="12">
                                <v-select
                                    v-model="form.status"
                                    label="Status"
                                    :items="statusList"
                                    hide-details
                                    density="compact"
                                    variant="outlined"
                                ></v-select>
                                <!-- :rules="[v => !!v || 'Item is required']" -->
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.contactNo"
                                    label="Contact No."
                                    hide-details
                                    density="compact"
                                    variant="outlined"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-date-input
                                    v-model="form.birthdate"
                                    label="Birthdate"
                                    hide-details
                                    density="compact"
                                    variant="outlined"
                                    show-adjacent-months
                                ></v-date-input>
                                <!-- <v-date-picker
                                    :model-value="form.birthdate"
                                    show-adjacent-months
                                    @input="onSelectDate()"
                                    class="w-100">
                                    <template v-slot:header>
                                    </template>
                                    <template v-slot:title>
                                        Select Birthdate
                                    </template>
                                </v-date-picker> -->
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn
                        color="primary"
                        variant="flat"
                        block
                        @click="validate">
                        Submit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const addDialog = ref(false)

const form = ref({
    surname: null,
    givenName: null,
    middleName: null,
    network: null,
    status: null,
    contactNo: null,
    birthdate: new Date()
})

const statusList = ref([
    '1T', '2T', '3T', '4T', '5T',
    '6T', '7T', '8T', '9T', '10T',
    'RD'
])

const networkList = ref([
    'W', 'YM', 'M', 'YM'
])

async function validate () {
    const { valid } = await this.$refs.form.validate()

    if (valid) alert('Form is valid')
}

async function reset () {
    this.$refs.form.reset()
}

async function resetValidation () {
    this.$refs.form.resetValidation()
}

async function onSelectDate() {
    console.log(form.value)
}
</script>