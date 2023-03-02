<template>
  <section class="pt-3 pb-4" id="wedding-map"> <!-- style="background-color: #F2F2F2" -->
    <div class="row">
      <hr style="border: solid 3px #f881b4; width: 100%">
    </div>

    <p class="lead text-black px-1" :style="{ fontWeight: '700', fontSize: '80%', marginBottom: '1px' }">
      Location <br>
    <ul style="list-style:none">
      <li style="float:left">
        <h6 style="color:black">{{ $t('mapTitle') }}</h6>
      </li>
      <li class="mt-0" style="float:right">
        <MaterialSwitch class="mb-0" id="flexSwitchCheckDefault1" labelClass="text-dark font-weight-bold d-block text-sm ml-0"
          @click="toggleDraggable">
        </MaterialSwitch>
      </li>
      <li class="mt-2 mr-2" style="float:right; color: #606060;">
        {{ $t('mapDraggable') }}
      </li>

    </ul>
    </p>

    <!-- Map -->
    <div class="pt-3">
      <NaverMap :key="mapKey" style="width: 100%; height: 400px" :mapOptions="mapOptions">
        <!-- <NaverMap style="width: 100%; height: 400px" :options="mapOptions"> -->
        <naver-marker @click="isOpen = !isOpen" :latitude="37.5267957" :longitude="126.8989077"
          @onLoad="onLoadMarker($event)">
        </naver-marker>
        <naver-info-window :marker="marker" :open="isOpen" @onLoad="onLoadInfoWindow($event)">
          <div class="infowindow-style"><strong>{{ $t('location3') }}</strong></div>
        </naver-info-window>
        <!-- </NaverMap> -->
      </NaverMap>
    </div>
    <!-- Address-->
    <div class="pt-3 pl-3"> <!-- style="border: 1px solid;"> -->
      <h7 class="mb-1" style="color:black">
        <strong>{{ $t('location2') }}</strong>
        <br>{{ $t('address') }}
        <button class="pl-1" type="button" v-clipboard:copy="message" v-clipboard:success="onCopy"
          v-clipboard:error="onError">
          <img src="../../../assets/ico/copy-icon.png" style="width:15px; height: 15px;">
        </button>
        <br>02-6426-5000
      </h7>
      <br>
      <small class="text-uppercase font-weight-bold" style="color:black">
        <br><strong style="color: orchid;">{{ $t('subway') }}</strong>: {{ $t('subwayContent1') }}
        <br>{{ $t('subwayContent2') }}
        <br>&#11088 <strong>{{ $t('subwayContent3') }}</strong>{{ $t('subwayContent4') }} &#11088
        <br><strong style="color: orchid;">{{ $t('bus') }}</strong>: 70-3, 5620, 6631, 6637, 7612, 영등포 02
      </small>
      <br>
    </div>
    <!-- Navigation Button-->
    <div class="cantact-parents-container pt-5">
      <ul>
        <li style="margin-bottom: 5px;">
          <img src="../../../assets/ico/Tmap.png" style="width:33%; height: 33%;" @click='tmapApiCall'>
        </li>
        <li>Tmap</li>
      </ul>
      <ul>
        <li style="margin-bottom: 5px;">
          <img src="../../../assets/ico/KakaoNavi.png" style="width:33%; height: 33%;" @click='kakaoMapApiCall'>
        </li>
        <li>{{ $t('kakaoNavi') }}</li>
      </ul>
      <ul>
        <li style="margin-bottom: 5px;">
          <img src="../../../assets/ico/NaverMap.png" style="width:33%; height: 33%;" @click='naverMapApiCall'>
        </li>
        <li>{{ $t('naverMap') }}</li>
      </ul>
    </div>
  </section>
</template>


<script setup>
import { reactive, ref } from "vue";
import {
  NaverMap,
  NaverMarker,
  NaverInfoWindow,
} from "vue3-naver-maps";
import { useToast } from 'vue-toast-notification';
import MaterialSwitch from "@/components/MaterialSwitch.vue";

const $toast = useToast();
const marker = ref();
const infoWindow = ref();
const isOpen = ref(true); // false: unvisible, true: visible

const onLoadMarker = (markerObject) => {
  marker.value = markerObject;
};
const onLoadInfoWindow = (infoWindowObject) => {
  infoWindow.value = infoWindowObject;
};

const message = '서울시 영등포구 국회대로38길 2길';

const mapOptions = ref({
  latitude: 37.5267957,   // 지도 중앙 위도
  longitude: 126.8989077, // 지도 중앙 경도
  zoom: 16,
  zoomControl: true,
  zoomControlOptions: { style: "SMALL", position: "TOP_LEFT" },
  draggable: false
});

const onCopy = (e) => {
  $toast.open({
    message: 'Copied to clipboard : ' + e.text,
    type: 'default',
    position: 'bottom',
    duration: 1500,
    queue: true
  });
};

const onError = (e) => {
  $toast.open({
    message: 'Failed Copied to clipboard : ',
    type: 'error',
    position: 'bottom',
    duration: 1500,
    queue: true
  });
};

const mapKey = ref(0);

function toggleDraggable() {
  mapOptions.value.draggable = !mapOptions.value.draggable; 
  mapKey.value += 1;
}

</script>

<script>
export default {
  components: {
    NaverMap,
    NaverMarker,
    NaverInfoWindow
  },
  setup() {
    return {
      mapOptions,
      toggleDraggable,
      onCopy,
      onError
    }
  },
  methods: {
    tmapApiCall: function () {
      window.open("https://apis.openapi.sk.com/tmap/app/routes?appKey=VkWiVJf1eQ5V97drsC4Y78WWITyPPLzv5YCW8qOF&name=더컨벤션영등포점&lon=126.8989077&lat=37.5267957", "_blank");
    },
    kakaoMapApiCall: function () {
      window.Kakao.Navi.share({
        name: '더컨벤션영등포점',
        x: 126.8989077,
        y: 37.5267957,
        coordType: 'wgs84',
      });
    },
    naverMapApiCall: function () {
      window.open("nmap://place?lat=37.5267957&lng=126.8989077&name=더컨벤션영등포점&appname=WeddingInvitation", "_blank");
    },
  },
}
</script>

<style>
.infowindow-style {
  color: black;
  background-color: white;
  text-align: center;
  font-weight: 600;
  font-size: 10px;
  width: 100px;
}
</style>
