<template>        
    <section class="pt-3 pb-4" id="wedding-photo-grid2"> <!-- style="background-color: #F2F2F2" -->  
        <div class="row">
            <hr style="border: solid 3px #f881b4; width: 100%">  
        </div>           
        <p class="lead text-black px-1" :style="{ fontWeight: '700', fontSize: '80%', marginBottom: '1px' }">
            [{{ $t('mickeyName') }} &#10084; {{ $t('minnieName') }}] Wedding Gallery <br>
            <!-- <h6 style="color:black">성훈 &#10084; 진원 Love Story</h6> -->
        </p>
        <div class="wedding-photo" v-viewer="viewerOptions">
            <swiper class="swiper" :modules="modules"  :effect="'coverflow'" :grab-cursor="true"    
                :pagination="{ clickable: true, dynamicBullets: true }"                           
                :centered-slides="true" :slides-per-view="'auto'" :coverflow-effect="{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true                    
                }"           
                :loop="true"                     
                >
                <swiper-slide class="slide" v-for="item in items" :key="item.title">
                    <img img :src="item.image" @click="show"/> 
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script>
import { Pagination, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'


export default {
    name: 'swiper-example-3d-coverflow',
    title: '3D Coverflow effect',
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [Pagination, EffectCoverflow]
        }
    },
    data() {
        return {
            viewerOptions: {
                // ready: () => {
                //   viewerInstance = this.$el.querySelector('.images').$viewer
                // },
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
                {
                    title: 'Wedding Photo 7',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-7.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 8',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-8.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 9',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-9.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 10',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-10.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 11',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-11.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 12',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-12.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 13',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-13.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 14',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-14.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 15',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-15.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 16',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-16.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 17',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-17.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 18',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-18.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 19',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-19.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 20',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-20.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 21',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-21.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 22',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-22.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 23',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-23.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 24',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-24.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 25',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-25.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 26',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-26.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 27',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-27.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 28',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-28.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 28-1',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-28-1.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 29',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-29.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 30',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-30.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 31',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../assets/img/wedding/wedding-31.jpg`, import.meta.url).href
                },
            ],
        }
    },
    methods: {
        show() {
            // const viewer = this.$el.querySelector('.images').$viewer
            // viewer.show()
        },
    }

}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
@import '@/assets/css/mixins.scss';
@import '@/assets/css/style.scss';

.wedding-photo {
    @include swiper-wrapper($height: 380px);
    position: relative;
}

.swiper {
    height: 100%;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;

    .slide {
        // width: 180px;
        // height: 300px;
        width: 65%;
        height: 90%;

        img {
            display: block;
            width: 100%;
            height: 100%;
            // object-fit: cover;
            object-fit: contain;
        }
    }
}
</style>