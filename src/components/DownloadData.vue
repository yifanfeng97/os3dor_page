<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>Downloads</h2>
      </v-col>
      <!-- <v-col cols="12">
        <h3>OS-MN40 and OS-MN40-Miss</h3>
        <p>
          OS-MN40 and OS-MN40-Miss contain
          <span class="font-weight-black">four modalities</span> and three of
          them consist of multiple resolution formats. In the multi-view
          modality, each image has the resolution of 512x512 with a transparent
          background. Doing in this way, on one hand, may lead to larger file
          size, on the other hand, has the potential to conduct more data
          augmentations like dynamically changing the background color. The
          voxel modality in this dataset is extracted by the
          <a href="https://www.patrickmin.com/minecraft/" target="_blank">
            Binvox</a
          >. Reading the voxel with python can refer to
          <a href="https://github.com/dimatura/binvox-rw-py" target="_blank">
            this</a
          >. The mesh modality includes the original mesh representation and the
          simplified watertight mesh with fixed 500 faces. The watertight
          manifold surface generation method can refer to
          <a href="https://github.com/hjwdzh/Manifold" target="_blank">this</a>
          and
          <a href="https://github.com/lzhengning/SubdivNet" target="_blank"
            >this</a
          >. Each object in the OS-MN40 has complete four types of modalities
          and each object in the OS-MN40-Miss contains incomplete data.
        </p>
        <p>
          <span class="font-weight-black">OS-MN40:</span> Download links:
          <a
            href="https://data.shrec22.moon-lab.tech:18443/SHREC22/OS-MN40.tar.gz"
            target="_blank"
            >Multi-modal Data(~46G)</a
          >
          |
          <a
            href="https://data.shrec22.moon-lab.tech:18443/SHREC22/query_label.txt"
            target="_blank"
            >Query Label</a
          >
          |
          <a
            href="https://data.shrec22.moon-lab.tech:18443/SHREC22/target_label.txt"
            target="_blank"
            >Target Label</a
          >.
        </p>
        <p>
          <span class="font-weight-black">OS-MN40-Miss:</span> Download links:
          <a
            href="https://data.shrec22.moon-lab.tech:18443/SHREC22/OS-MN40-Miss.tar.gz"
            target="_blank"
            >Multi-modal Data(~28G)</a
          >
          |
          <a
            href="https://data.shrec22.moon-lab.tech:18443/SHREC22/query_label.txt"
            target="_blank"
            >Query Label</a
          >
          |
          <a
            href="https://data.shrec22.moon-lab.tech:18443/SHREC22/target_label.txt"
            target="_blank"
            >Target Label</a
          >.
        </p>
      </v-col> -->

      <v-col cols="12">
        <h3>OS-ESB-core, OS-NTU-core, and OS-MN40-core</h3>
        <p>
          Each 3D object in the three datasets contains
          <span class="font-weight-black">three modalities</span>: multi-view,
          point cloud, and voxel. To compress the file size, in the multi-view
          modality, each image has the resolution of 256x256 without a
          transparent background. We place a plane below the 3D object. Thus,
          the shadow and depth information is valid in the three datasets. The
          voxel and point cloud modalities are directly extracted by
          <a href="http://www.open3d.org/" target="_blank">Open3D</a> refering
          to
          <a
            href="http://www.open3d.org/docs/release/python_api/open3d.geometry.VoxelGrid.html"
            target="_blank"
            >here</a
          >
          and
          <a
            href="http://www.open3d.org/docs/0.7.0/python_api/open3d.geometry.sample_points_poisson_disk.html"
            target="_blank"
            >here</a
          >, respectively. The format of the voxel data in the three datasets is
          ".ply", which can be analysed by the
          <a
            href="http://www.open3d.org/docs/release/python_api/open3d.geometry.VoxelGrid.html"
            target="_blank"
            >open3d.io.read_voxel_grid</a
          >
          function. Those unit cooredinates of the voxel modality can be
          obtained by the
          <a
            href="http://www.open3d.org/docs/release/python_api/open3d.geometry.VoxelGrid.html"
            target="_blank"
            >get_voxels</a
          >
          and
          <a
            href="http://www.open3d.org/docs/release/python_api/open3d.geometry.VoxelGrid.html"
            target="_blank"
            >grid_index</a
          >
          functions. More details can refer to the
          <a
            href="https://github.com/yifanfeng97/OS3D/blob/main/datasets.py"
            target="_blank"
            >dataloader</a
          >
          in
          <a href="https://github.com/yifanfeng97/OS3D" target="_blank">OS3D</a
          >.
        </p>
        <p>
          <span class="font-weight-black">OS-ESB-core:</span> Download links:
          <a
            href="https://data.shrec22.moon-lab.tech:18443/OS-3DOR/OS-ESB-core/OS-ESB-core.zip"
            target="_blank"
            >Multi-modal Data(~100M)</a
          >
          |
          <a
            href="https://data.shrec22.moon-lab.tech:18443/OS-3DOR/OS-ESB-core/query_label.txt"
            target="_blank"
            >Query Label</a
          >
          |
          <a
            href="https://data.shrec22.moon-lab.tech:18443/OS-3DOR/OS-ESB-core/target_label.txt"
            target="_blank"
            >Target Label</a
          >. This dataset contains usual engineering shapes from 41 categories
          like: handles, L Blocks, Oil Pans, etc.
        </p>
        <p>
          <span class="font-weight-black">OS-NTU-core:</span> Download links:
          <a
            href="https://data.shrec22.moon-lab.tech:18443/OS-3DOR/OS-NTU-core/OS-NTU-core.zip"
            target="_blank"
            >Multi-modal Data(~260M)</a
          >
          |
          <a
            href="https://data.shrec22.moon-lab.tech:18443/OS-3DOR/OS-NTU-core/query_label.txt"
            target="_blank"
            >Query Label</a
          >
          |
          <a
            href="https://data.shrec22.moon-lab.tech:18443/OS-3DOR/OS-NTU-core/target_label.txt"
            target="_blank"
            >Target Label</a
          >. This dataset contains 67 usual and unusual categories like: duck,
          ring, tank, hammer, etc.
        </p>
        <p>
          <span class="font-weight-black">OS-MN40-core:</span> Download links:
          <a
            href="https://data.shrec22.moon-lab.tech:18443/OS-3DOR/OS-MN40-core/OS-MN40-core.zip"
            target="_blank"
            >Multi-modal Data(~1.9G)</a
          >
          |
          <a
            href="https://data.shrec22.moon-lab.tech:18443/OS-3DOR/OS-MN40-core/query_label.txt"
            target="_blank"
            >Query Label</a
          >
          |
          <a
            href="https://data.shrec22.moon-lab.tech:18443/OS-3DOR/OS-MN40-core/target_label.txt"
            target="_blank"
            >Target Label</a
          >. This dataset contains 40 usual categories like: bed, chair, etc.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DownloadData",

  data: () => ({}),
};
</script>
