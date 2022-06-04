<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <h2>Open-set 3DOR Leaderboards</h2>
        <p>
          Here, we provide leaderboards for those open-set 3DOR datasets. Please
          email <a href="mailto:evanfeng97@qq.com">Yifan Feng</a> to add or
          update your results. The retrieval metric code can refer to
          <a
            href="https://github.com/yifanfeng97/OS3D/blob/main/retrieval_metric.py"
            target="_blank"
            >this</a
          >.
        </p>
        <p>
          In your email please provide following information in this format:
          <br />
          [Dataset Name, Algorithm Name, mAP score, NDCG@100 score, ANMRR
          score], [...].<br />
          Author list, Paper title, Conference, Link to paper.
        </p>
        <p>
          Example: <br />
          [OS-MN40-core, OS3D, 0.2907, 0.4520, 0.6940], [OS-NTU-core, OS3D, 0.1825,
          0.1279, 0.8163], [OS-ESB-core, OS3D, 0.3159, 0.1495, 0.7018]. <br />
          Yifan Feng and Yue Gao, et al., "SHREC'22 Track: Open-set 3D Object
          Retrieval", Computers and Graphics (Elsevier), https://...
        </p>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-md-space-around">
      <v-col cols="12" md="4" class="text-center">
        <div class="text-center text-h6">Leaderboard for OS-MN40-core</div>
        <v-data-table
          :headers="headers"
          :items="res_mn40"
          hide-default-footer
          class="elevation-1"
          height="250"
        >
        </v-data-table>
      </v-col>
      <v-col cols="12" md="4">
        <div class="text-center text-h6">Leaderboard for OS-NTU-core</div>
        <v-data-table
          :headers="headers"
          :items="res_ntu"
          hide-default-footer
          class="elevation-1"
          height="250"
        >
        </v-data-table>
      </v-col>
      <v-col cols="12" md="4">
        <div class="text-center text-h6">Leaderboard for OS-ESB-core</div>
        <v-data-table
          :headers="headers"
          :items="res_esb"
          hide-default-footer
          class="elevation-1"
          height="250"
        >
        </v-data-table>
      </v-col>
    </v-row>

    <v-col cols="12">
      <p>
        [1] Yifan Feng and Yue Gao, et al.
        <a href="https://www.moon-lab.tech/shrec22" target="_blank"
          >SHREC'22 Track: Open-Set 3D Object Retrieval</a
        >. Computers and Graphics (Elsevier). <br />
      </p>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "AllLeaderboard",

  data: () => ({
    headers: [
      { text: "Algorithm", value: "alg", align: "center" },
      { text: "mAP", value: "map", align: "center" },
      { text: "NDCG@100", value: "ndcg", align: "center" },
      { text: "ANMRR", value: "anmrr", align: "center" },
    ],
    res_mn40: [
      {
        alg: "OS3D [1]",
        map: "0.2907",
        ndcg: "0.4520",
        anmrr: "0.6940",
      },
    ],
    res_ntu: [
      {
        alg: "OS3D [1]",
        map: "0.1825",
        ndcg: "0.1279",
        anmrr: "0.8163",
      },
    ],
    res_esb: [
      {
        alg: "OS3D [1]",
        map: "0.3159",
        ndcg: "0.1495",
        anmrr: "0.7018",
      },
    ],
  }),
};
</script>
