<template>
  <v-container>
    <!-- <v-col cols="12" class="mb-4 text-center">
      <h1>Datasets for Open-Set 3D Object Retrieval</h1>
    </v-col> -->
    <v-row dense>
      <v-col cols="12">
        <h2>SHREC'2022 Track: Open-Set 3D Object Retrieval</h2>
      </v-col>
      <v-col cols="12">
        <p class="subheading font-weight-regular">
          This track is stored in
          <a href="https://www.shrec.net/" target="_blank"> SHREC'22</a>, and
          the main page of this track can be found in
          <a href="https://www.moon-lab.tech/shrec22" target="_blank"> here</a>.
          The objective of this track is to evaluate the performance of the
          different 3D shape retrieval algorithms under the open-set setting,
          which is an unknown-category shape retrieval task (each object
          contains multi-modal and multi-resolution representations: mesh, point
          cloud, voxel, and multi-view). In this setting, the retrieval and
          representation models are trained using known-category 3D objects and
          unknown-category 3D data are used for retrieval. This track includes
          two datasets, OS-MN40 and OS-MN40-Miss. The performance metric code
          used in this track can be found in
          <a
            href="https://github.com/yifanfeng97/OS-MN40-Example/blob/master/utils.py#L55"
            target="_blank"
            >here</a
          >.
        </p>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-img
          :src="require('../assets/graphical_abstract.jpg')"
          class="my-3"
          contain
          max-height="400"
        />
      </v-col>

      <v-col cols="12">
        <h3>SHREC'22 Leaderboard (Frozen in 24:00, Mar.5, 2022)</h3>
        <p>
          The two tables recorder the final results of
          <a href="https://www.moon-lab.tech/shrec22" target="_blank"
            >the SHREC'22 Track</a
          >.
        </p>
      </v-col>
      <v-row class="d-flex justify-md-space-around">
        <v-col cols="12" md="5">
          <div class="text-center text-h6">Leaderboard for OS-MN40</div>
          <v-data-table
            :headers="headers"
            :items="final_res"
            hide-default-footer
            class="elevation-1"
            height="250"
          >
          </v-data-table>
        </v-col>
        <v-col cols="12" md="5">
          <div class="text-center text-h6">Leaderboard for OS-MN40-Miss</div>
          <v-data-table
            :headers="headers"
            :items="final_res_miss"
            hide-default-footer
            class="elevation-1"
            height="250"
          >
          </v-data-table>
        </v-col>
      </v-row>

      <v-col cols="12">
        <h3>Reference</h3>
        <p>
          Yifan Feng and Yue Gao, et al.
          <a href="https://www.moon-lab.tech/shrec22" target="_blank"
            >SHREC'22 Track: Open-Set 3D Object Retrieval</a
          >. Computers and Graphics (Elsevier). <br />
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SHREC22",

  data: () => ({
    headers: [
      { text: "#", value: "rank", align: "center" },
      { text: "Team", value: "team", align: "center" },
      { text: "mAP", value: "map", align: "center" },
      { text: "NN", value: "nn", align: "center" },
      { text: "NDCG@100", value: "ndcg", align: "center" },
      { text: "ANMRR", value: "anmrr", align: "center" },
    ],
    final_res: [
      {
        rank: 1,
        team: "TJU_Soup_Master",
        map: "0.5996",
        nn: "0.9083",
        ndcg: "0.6923",
        anmrr: "0.4131",
      },
      {
        rank: 2,
        team: "HCMUS",
        map: "0.5861",
        nn: "0.9240",
        ndcg: "0.7018",
        anmrr: "0.4308",
      },
      {
        rank: 3,
        team: "Ome_Candy",
        map: "0.4450",
        nn: "0.8083",
        ndcg: "0.5869",
        anmrr: "0.5500",
      },
      {
        rank: 4,
        team: "NUC_AICV",
        map: "0.4183",
        nn: "0.8635",
        ndcg: "0.5660",
        anmrr: "0.5755",
      },
      {
        rank: 5,
        team: "MM-AI_SoCSE_KLETech",
        map: "0.4152",
        nn: "0.8646",
        ndcg: "0.5808",
        anmrr: "0.5750",
      },
      {
        rank: 6,
        team: "CU_MM",
        map: "0.4083",
        nn: "0.8677",
        ndcg: "0.5773",
        anmrr: "0.5836",
      },
      {
        rank: 7,
        team: "TT_VODKA",
        map: "0.3293",
        nn: "0.8094",
        ndcg: "0.5017",
        anmrr: "0.6519",
      },
      {
        rank: 8,
        team: "Bing_Dwen_Dwen",
        map: "0.3260",
        nn: "0.7542",
        ndcg: "0.4629",
        anmrr: "0.6644",
      },
    ],
    final_res_miss: [
      {
        rank: 1,
        team: "TJU_Soup_Master",
        map: "0.4385",
        nn: "0.8667",
        ndcg: "0.5937",
        anmrr: "0.5542",
      },
      {
        rank: 2,
        team: "MM-AI_SoCSE_KLETech",
        map: "0.3893",
        nn: "0.8323",
        ndcg: "0.5489",
        anmrr: "0.5937",
      },
      {
        rank: 3,
        team: "TT_VODKA",
        map: "0.2976",
        nn: "0.7823",
        ndcg: "0.4710",
        anmrr: "0.6809",
      },
      {
        rank: 4,
        team: "HCMUS",
        map: "0.2873",
        nn: "0.7885",
        ndcg: "0.4632",
        anmrr: "0.6789",
      },
    ],
  }),
};
</script>
