<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>More Details</h2>
      </v-col>

      <v-col cols="12">
        <h3 class="mb-3">Multi-Modality Data Generation</h3>
        <v-row>
          <v-col>
            <h4 >Multi-view Data</h4>
            <p>
              Blender 3.0 is adopted to render multi-view data. For more
              realistic imaging, we put a plane below the 3D object with the
              center coordinate (0, 0, −0.7) and area 15×15. We also add an area
              light at (−2, 2, 10) with the area 10 × 10 and the energy 2000 and
              looking at (0, 0, 0). Then, we start to place 24 virtual cameras
              to capture multi- view images, as shown in Fig. (a). Each camera
              is placed at a distance of 3.6 to the origin, and elevated 30
              degrees from the ground plane. We also keep each camera looking at
              the origin, and each camera has the same camera intrinsics: 25 FOV
              (field of view). Finally, 24 images with size 256 × 256 are
              captured from those virtual cameras.
            </p>
          </v-col>
          <v-col cols="12" sm="4" lg="3" xl="2">
            <v-img
              :src="require('../assets/generation/mv.jpg')"
              class="my-3"
              contain
              max-height="200"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h4>Point Cloud Data</h4>
            <p>
              Open3D 0.13.0 3 is adopted to gener- ate point cloud data. As
              shown in Fig. (b), we sample 1024 points from the surface of the
              given 3D object. Specifically, we first compute the surface area
              of the given 3D object by accumulating the area of each polygon in
              the polygon set. Then, we normalize each polygon with the overall
              surface area, and arrange and map those polygons to the interval
              [0, 1]. The next is the main sampling process. we randomly draw
              1024 values in the interval [0, 1], and each value will determine
              which polygon to generate one point. For every selected polygon,
              we randomly generate a point coordinate by the convex combination
              of polygon vertices. The weights in the convex combination are
              also randomly generated. In this way, the polygon with the larger
              area will produce more points, which can guarantee that the
              sampled points are uniformly distributed on the surface of the 3D
              object. Finally, 1024 points are uniformly sampled from the
              surface of the given 3D object.
            </p>
          </v-col>
          <v-col cols="12" sm="4" lg="3" xl="2">
            <v-img
              :src="require('../assets/generation/pt.jpg')"
              class="my-3"
              contain
              max-height="200"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h4>Voxel Data</h4>
            <p>
              Open3D 0.13.0 is adopted to generate voxel data. The generation of
              voxel representation includes two steps: voxel template generation
              and collision detection. We first cut the x, y, and z coordinates
              of the unit cube into 32 equal parts to generate 32768 small
              voxels, which named the voxel template. Then, we generate a
              zero-fixed tensor with dimension 32 × 32 × 32, which is used to
              store the voxel data for the given 3D object. Next, as shown in
              Fig. (c), for each small voxel in the voxel template, if it hit
              the 3D object surface or inner, we set the corresponding value in
              the tensor as 1. Finally, the voxel data is generated, which is
              denoted by the binary tensor with dimension 32 × 32 × 32.
            </p>
          </v-col>
          <v-col cols="12" sm="4" lg="3" xl="2">
            <v-img
              :src="require('../assets/generation/vox.jpg')"
              class="my-3"
              contain
              max-height="200"
            />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12">
        <h3>OS-ESB-core</h3>
        <v-img
          :src="require('../assets/details/vis_esb.jpg')"
          class="my-3"
          contain
          max-height="400"
        />
        <p class="text-center font-italic">
          Visualization of the multi-modal representations of 3D objects in the
          OS-ESB-core dataset
        </p>
      </v-col>

      <v-col cols="12">
        <h3>OS-NTU-core</h3>
        <v-img
          :src="require('../assets/details/vis_ntu.jpg')"
          class="my-3"
          contain
          max-height="400"
        />
        <p class="text-center font-italic">
          Visualization of the multi-modal representations of 3D objects in the
          OS-NTU-core dataset
        </p>
      </v-col>

      <v-col cols="12">
        <h3>OS-ESB-core</h3>
        <v-img
          :src="require('../assets/details/vis_mn40.jpg')"
          class="my-3"
          contain
          max-height="400"
        />
        <p class="text-center font-italic">
          Visualization of the multi-modal representations of 3D objects in the
          OS-MN40-core dataset
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MoreDetails",

  data: () => ({}),
};
</script>
