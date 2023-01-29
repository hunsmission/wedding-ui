<template>
    <div v-fade-auto>
        <img @load="onLoad" :src=weddingImg1 alt="" width="100" height="100" />
        <img @load="onLoad" :src=weddingImg2 alt="" width="100" height="100" />
        <img @load="onLoad" :src=weddingImg3 alt="" width="100" height="100" />
        <img @load="onLoad" :src=weddingImg4 alt="" width="100" height="100" />
        <img @load="onLoad" :src=weddingImg5 alt="" width="100" height="100" />
        <img @load="onLoad" :src=weddingImg6 alt="" width="100" height="100" />
    </div>
</template>

<script>
import path from 'path';
import { vFadeAuto } from "vue-img-fade";

export default {
    computed: {
        weddingImg1() {
            return new URL(`../../../assets/img/wedding/wedding-1.jpg`, import.meta.url).href;
        },
        weddingImg2() {
            return new URL(`../../../assets/img/wedding/wedding-2.jpg`, import.meta.url).href;
        },
        weddingImg3() {
            return new URL(`../../../assets/img/wedding/wedding-3.jpg`, import.meta.url).href;
        },
        weddingImg4() {
            return new URL(`../../../assets/img/wedding/wedding-4.jpg`, import.meta.url).href;
        },
        weddingImg5() {
            return new URL(`../../../assets/img/wedding/wedding-5.jpg`, import.meta.url).href;
        },
        weddingImg6() {
            return new URL(`../../../assets/img/wedding/wedding-6.jpg`, import.meta.url).href;
        },
    }
}
</script>