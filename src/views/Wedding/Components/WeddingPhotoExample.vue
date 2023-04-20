<template>
  <div class="row">
    <div class="column">
      <img
        v-for="(item, index) in imgList"
        :src="item.src"
        style="width: 100%"
      />
    </div>
    <div class="column">
      <img
        v-for="(item, index) in [...imgList].reverse()"
        :src="item.src"
        style="width: 100%"
      />
    </div>
    <div class="column">
      <img
        v-for="(item, index) in imgList"
        :src="item.src"
        style="width: 100%"
      />
    </div>
    <div class="column">
      <img
        v-for="(item, index) in [...imgList].reverse()"
        :src="item.src"
        style="width: 100%"
      />
    </div>
    <div class="column">
      <img
        v-for="(item, index) in imgList"
        :src="item.src"
        style="width: 100%"
      />
    </div>
    <div class="column">
      <img
        v-for="(item, index) in [...imgList].reverse()"
        :src="item.src"
        style="width: 100%"
      />
    </div>
  </div>
</template>

<script>
import Img1 from "../../../../src/assets/img/wedding/wedding-1.jpg";
import Img2 from "../../../../src/assets/img/wedding/wedding-2.jpg";
import Img3 from "../../../../src/assets/img/wedding/wedding-3.jpg";
import Img4 from "../../../../src/assets/img/wedding/wedding-4.jpg";
import Img5 from "../../../../src/assets/img/wedding/wedding-5.jpg";

export default {
  name: "WeddingPhotoExample",
  data() {
    return {
      imgList: [
        {
          id: 1,
          src: Img1,
        },
        {
          id: 2,
          src: "https://picsum.photos/800/600",
        },
        {
          id: 3,
          src: Img2,
        },
        {
          id: 4,
          src: "https://picsum.photos/900/500",
        },
        {
          id: 5,
          src: Img3,
        },
        {
          id: 6,
          src: "https://picsum.photos/500/300",
        },
        {
          id: 7,
          src: Img4,
        },
        {
          id: 8,
          src: "https://picsum.photos/1280/600",
        },
        {
          id: 9,
          src: "https://picsum.photos/680/1200",
        },
        {
          id: 10,
          src: Img5,
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 8px;
}

.column {
  flex: 16%;
  max-width: 16%;
}

.column img {
  width: 100%;
  margin-top: 8px;
  vertical-align: middle;
}

@media all and (min-width: 768px) and (max-width: 1023px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

@media all and (max-width: 767px) {
  .column {
    flex: 33%;
    max-width: 100%;
    padding: 0 2px;
  }
}
</style>
