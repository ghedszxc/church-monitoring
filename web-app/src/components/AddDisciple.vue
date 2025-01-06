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
                <v-card-text>
                    <v-form ref="form">
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.surname"
                                    label="Surname"
                                    hide-details
                                    density="compact"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.givenName"
                                    label="Given Name"
                                    hide-details
                                    density="compact"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.middleName"
                                    label="Middle Name"
                                    hide-details
                                    density="compact"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-select
                                    v-model="form.network"
                                    label="Network"
                                    :items="networkList"
                                    hide-details
                                    density="compact"
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
                                ></v-select>
                                <!-- :rules="[v => !!v || 'Item is required']" -->
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="form.contactNo"
                                    label="Contact No."
                                    hide-details
                                    density="compact"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-date-picker
                                    v-model="form.birthdate"
                                    show-adjacent-months>
                                    <!-- <template v-slot:header>
                                    </template> -->
                                </v-date-picker>
                                <!-- <v-text-field
                                    v-model="form.contactNo"
                                    label="Contact No."
                                    hide-details
                                    density="compact"
                                ></v-text-field> -->
                            </v-col>
                            
                        </v-row>
                        <!-- <v-text-field
                            v-model="name"
                            label="Name"
                            required
                        ></v-text-field>

                        <v-select
                            v-model="select"
                            :items="items"
                            :rules="[v => !!v || 'Item is required']"
                            label="Item"
                            required
                        ></v-select> -->


                        <div class="d-flex flex-column">
                            <v-btn
                            class="mt-4"
                            color="success"
                            block
                            @click="validate"
                            >
                            Validate
                            </v-btn>

                            <!-- <v-btn
                            class="mt-4"
                            color="error"
                            block
                            @click="reset"
                            >
                            Reset Form
                            </v-btn>

                            <v-btn
                            class="mt-4"
                            color="warning"
                            block
                            @click="resetValidation"
                            >
                            Reset Validation
                            </v-btn> -->
                        </div>
                    </v-form>
                </v-card-text>
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
</script>