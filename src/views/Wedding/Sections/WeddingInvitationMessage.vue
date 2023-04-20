<script setup>

</script>

<template>
  <section class="pt-5 pb-4" id="invite-message" style="background-color: #F2F2F2">
    <div class="container" >
      <div class="row">
        <div class="col-lg-7 text-center mx-auto position-relative" style="padding-left: 0px; padding-right: 0px;">
          <h4 class="text-black pt-1 mb-n5 me-2" :style="{ display: 'inline-block ' }">
            {{ $t('invite')}}
          </h4>
          <p class="lead text-black px-1 mt-5" :style="{ fontWeight: '100' , fontSize: '110%' }">
            {{ $t('inviteContentLine1')}} <br>
            {{ $t('inviteContentLine2')}}<br>
            {{ $t('inviteContentLine3')}}<br>
            {{ $t('inviteContentLine4')}}
          </p>
          <p class="lead text-black px-2 mt-5" :style="{ fontWeight: '50', fontSize: '110%'}" align="center">
            {{ $t('inviteContentLine5')}} {{ $t('son')}}<strong>&nbsp{{ $t('mickeyName') }}</strong><br>
            {{ $t('inviteContentLine6')}} &nbsp&nbsp{{ $t('daughter')}}&nbsp<strong>&nbsp {{ $t('minnieName') }}</strong>
          </p>
          <p class="lead text-black px-2 mt-1" :style="{ fontWeight: '50' , fontSize: '110%'}">
            
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
