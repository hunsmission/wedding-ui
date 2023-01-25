<template>
    <div id="photo-grid">
      <photo-grid :box-height="'10px'" :box-width="'1%'" :excess-text="'+ {{count}}'" v-on:clickExcess="triggerClick">
        <img v-for="imahe in images" v-bind:src="imahe.url"/>
      </photo-grid>
    </div>
</template>
  
  <script>
  export default {
    data () {
      return {
        images: [
          {
            title: "image 1",
            url: "" 
          }, {
            title: "image 2",
            url: "" 
          }, {
            title: "image 3",
            url: "" 
          }, {
            title: "image 4",
            url: "" 
          }, {
            title: "image 5",
            url: "https://orig00.deviantart.net/2b7a/f/2017/275/5/6/daily_paint_1777__swineapple_by_cryptid_creations-dbpboas.png" 
          }, {
            title: "image 6",
            url: "https://pre00.deviantart.net/a41c/th/pre/i/2015/014/9/8/swan_by_avine-d8dw53d.jpg" 
          }
        ]
      }
    },
  
    methods: {
      triggerClick() {
        // Some code here...
      }
    },
  }
  </script>