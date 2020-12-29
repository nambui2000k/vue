<template>
  <v-layout row>
    <v-flex md3>
      <v-app style="background-color: grey lighten-1;" class="ma-n4">
        <v-container ml-5 mt-5>
          <h4 class="mb-5">FILTER</h4>
          <v-list-item>
            <v-list-item-action>
              <v-icon small>fas fa-user-plus</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>New Condidates</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-icon small>fas fa-user-tag</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Flower Condidate</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-icon small>fas fa-user-cog</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Still in running</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-text-field
            label="Costom Search"
            prepend-icon="fas fa-search"
            class="ml-3 mr-12"
          ></v-text-field>
          <v-select
            v-model="value"
            :items="items"
            chips
            attach
            clearable
            label="Keyword"
            multiple
            class="ml-3 mr-12"
          ></v-select>
          <v-select
            v-model="job"
            :items="jobs"
            chips
            attach
            clearable
            label="Jobs"
            multiple
            class="ml-3 mr-12"
          ></v-select>
        </v-container>
      </v-app>
    </v-flex>
    <v-flex md-9>
      <v-app style="background-color:white;" class="ma-n4">
        <v-container>
          <template>
            <v-data-table
              v-model="selected"
              :single-select="singleSelectet"
              item-key="name"
              show-select
              :headers="headers"
              :items="dessert"
              sort-by="applied"
              class="mr-2">
              <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title>Applicants</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical=""></v-divider>
                    <v-spacer></v-spacer>
                    <v-btn color="grey lighten-1" dark class="mb-2 mr-2" v-on="on" text>
                        <v-icon left>fas fa-upload</v-icon>
                        CSV Import
                    </v-btn>
                      <v-btn color="grey lighten-1" dark class="mb-2 mr-2" v-on="on" text>
                        <v-icon left>fas fa-plus</v-icon>
                        Add cadidate
                    </v-btn>
                </v-toolbar>
              </template>
            </v-data-table>
          </template>
        </v-container>
      </v-app>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => {
    return {
      items: ["Key1", "Key2"],
      value: ["Key1", "Key2"],
      jobs: ["Dev", "Design"],
      job: ["Dev", "Design"],
      singleSelectet: false,
      selected: [],
      header: [
        { text: "PICTURE", align: "right", sortable: false, value: "avatar" },
        { text: "APPLIED ON", value: "applied" },
        { text: "PROGRESS", value: "progress" },
        { text: "RATING", value: "rating" },
        { text: "", value: "action", sortable: false },
      ],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.dessert = [
        {
          avatar: "/anh-avatar-dep.jpg",
          name: "Ahihi",
          applied: "04/04/2020",
          progress: 70,
          rating: 4,
        },
      ];
    },
  },
};
</script>

<style></style>
