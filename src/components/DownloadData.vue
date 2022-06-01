<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>Downloads</h2>
      </v-col>
      <v-col cols="12">
        <h3>OS-MN40 and OS-MN40-Miss</h3>
        <p>
          OS-MN40 and OS-MN40-Miss contain four modalities and three of them
          consist of multiple resolution formats. In the multi-view modality,
          each image has the resolution of 512x512 with a transparent
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
          <span class="font-weight-black">OS-MN40:</span> Data can be downloaded
          from
          <a
            href="https://data.shrec22.moon-lab.tech:18443/OS-MN40.tar.gz"
            target="_blank"
            >here(~46G)</a
          >. The qeury and target labels can be download from
          <a href="" target="_blank">here</a>.
        </p>
        <p>
          <span class="font-weight-black">OS-MN40-Miss:</span> Data can be
          downloaded from
          <a
            href="https://data.shrec22.moon-lab.tech:18443/OS-MN40-Miss.tar.gz"
            target="_blank"
            >here(~28G)</a
          >. The qeury and target labels can be download from
          <a href="" target="_blank">here</a>.
        </p>
      </v-col>

      <v-col cols="12">
        <h3>OS-MN40-core, OS-NTU-core, and OS-ESB-core</h3>
        <p>
          Each 3D object in the three datasets contains three modalities:
          multi-view, point cloud, and voxel. To compress the file size, in the
          multi-view modality, each image has the resolution of 256x256 without
          a transparent background. We place a plane below the 3D object. Thus,
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
          functions.
        </p>
        <p>
          <span class="font-weight-black">OS-MN40-core:</span> Data can be
          downloaded from
          <a
            href="https://data.shrec22.moon-lab.tech:18443/OS-MN40.tar.gz"
            target="_blank"
            >here(~1.9G)</a
          >. The qeury and target labels can be download from
          <a href="" target="_blank">here</a>.
        </p>
        <p>
          <span class="font-weight-black">OS-NTU-core:</span> Data can be
          downloaded from
          <a
            href="https://data.shrec22.moon-lab.tech:18443/OS-MN40-Miss.tar.gz"
            target="_blank"
            >here(400M)</a
          >. The qeury and target labels can be download from
          <a href="" target="_blank">here</a>.
        </p>
        <p>
          <span class="font-weight-black">OS-ESB-core:</span> Data can be
          downloaded from
          <a
            href="https://data.shrec22.moon-lab.tech:18443/OS-MN40-Miss.tar.gz"
            target="_blank"
            >here(~100M)</a
          >. The qeury and target labels can be download from
          <a href="" target="_blank">here</a>.
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
