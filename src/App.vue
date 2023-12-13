<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img alt="Tsinghua Logo" class="shrink" contain src="./assets/thu-logo.png" transition="scale-transition"
          width="55" />
      </div>

      <v-spacer></v-spacer>

      <v-app-bar-title>
        <span class="font-weight-black text-h5">Gallery of Open-Set 3DOR</span>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn href="https://www.moon-lab.tech/" target="_blank" text>
        <span class="mr-2">iMoon Lab</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title v-model="cur_area">
          <v-tab v-for="item in parts" :key="item.id" @click="$vuetify.goTo(item.tag)">
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </template>

    </v-app-bar>

    <v-main>
      <v-container>
        <MyIntro id="intro" v-intersect="changeCurrentTab" />
        <v-row class="my-6">
          <v-divider></v-divider>
        </v-row>
        <DownloadData id="download" v-intersect="changeCurrentTab" />
        <v-row class="my-6">
          <v-divider></v-divider>
        </v-row>
        <AllLeaderboard id="os-lb" v-intersect="changeCurrentTab" />
        <v-row class="my-6">
          <v-divider></v-divider>
        </v-row>
        <SHREC22 id="shrec-lb" v-intersect="changeCurrentTab" />
        <v-row class="my-6">
          <v-divider></v-divider>
        </v-row>
        <MoreDetails id="details" v-intersect="changeCurrentTab" />
        <v-row class="my-6">
          <v-divider></v-divider>
        </v-row>
        <MyCitation id="citation" v-intersect="changeCurrentTab" />
        <v-row>
          <v-col cols="12">
            <h3>Copyright</h3>
            <p>
              The original authors hold the copyright of the 3D model. The
              modality representations of those 3D models from those public
              datasets was obtained by us via
              <a href="https://www.blender.org/" target="_blank">Blender</a>,
              <a href="http://www.open3d.org/" target="_blank">Open3D</a>, and
              <a href="https://www.patrickmin.com/minecraft/" target="_blank">Binvox</a>. Those datasets are provided for
              the convienience of academic
              research only.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer color="primary" dark padless>
      <v-container fluid class="pa-0">
        <v-row class="align-center" no-gutters>
          <v-col cols="12" md="10">
            <v-card-subtitle class="text-center pb-1 text-subtitle-1">
              <strong>iMoon: Intelligent Media and Cognition Lab</strong>
            </v-card-subtitle>
            <v-card-text class="text-center">
              Yue Gao and Yifan Feng. Copyright © 2022 -
              {{ new Date().getFullYear() }}, All rights reserved.
            </v-card-text>
          </v-col>
          <v-col cols="12" md="2" class="d-flex justify-center">
            <v-btn v-for="item in icons" :key="item.idx" class="mx-4" :href="item.link" icon>
              <v-icon size="24px">
                {{ item.icon }}
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import MyIntro from "./components/MyIntro";
import SHREC22 from "./components/SHREC22";
import DownloadData from "./components/DownloadData.vue";
import AllLeaderboard from "./components/AllLeaderboard.vue";
import MoreDetails from "./components/MoreDetails.vue";
import MyCitation from "./components/MyCitation.vue";

export default {
  name: "App",

  components: {
    MyIntro,
    SHREC22,
    DownloadData,
    AllLeaderboard,
    MoreDetails,
    MyCitation,
  },

  data: () => ({
    cur_area: 0,
    parts: [
      { id: 0, title: "Introduction", tag: "#intro" },
      { id: 1, title: "Downloads", tag: "#download" },
      { id: 2, title: "Open-Set 3DOR Leaderboards", tag: "#os-lb" },
      { id: 3, title: "SHREC'22 Leaderboards", tag: "#shrec-lb" },
      { id: 4, title: "Dataset Details", tag: "#details" },
      { id: 5, title: "Citations", tag: "#citation" },
    ],
    icons: [
      {
        idx: 0,
        icon: "mdi-home",
        link: "https://www.moon-lab.tech/",
      },
      {
        idx: 1,
        icon: "mdi-email",
        link: "mailto:evanfeng97@qq.com",
      },
      {
        idx: 2,
        icon: "mdi-source-repository",
        link: "https://github.com/iMoonLab",
      },
      {
        idx: 3,
        icon: "mdi-github",
        link: "https://github.com/yifanfeng97/OS-MN40-Example",
      },
    ],

  }),

  methods: {
    changeCurrentTab(entries) {
      if (entries[0].isIntersecting) {
        if (entries[0].target.id == "intro") {
          this.cur_area = 0;
        } else if (entries[0].target.id == "download") {
          this.cur_area = 1;
        } else if (entries[0].target.id == "os-lb") {
          this.cur_area = 2;
        } else if (entries[0].target.id == "shrec-lb") {
          this.cur_area = 3;
        } else if (entries[0].target.id == "details") {
          this.cur_area = 4;
        } else if (entries[0].target.id == "citation") {
          this.cur_area = 5;
        }
      }
    },
  }
};
</script>
