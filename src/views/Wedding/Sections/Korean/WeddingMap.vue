<!-- <script setup>
import { NaverMap, NaverMarker} from "vue3-naver-maps";

const onLoadMap = (map) => {
  const latLng = new window.naver.maps.LatLng(37.5267957, 126.8989077); // window 생략 가능
  map.setZoom(13);


  map.setCenter(latLng); // Change Map Center
};
</script> -->
<script setup>
import { ref } from "vue";
import {  
  NaverMap,
  NaverMarker,
  NaverInfoWindow,  
} from "vue3-naver-maps";

const marker = ref();
const infoWindow = ref();
const isOpen = ref(true); // false: 안보임, true: 보임

const onLoadMarker = (markerObject) => {
  marker.value = markerObject;
};
const onLoadInfoWindow = (infoWindowObject) => {
  infoWindow.value = infoWindowObject;
};

const mapOptions = {
  latitude: 37.5267957, // 지도 중앙 위도
  longitude: 126.8989077, // 지도 중앙 경도
  zoom: 16,
  zoomControl: true,
  zoomControlOptions: { style:"SMALL", position: "TOP_LEFT"},
};

const message = '서울시 영등포구 국회대로38길 2길'
const onCopy = (e) => {
  alert('Copy address successfully : ' + e.text)
}
const onError = (e) => {
  alert('Failed to copy texts')
}
</script>

<template>
  <section class="pt-3 pb-4" id="wedding-map"> <!-- style="background-color: #F2F2F2" -->
    <p class="lead text-black px-1 mt-3" :style="{ fontWeight: '700', fontSize: '80%', marginBottom: '1px' }">
      Location <br>
      <h7>찾아오시는 길</h7>
    </p>
    <!-- Map -->
    <div class="pt-4">
      <naver-map style="width: 100%; height: 400px" :mapOptions="mapOptions">
        <naver-marker @click="isOpen = !isOpen" :latitude="37.5267957" :longitude="126.8989077"
          @onLoad="onLoadMarker($event)">
        </naver-marker>
        <naver-info-window :marker="marker" :open="isOpen" @onLoad="onLoadInfoWindow($event)">
          <div class="infowindow-style"><strong>더컨벤션 영등포점</strong></div>
        </naver-info-window>
      </naver-map>
    </div>
    <!-- Address-->
    <div class="pt-3 pl-3"> <!-- style="border: 1px solid;"> -->
      <h7 class="mb-1" style="color:black">
        <strong>더컨벤션 영등포점 다이너스티 홀</strong>
        <br>서울시 영등포구 국회대로38길 2길        
        <button class="pl-1" type="button" v-clipboard:copy="message" v-clipboard:success="onCopy" v-clipboard:error="onError">
          <img src="../../../../assets/ico/copy-icon.png" style="width:15px; height: 15px;">
        </button>
        <br>02-6426-5000
      </h7>
      <br>
      <small class="text-uppercase font-weight-bold" style="color:black">
        <br><strong style="color: orchid;">지하철</strong>: 2호선/5호선 영등포구청역 3번출구 도보 5분
        <br>※ 영등포구청역 4번 출구가 공사로 인해 페쇄 되었으니,
        <br>&#11088 <strong>3번 출구</strong>로 이용해주시기 바랍니다 &#11088
        <br><strong style="color: orchid;">버스</strong>: 70-3, 5620, 6631, 6637, 7612, 영등포 02
      </small>
      <br>
    </div>
    <!-- Navigation Button-->
    <div>
      <ul>
        
      </ul>

    </div>
  </section>
</template>

<style>
.infowindow-style {
  color: black;
  background-color: white;
  text-align: center;
  font-weight: 600;
  font-size: 10px;
  padding: 6px 8px;
}
</style>
