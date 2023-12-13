<template>
    <v-row>
        <v-col cols="12">
            <h2>Citation</h2>
            <p>
                If you find those datasets useful, please cite the following
                papers:
            </p>
            <p>
                [1] Yifan Feng, Shuyi Ji, Yu-Shen Liu, Shaoyi Du, and Qionghai Dai.
                Hypergraph-Based Multi-Modal Representation for Open-Set 3D Object Retrieval.
                IEEE Transactions on Pattern Analysis & Machine Intelligence, 2023.
                <br />
                [2] Yifan Feng and Yue Gao, et al.
                <a href="https://www.moon-lab.tech/shrec22" target="_blank">SHREC'22 Track: Open-Set 3D Object
                    Retrieval</a>. Computers and Graphics (Elsevier). <br />
            </p>
            <h3>BibTex</h3>
            <v-card hover class="pa-4">
                <v-card-item v-for="item in bibs" :key="item.idx">
                    <span v-html="item.bib"></span>
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
const Cite = require('citation-js')

export default {
    name: "MyCitation",

    data: () => ({
        bibs: [
            {
                idx: 0,
                bib: Cite(`@article{feng2023hypergraph,
          title={Hypergraph-Based Multi-Modal Representation for Open-Set 3D Object Retrieval},
          author={Feng, Yifan and Ji, Shuyi and Liu, Yu-Shen and Du, Shaoyi and Dai, Qionghai and Gao, Yue},
          journal={IEEE Transactions on Pattern Analysis & Machine Intelligence},
          year={2023},
        }`).format('bibtex', {
                    format: 'html',
                    // template: 'apa',
                    lang: 'en-US',
                }),
            },
            {
                idx: 1,
                bib: Cite(`@article{feng2022shrec,
          title={SHREC'22 Track: Open-Set 3D Object Retrieval},
          author={Feng, Yifan and Gao, Yue and others},
          journal={Computers & Graphics},
          volume={107},
          pages={231--240},
          year={2022},
        }`).format('bibtex', {
                    format: 'html',
                    // template: 'apa',
                    lang: 'en-US',
                })
            },
        ],
    }),
};
</script>