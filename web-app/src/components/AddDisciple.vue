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
                                <v-text-field
                                    v-model="form.contactNo"
                                    label="Contact No."
                                    hide-details
                                    density="compact"
                                    variant="outlined"
                                    type="number"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
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
                            <v-col cols="12" md="6">
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
                                <v-textarea
                                    v-model="form.address"
                                    label="Address"
                                    hide-details
                                    density="compact"
                                    variant="outlined"
                                    rows="3"
                                ></v-textarea>
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
                        @click="onSubmit()">
                        Submit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import Api from '@/services/api'

export default {
    data:() => ({
        addDialog: false,
        form: {
            surname: "",
            givenName: "",
            middleName: "",
            network: "",
            status: "",
            contactNo: "",
            address: "",
            birthdate: new Date()
        },

        statusList: [
            '1T', '2T', '3T', '4T', '5T',
            '6T', '7T', '8T', '9T', '10T',
            'RD'
        ],

        networkList: [
            'W', 'YM', 'M', 'YM'
        ],
    }),
    methods: {
        async onSubmit() {
            Api.registerDisciple(this.form).then(() => {
                this.$refs.form.reset()
                this.addDialog = false
            })
        },
        async onSelectDate() {
            console.log(this.form.birthdate)
        }
    }
}
// async function onSubmit() {
//     const res = await Api.registerDisciple(form)
//     // const { valid } = await this.$refs.form.validate()


//     console.log(res.data)
//     // if (valid) alert('Form is valid')
// }

// async function reset () {
//     this.$refs.form.reset()
// }

// async function resetValidation () {
//     this.$refs.form.resetValidation()
// }

// async function onSelectDate() {
//     console.log(form.value)
// }
</script>