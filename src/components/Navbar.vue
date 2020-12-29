<template>
    <v-navigation-drawer v-model="drawer" dark app class="grey darken-3 py-0">
        <v-container>
            <v-row>
                <v-col md="9">
                    <v-progress-circular v-if="loggedIn"
                                         :rotate="300"
                                         :size="50"
                                         :width="7"
                                         :value="value"
                                         color="lime accent-3"
                                         class="mt-n1"
                    >
                        {{ value }}
                    </v-progress-circular>
                </v-col>

            </v-row>
        </v-container>
        <v-list nav>
            <v-list-item v-for="(nav,index)  in navs" v-bind:key="index" router :to="nav.router">
                <v-list-item-action>
                    <v-icon small>{{nav.icon}}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{nav.name}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <v-layout row style="position: absolute; bottom: 0">
            <v-flex md-10>
                <v-list-item dense>
                    <v-list-item-avatar class="ml-2">
                        <v-img src="/anh-avatar-dep.jpg"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-action class="ml-8">
                        <v-badge color="error" overlap>
                            <template slot="badge">
                                3
                            </template>
                            <v-icon color="tertiary">
                                mdi-bell
                            </v-icon>
                        </v-badge>
                    </v-list-item-action>
                </v-list-item>
            </v-flex>
            <v-flex md-2>
                <v-tooltip top>
                    <template  v-slot:activator="{ on }">
                        <v-btn text icon v-on="on" class="mt-2" @click="logout">
                            <v-icon dark="" right>
                                fas fa-sign-out-alt
                            </v-icon>
                        </v-btn>
                    </template>
                    <span>Exit</span>
                </v-tooltip>
            </v-flex>
            <v-flex md-12>
                <v-card color="grey darken-1">
                    <v-list-item dense>
                        <v-list-item-action>
                            <v-btn class="mx-2" fab dark small color="blue">
                                <v-icon dark>mdi-heart</v-icon>
                            </v-btn>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>AAE IdeaPro</v-list-item-title>
                        </v-list-item-content>
                        <v-icon dark class="mr-2">fas fa-chevron-down</v-icon>
                    </v-list-item>
                </v-card>
            </v-flex>
        </v-layout>
    </v-navigation-drawer>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        data: () => {
            return {
                interval: {},
                value: 0,
            };
        },
        beforeDestroy() {
            clearInterval(this.interval);
        },
        computed: {
            ...mapGetters(["drawer", "getItems", "loggedIn","navs","getAvatar"]),
        },
        mounted() {
            this.interval = setInterval(() => {
                if (this.value === 100) {
                    return (this.value = 0);
                }
                this.value += 10;
            }, 1000);
        },
        methods: {
            logout() {
                this.$store.dispatch("logout").then(() => {
                    this.$router.push({name: "Login"})
                })
            }

        }
    };
</script>

<style scoped>
    .v-progress-circular {
        margin: 1rem;
    }
</style>
