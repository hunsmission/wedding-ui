<!-- <template>
    <div>
      <Masonry
        :columns="3"
        :gutter="20"
      >
        <MasonryTile v-for="img in images" :key="img.id">
          <img :src="img.src" />
        </MasonryTile>
      </Masonry>
    </div>
  </template>
  
  <script>
  import Masonry from 'vue-masonry-css'
  
  export default {
    components: {
      Masonry,
      MasonryTile: Masonry.MasonryTile
    },
    data() {
      return {
        images: [
          { id: 1, src: './static/wedding/wedding-1.jpg' },
          { id: 2, src: './static/wedding/wedding-2.jpg' },
          { id: 3, src: './static/wedding/wedding-3.jpg' },
          { id: 4, src: './static/wedding/wedding-4.jpg' },
          { id: 5, src: './static/wedding/wedding-5.jpg' },
          { id: 6, src: './static/wedding/wedding-6.jpg' },
          // ...
        ]
      }
    }
  }
  </script> -->

<script lang="ts">
import MasonryWall from '@yeger/vue-masonry-wall'
import { defineComponent } from 'vue'


export default defineComponent({
  components: {
    MasonryWall,
  },
  data() {
        return {
            items: [
                {
                    id: 1,
                    title: "abc",
                    height : 50,
                    img: "./static/wedding/wedding-1.jpg"
                },

                {
                    id: 3,
                    title: "ghi",
                    height : 75,
                    img: "./static/wedding/wedding-2.jpg"

                },
                {
                    id: 4,
                    title: "jkl",
                    height : 75,
                    img: "./static/wedding/wedding-3.jpg"
                },

                {
                    id: 5,
                    title: "mno",
                    height : 100,
                    img: "./static/wedding/wedding-4.jpg"
                },
                {
                    id: 2,
                    title: "def",
                    height : 150,
                    img: "./static/wedding/wedding-5.jpg"
                },
                {
                    id: 6,
                    title: "Totally not an animal",
                    height : 125,
                    img: "./static/wedding/wedding-6.jpg"
                }
            ]
        }
    },
})
</script>

<template>
  <MasonryWall :items="items" :ssr-columns="1" :column-width="100" :gap="16">
    <template #default="{ item }">
      <div
        :style="{ height: `${item.height}px` }"
        class="card flex items-center justify-center"
      >
        <v-img :src="item.img"></v-img>
      </div>
    </template>
  </MasonryWall>
</template>