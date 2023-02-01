<template>
    <v-container>
        <masonry :gutter="{ default: '10px', 700: '15px' }"
            :cols="{ default: 4, 1000: 3, 700: 3, 500: 3, 400: 3, 100: 3, 10: 3 }">
            <v-card v-for="item in items" :key="item.id" class="mt-2 mb-2" color="blue lighten-3">
                <v-img :src="item.img"></v-img>
            </v-card>
        </masonry>
    </v-container>
</template>

<script>

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