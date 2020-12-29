<template>
    <v-form @submit.prevent="login">
        <v-container>
            <v-row>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field dense label="Phone Number" v-model="phoneNumber"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field type="password" dense label="Password" v-model="password"></v-text-field>
                </v-col>
            </v-row>
            <v-btn :loading="loading" class="ma-2" color="success" type="submit">
                Login
            </v-btn>
        </v-container>
    </v-form>
</template>
<script>
    export default {
        data() {
            return {
                loading: false,
                phoneNumber: '',
                password: '',
                snackbar: false,
                text: `Tài khoản mật khẩu không chính xác`,
            }
        },

        methods: {
            login() {
                this.loading = true
                this.$store.dispatch("login", {phoneNumber: this.phoneNumber, password: this.password})
                    .then(() => {
                        this.$router.push({name: "Home"})
                    }).catch((error) => {
                    this.$toast.error("Tài khoản mật khẩu không chính xác");
                    console.log("Loi" + error)
                    this.$notification.error("hello world");
                }).finally(
                    () => {
                        console.log("Xong")
                        this.loading = false;
                        this.$router.push({name: "Home"})

                    }
                )
            }
        },

    }
</script>
<style>
    .custom-loader {
        animation: loader 1s infinite;
        display: flex;
    }

    @-moz-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @-webkit-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @-o-keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>