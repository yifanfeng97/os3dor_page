<template>
    <v-container>
        <v-row>
            <!-- <v-col class="text-center" cols="12"> -->
                <!-- <h1>Open-Set 3D Object Retrieval using Structure-Driven Multi-Modal Representation</h1> -->
                <!-- <h1>Gallery of the Open-Set 3DOR</h1> -->
            <!-- </v-col> -->
            <v-col cols="12">
                <h2>What is the Open-Set 3DOR Task?</h2>
            </v-col>
            <v-col cols="12">
                <p>
                    <span class="font-weight-black">Open-set 3DOR</span> is short for
                    the open-set 3D object retrieval, which is designed to extend the
                    traditional 3DOR toward real-world applications. Open-Set 3DOR
                    aims to retrieve 3D objects of unknown categories.
                </p>
                <p>
                    <span class="font-weight-black">Traditional 3D object retrieval</span>
                    methods are deployed under the closed-set setting, in which both
                    training and test samples share the same category settings.
                    However, the superior retrieval performance of existing methods
                    heavily relies on the fine-trained embeddings learned from the
                    closed-set object classification task. To conduct the retrieval
                    experiments, features are often extracted from the feature map fed
                    in the classifier, which may fit the seen categories well but are
                    not generalized enough to those unseen categories. Real-world 3D
                    applications probably face the input objects of unknown
                    categories. Under such circumstances, the classification-based
                    retrieval embedding learning methods become invalid in practice.
                </p>
                <p>
                    <span class="font-weight-black">Traditional 3D object recognition/classification</span>
                    task is more dependent on label information compared with the
                    traditional 3D object retrieval task. In the 3D object
                    recognition/classification task, a given 3D object must fall into
                    a seen category, which significantly limits its applications in
                    the real world.
                </p>
                <p>
                    The collected open-set 3DOR datasets are summarized in the
                    following table.
                </p>
                <v-data-table :headers="headers" :items="datasets" class="elevation-1" hide-default-footer>
                </v-data-table>
                <p>
                    The OS-MN40 and OS-MN40-Miss are generated from
                    <a href="https://modelnet.cs.princeton.edu/" target="_blank">ModelNet40</a>
                    in the
                    <a href="https://www.shrec.net/" target="_blank">SHREC'22</a>
                    track.
                    The OS-ESB-core, OS-NTU-core, and OS-MN40-core are generated
                    from the
                    <a href="https://engineering.purdue.edu/cdesign/wp/downloads/" target="_blank">ESB</a>,
                    <a href="http://3d.csie.ntu.edu.tw/~dynamic/database/" target="_blank">NTU</a>, and
                    <a href="https://modelnet.cs.princeton.edu/" target="_blank">ModelNet40</a>
                    dataset, respectively.
                </p>
            </v-col>
            <v-col cols="12">
                <h3>Baseline for the Open-Set 3DOR</h3>
                <p>
                    Here, we provide a baseline code, named
                    <a href="https://github.com/yifanfeng97/OS3D" target="_blank"><span
                            class="font-weight-black">OS3D</span></a>, for this task. The main code is motivated by the
                    <a href="https://github.com/yifanfeng97/OS-MN40-Example" target="_blank">Example Code</a>
                    of the SHREC'22 Open-set 3D Object Retrieval. The OS3D is
                    implemented by directly concatenating the features extracted by
                    those modality-specify networks (<a href="http://vis-www.cs.umass.edu/mvcnn/"
                        target="_blank">MVCNN</a>(ResNet18 as the backbone) for the multi-view modality,
                    <a href="http://stanford.edu/~rqi/pointnet/" target="_blank">PointNet</a>
                    for the point cloud modality, and
                    <a href="https://3dshapenets.cs.princeton.edu/">ShapeNets</a> for
                    the voxel modality). Then, the concatenated features are adopted
                    to evaluate the retrieval performance on those unknown categories
                    of the retrieval set on the OS-MN40-core, OS-NTU-core, and
                    OS-ESB-core datasets. Detailed performance can be found in the
                    following "Open-set 3DOR Leaderboards".
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "MyIntro",

    data: () => ({
        headers: [
            { text: "Dataset", value: "name", align: "center" },
            { text: "Multi-view", value: "mv", align: "center" },
            { text: "Point Cloud", value: "pts", align: "center" },
            { text: "Voxel", value: "vox", align: "center" },
            { text: "Mesh", value: "mesh", align: "center" },
            {
                text: "Classes/Samples for Training",
                value: "tra_set",
                align: "center",
            },
            {
                text: "Classes/Samples for Retrieval",
                value: "ret_set",
                align: "center",
            },
            { text: "Average Objects per Class", value: "avg_per", align: "center" },
            { text: "Objects", value: "n_obj", align: "center" },
            { text: "Source", value: "src", align: "center" },
        ],
        datasets: [
            {
                name: "OS-MN40",
                mv: "Horizontal 24 Views",
                pts: "1024, 2048 Points",
                vox: "32, 64 Dimensions",
                mesh: "Original, 500-face",
                tra_set: "8/2821",
                ret_set: "32/9489",
                avg_per: "307",
                n_obj: "12310",
                src: "ModelNet40",
            },
            {
                name: "OS-MN40-Miss",
                mv: "Horizontal 24 Views",
                pts: "1024, 2048 Points",
                vox: "32, 64 Dimensions",
                mesh: "Original, 500-face",
                tra_set: "8/2821",
                ret_set: "32/9489",
                avg_per: "307",
                n_obj: "12310",
                src: "ModelNet40",
            },
            {
                name: "OS-ESB-core",
                mv: "Horizontal 24 Views",
                pts: "1024 Points",
                vox: "32 Dimensions",
                mesh: "Original",
                tra_set: "17/98",
                ret_set: "24/572",
                avg_per: "16",
                n_obj: "670",
                src: "ESB",
            },
            {
                name: "OS-NTU-core",
                mv: "Horizontal 24 Views",
                pts: "1024 Points",
                vox: "32 Dimensions",
                mesh: "Original",
                tra_set: "13/378",
                ret_set: "54/1541",
                avg_per: "28",
                n_obj: "1919",
                src: "NTU",
            },
            {
                name: "OS-MN40-core",
                mv: "Horizontal 24 Views",
                pts: "1024 Points",
                vox: "32 Dimensions",
                mesh: "Original",
                tra_set: "8/2821",
                ret_set: "32/9489",
                avg_per: "307",
                n_obj: "12310",
                src: "ModelNet40",
            },
        ],
    })
}
</script>