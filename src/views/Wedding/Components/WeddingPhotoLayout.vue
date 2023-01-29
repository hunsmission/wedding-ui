<template>
    <div id="app">
        <v-app>
            <v-container>
                <masonry :cols="3" :gutter="10" class="card-style">
                    <v-card v-for="item in items" :key="item.id" class="mt-2 mb-2" color="grey lighten-3" flat>
                        <v-toolbar flat dense color="transparent" class="font-weight-bold">
                            {{ item.title }}
                        </v-toolbar>
                        <v-img :src="item.img"></v-img>
                    </v-card>
                </masonry>
            </v-container>

        </v-app>
    </div>
</template>

<script>
import path from 'path';

export default {
    name: 'app',
    data() {
        return {
            items: [
                {
                    id: 1,
                    title: "abc",
                    img: new URL(`../../../assets/img/wedding/wedding-1.jpg`, import.meta.url).href
                },

                {
                    id: 3,
                    title: "ghi",
                    img: new URL(`../../../assets/img/wedding/wedding-2.jpg`, import.meta.url).href

                },
                {
                    id: 4,
                    title: "jkl",
                    img: new URL(`../../../assets/img/wedding/wedding-3.jpg`, import.meta.url).href
                },

                {
                    id: 5,
                    title: "mno",
                    img: new URL(`../../../assets/img/wedding/wedding-4.jpg`, import.meta.url).href
                },
                {
                    id: 2,
                    title: "def",
                    img: new URL(`../../../assets/img/wedding/wedding-5.jpg`, import.meta.url).href                        
                },
                {
                    id: 6,
                    title: "Totally not an animal",
                    img: new URL(`../../../assets/img/wedding/wedding-6.jpg`, import.meta.url).href
                }
            ]
        }
    },
}

</script>