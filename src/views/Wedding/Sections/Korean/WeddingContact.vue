<script setup>
import DefaultCounterCard from "../../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>        
    <section class="pt-3 pb-4" id="invite-info" >                
        <div class="container">
            <div class="row">
                <div class="col-lg-7 text-center mx-auto position-relative" style="padding-left: 0px; padding-right: 0px;">
                    <img :src=image width="300" style="padding-left: 0px; padding-right: 0px;" />
                </div>
                <div class="col-lg-7 text-center mx-auto position-relative">
                    <h3 class="text-black pt-1 mb-n5 me-2" :style="{ display: 'inline-block ' }">
                        성훈 &#10084; 진원
                    </h3>
                    <p class="lead text-black px-5 mt-3" :style="{ fontWeight: '400', fontSize: '120%' }">
                        결혼합니다
                    </p>
                </div>
                <div class="vl"></div>
                <div class="col-lg-7 text-center mx-auto position-relative">
                    <p class="lead text-black px-1 mt-2" :style="{ fontWeight: '400', fontSize: '110%' }">
                        2023년 03월 25일 토요일 <br>
                        오후 04시 20분<br>
                        더컨벤션 영등포점 다이너스티홀
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "weddingPhotoLayout",
  data() {
            return {
                image: new URL(`../../../../assets/img/content/LovePhoto.PNG`, import.meta.url).href
        }
    }
}
</script>