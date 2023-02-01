<template>
  <section class="pt-5 pb-4" id="weddingPhoto" style="background-color: #F2F2F2">
    <div class="row">
      <div class="col-lg-7 text-center mx-auto position-relative">
        <masonry :cols="3" :gutter="10" class="card-style">
            <div  v-for="img in images" :key="img.id"> 
                <img :src="img.src" />
            </div>
        </masonry>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
</script>

<!-- <template>
    <div>
        <masonry :cols="3" :gutter="10" class="card-style">
            <div  v-for="img in images" :key="img.id"> 
                <img :src="img.src" />
            </div>
        </masonry>
        <p>
            ADSFASDF
        </p>
    </div>
</template>
<style>
    .card-style > div > div {
        border-radius: 5px;
        padding:20px;
        margin:0 0 5px 0;
    }

    .card-style > div > div > img {
        width:100%;
    }

</style>
<script>
import Masonry from 'vue-masonry-css'
export default {
   components: {
      Masonry,      
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
