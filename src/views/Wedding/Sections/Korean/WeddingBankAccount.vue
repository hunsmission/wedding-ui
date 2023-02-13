<script setup>
import { ref } from "vue";

const mickeyAccount = '53602383401018';
const minnieAccount = '27670104260910'
const onCopy = (e) => {
  alert('Copy address successfully : ' + e.text)
};
const onError = (e) => {
  alert('Failed to copy texts')
};
</script>

<template>
    <section class="pt-3 pb-4" id="wedding-bank-account">
        <div class="row">
            <hr style="border: solid 3px #f881b4; width: 100%">
        </div>
        <div class="row">
            <div class="col-md-6 m-auto" style="text-align: center;">
                <h6 style="margin-bottom: 0;">
                    신랑 & 신부에게 마음 전하기<br>
                </h6>
                <p>
                    <small>Thank you</small>
                </p>
            </div>
            <div class="col-md-6 m-auto mt-1" style="text-align: center;">
                <p style="color: black">
                    <small>기업은행 536-023834-01-018 (예금주: 박성훈)</small>&nbsp&nbsp
                    <button class="pl-1" type="button" v-clipboard:copy="mickeyAccount" v-clipboard:success="onCopy"
                        v-clipboard:error="onError">
                        <img src="../../../../assets/ico/copy-icon.png" style="width:15px; height: 15px;">
                    </button>
                </p>
                <p style="color: black">
                    <small>국민은행 276701-04-260910 (예금주: 나진원)</small>&nbsp&nbsp
                    <button class="pl-1" type="button" v-clipboard:copy="minnieAccount" v-clipboard:success="onCopy"
                        v-clipboard:error="onError">
                        <img src="../../../../assets/ico/copy-icon.png" style="width:15px; height: 15px;">
                    </button>
                </p>
            </div>
        </div>

    </section>
</template>