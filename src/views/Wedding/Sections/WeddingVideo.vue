<script setup>
import { ref } from "vue";
</script>

<template>
    <section class="pt-3 pb-4" id="wedding-video"> <!-- style="background-color: #F2F2F2" -->
        
        <div class="row">
            <hr style="border: solid 3px #f881b4; width: 100%">
        </div>
        <p class="lead text-black px-1" :style="{ fontWeight: '700', fontSize: '80%', marginBottom: '1px' }">
            [{{ $t('mickeyName') }}  &#10084; {{ $t('minnieName') }} ] Promise Video <br>
        </p>
        <div class="row">
            <hr style="border: solid 1px #00ff0000 ; width: 100%">
        </div>
        <div class="pt-1">
            <video controls width="100%" poster="../../../assets/video/video-promise-poster.png" >
                <source src="../../../assets/video/wedding-promise.mp4"  type="video/mp4" />
            </video>
            <!-- <video-player src="../../../assets/video/wedding-video.mp4" type="video/mp4"  controls :loop="false" 
                :volume="0.6" /> -->
        </div>
    </section>
</template>>