<template>
    <div class="pets">
        <v-data-table
                :headers="headers"
                :items="getListTypePet"
                sort-by="name"
                class="elevation-1">
            <template v-slot:item._id="{ item }">
                <v-chip color="red" dark>{{ item._id }}
                </v-chip>
            </template>
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Type Pet</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">Add Type Pet</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col
                                                cols="12"
                                                sm="6"
                                                md="4"
                                        >
                                            <v-text-field
                                                    v-model="getListTypePet.name"
                                                    label="Name"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col
                                                cols="12"
                                                sm="6"
                                                md="4"
                                        >
                                            <v-text-field
                                                    v-model="getListTypePet.description"
                                                    label="Description"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col
                                                cols="12"
                                                sm="6"
                                                md="4"
                                        >
                                            <v-text-field
                                                    v-model="editedItem.fat"
                                                    label="Fat (g)"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col
                                                cols="12"
                                                sm="6"
                                                md="4"
                                        >
                                            <v-text-field
                                                    v-model="editedItem.carbs"
                                                    label="Carbs (g)"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col
                                                cols="12"
                                                sm="6"
                                                md="4"
                                        >
                                            <v-text-field
                                                    v-model="editedItem.protein"
                                                    label="Protein (g)"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        color="blue darken-1"
                                        text
                                        @click="close"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                        color="blue darken-1"
                                        text
                                        @click="save"
                                >
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogDelete" max-width="500px">
                        <v-card>
                            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.edit="{ item }">
                <v-btn tile color="success" @click="editItem(item)">
                    <v-icon left>
                        mdi-pencil
                    </v-icon>
                    Edit
                </v-btn>
            </template>
            <template v-slot:item.delete="{ item }">
                <v-btn tile color="red" @click="deleteItem(item)">
                    <v-icon left>
                        mdi-delete
                    </v-icon>
                    Delete
                </v-btn>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data: () => ({
            dialog: false,
            dialogDelete: false,
            headers: [
                {
                    text: 'Name',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                {
                    text: 'Description', value: 'description',
                },
                {text: 'ID', value: '_id', align: 'center',},
                {text: 'Edit', value: 'edit', sortable: false, align: 'center',},
                {text: 'Delete', value: 'delete', sortable: false, align: 'center',},
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
            },
            defaultItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
            },
        }),

        computed: {
            ...mapGetters(["getListTypePet"]),
            formTitle() {
                return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
            },
        },

        watch: {
            dialog(val) {
                val || this.close()
            },
            dialogDelete(val) {
                val || this.closeDelete()
            },
        },

        created() {
            this.initialize()
        },

        methods: {
            initialize() {
                this.desserts = [
                    {
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                    },
                ]
            },

            editItem(item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
                this.$toast.success("Edit success", {
                    position: "top-right",
                    timeout: 5000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: false,
                    hideProgressBar: true,
                    closeButton: "button",
                    icon: true,
                    rtl: false
                });
            },

            deleteItem(item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialogDelete = true
                this.$toast.error("Error");
            },

            deleteItemConfirm() {
                this.desserts.splice(this.editedIndex, 1)
                this.closeDelete()
            },

            close() {
                this.dialog = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            },

            closeDelete() {
                this.dialogDelete = false
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                })
            },

            save() {
                if (this.editedIndex > -1) {
                    Object.assign(this.desserts[this.editedIndex], this.editedItem)
                } else {
                    this.desserts.push(this.editedItem)
                }
                this.close()
            },
        },
        beforeCreate() {
            this.$store.dispatch("getTypePet")
                .then(() => {
                    // this.$router.push({name: "Home"})
                })
                .catch((error) => {
                    if (error.status === 401) {
                        this.$store.dispatch("logout").then(() => {
                            this.$router.push({name: "Login"})
                        })
                    }

                })
                .finally(
                    () => {
                        console.log("Xong pets")
                    }
                )
        }
    }
</script>

<style scoped>

</style>