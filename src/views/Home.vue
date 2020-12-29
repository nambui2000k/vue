<template>
    <div class="home">
        {{getName}}
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapGetters(["getName"])
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                this.$store.dispatch("getDataHome")
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
                            console.log("Xong home")
                        }
                    )
            }
        }
    }
</script>