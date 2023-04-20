<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<style>
.vl {
  border-left: 2px solid rgb(128, 125, 126);
  height: 40px;
  position: auto;
  left: 50%;
  margin-left: 50%;
  top: 0;
}
</style>

<template>
  <section class="pt-3 pb-4" id="invite-info">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 text-center mx-auto position-relative">
          <h3 class="text-black pt-1 mb-n5 me-2" :style="{ display: 'inline-block ' }">
            {{ $t('mickeyName') }} &#10084; {{ $t('minnieName') }}
          </h3>
          <p class="lead text-black px-5 mt-3" :style="{ fontWeight: '400' , fontSize: '120%'}">
            {{ $t('marry') }}
          </p>
        </div>
        <div class="vl"></div>
        <div class="col-lg-7 text-center mx-auto position-relative">
          <p class="lead text-black px-1 mt-2" :style="{ fontWeight: '400' , fontSize: '110%'}">
            {{ $t('date') }} <br>
            {{ $t('time') }}<br>
            {{ $t('location')}}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
