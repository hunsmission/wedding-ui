<template>
    <section class="pt-3 pb-4" id="wedding-photo-grid2"> <!-- style="background-color: #F2F2F2" -->
        <p class="lead text-black px-1 mt-3" :style="{ fontWeight: '700', fontSize: '80%', marginBottom: '1px' }">
            Wedding Gallery <br>
            <h7>성훈 &#10084; 진원 Love Story</h7>
        </p>
        <div class="wedding-photo" v-viewer="viewerOptions">
            <swiper class="swiper" :modules="modules" :pagination="true" :effect="'coverflow'" :grab-cursor="true"
                :centered-slides="true" :slides-per-view="'auto'" :coverflow-effect="{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }"                 
                >
                <swiper-slide class="slide" v-for="item in items" :key="item.title">
                    <!-- <img :src="`./static/wedding/wedding-${index}.jpg`" /> -->
                    <v-img :src="item.image" class="grey lighten-2" @click="show"></v-img> <!--:lazy-src="item.image"-->
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script>
import { Pagination, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
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
                    image: new URL(`../../../../assets/img/wedding/wedding-1.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 2',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../../assets/img/wedding/wedding-2.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 3',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../../assets/img/wedding/wedding-3.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 4',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../../assets/img/wedding/wedding-4.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 5',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../../assets/img/wedding/wedding-5.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 7',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../../assets/img/wedding/wedding-7.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 8',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../../assets/img/wedding/wedding-8.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 9',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../../assets/img/wedding/wedding-9.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 10',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../../assets/img/wedding/wedding-10.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 11',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../../assets/img/wedding/wedding-11.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 12',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../../assets/img/wedding/wedding-12.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 13',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../../assets/img/wedding/wedding-13.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 14',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../../assets/img/wedding/wedding-14.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 15',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../../assets/img/wedding/wedding-15.jpg`, import.meta.url).href
                },
                {
                    title: 'Wedding Photo 6',
                    content: 'Mickey Love Minnie',
                    image: new URL(`../../../../assets/img/wedding/wedding-6.jpg`, import.meta.url).href
                },
            ],
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

<!-- <script lang="ts">
import { defineComponent } from 'vue'
import { Pagination, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

export default defineComponent({
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
})
</script> -->

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
        width: 200px;
        height: 300px;

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>