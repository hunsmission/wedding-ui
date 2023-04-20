<template>
  <section class="pt-3 pb-4" id="wedding-photo-grid">
    <h5 class="mb-24">성훈 &#10084; 진원 </h5>
    <!-- <div class="images" v-viewer="{option: viewerOptions, movable: false }"> -->
    <div class="images" v-viewer="viewerOptions">
      <masonry-wall :items="items" :ssr-columns="3" :columnWidth="120" :options="options" @append="append"
        :style="{ gap: '10px' }">
        <template v-slot:default="{ item }">
          <div class="Item">
            <v-card class="mt-2 mb-2" color="grey lighten-1">
              <v-img :src="item.image" :lazy-src="item.image" class="grey lighten-2" @click="show"></v-img>
            </v-card>
            <div class="Content">
              <!-- <h5 class="text-ellipsis-1l">Input Text</h5> -->
            </div>
          </div>
        </template>
      </masonry-wall>
    </div>
  </section>
</template>

<script>
export default {
  name: "ExampleMasonry",
  data() {
    return {
      options: {
        width: 300,
        padding: {
          20: 8,
          default: 12
        },
      },
      viewerOptions: {
        ready: () => {
          viewerInstance = this.$el.querySelector('.images').$viewer
        },
        inline: false,
        viewed(e) {
          console.log(e.type);
        },
        toolbar: {
          prev: true,
          play: true,
          next: true
        }
      },
      items: [
        {
          title: 'Wedding Photo 1',
          content: 'Mickey Love Minnie',
          image: new URL(`../../../assets/img/wedding/wedding-1.jpg`, import.meta.url).href
        },
        {
          title: 'Wedding Photo 2',
          content: 'Mickey Love Minnie',
          image: new URL(`../../../assets/img/wedding/wedding-2.jpg`, import.meta.url).href
        },
        {
          title: 'Wedding Photo 3',
          content: 'Mickey Love Minnie',
          image: new URL(`../../../assets/img/wedding/wedding-3.jpg`, import.meta.url).href
        },
        {
          title: 'Wedding Photo 4',
          content: 'Mickey Love Minnie',
          image: new URL(`../../../assets/img/wedding/wedding-4.jpg`, import.meta.url).href
        },
        {
          title: 'Wedding Photo 5',
          content: 'Mickey Love Minnie',
          image: new URL(`../../../assets/img/wedding/wedding-5.jpg`, import.meta.url).href
        },
        {
          title: 'Wedding Photo 6',
          content: 'Mickey Love Minnie',
          image: new URL(`../../../assets/img/wedding/wedding-6.jpg`, import.meta.url).href
        },
      ]
    }
  },
  methods: {
    show() {
      const viewer = this.$el.querySelector('.images').$viewer
      viewer.show()
    },
  }
}
</script>

<style scoped>
.Item {
  overflow: hidden;
  border-radius: 4px;
  width: 100%;
  background: #F5F5F5;
}

.Content {
  padding: 1px;
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  line-height: 0;
  display: block;
}
</style>