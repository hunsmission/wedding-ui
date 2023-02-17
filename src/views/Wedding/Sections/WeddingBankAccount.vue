<script setup>
import { ref } from "vue";
import MaterialButton from "@/components/MaterialButton.vue";

const mickeyAccount = '53602383401018';
const mickeyFatherAccount = '46930201103044';
const mickeyMotherAccount = '110517162913';
const minnieAccount = '1002-246-198716'
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
            <div class="text-center">
                <MaterialButton class="my-4 mb-2" variant="gradient" style="background-color: #e7b6cc; color: white"
                    fullWidth data-bs-toggle="modal" data-bs-target="#mickeyAccountModal">신랑측 계좌번호
                </MaterialButton>
            </div>
            <div class="text-center">
                <MaterialButton class="my-4 mb-2" variant="gradient" style="background-color: #e7b6cc; color: white"
                    fullWidth data-bs-toggle="modal" data-bs-target="#minnieAccountModal">신부측 계좌번호
                </MaterialButton>
            </div>

            <!-- Modal Mickey -->
            <div class="modal fade" id="mickeyAccountModal" tabindex="-1" aria-labelledby="mickeyAccountModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h6 class="modal-title" id="mickeyAccountModalLabel">
                                신랑측 계좌번호
                            </h6>
                            <MaterialButton color="none" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </MaterialButton>
                        </div>
                        <div class="modal-body">
                            <p style="color: black">
                                <small class="text-uppercase font-weight-bold" style="color:black">
                                    <strong style="color: black;">[신랑 박성훈]</strong><br>
                                </small>
                                <small>기업은행 536-023834-01-018</small>&nbsp
                                <button class="pl-1" type="button" v-clipboard:copy="mickeyAccount"
                                    v-clipboard:success="onCopy" v-clipboard:error="onError">
                                    <img src="../../../assets/ico/copy-icon.png" style="width:15px; height: 15px;">
                                </button>
                            </p>
                            <p style="color: black">
                                <small class="text-uppercase font-weight-bold" style="color:black">
                                    <strong style="color: black;">[혼주 박기수]</strong><br>
                                </small>
                                <small>국민은행 469302-01-103044</small>&nbsp
                                <button class="pl-1" type="button" v-clipboard:copy="mickeyFatherAccount"
                                    v-clipboard:success="onCopy" v-clipboard:error="onError">
                                    <img src="../../../assets/ico/copy-icon.png" style="width:15px; height: 15px;">
                                </button>
                            </p>
                            <p style="color: black">
                                <small class="text-uppercase font-weight-bold" style="color:black">
                                    <strong style="color: black;">[혼주 백명옥] </strong><br>
                                </small>
                                <small>신한은행 110-517-162913</small>&nbsp
                                <button class="pl-1" type="button" v-clipboard:copy="mickeyMotherAccount"
                                    v-clipboard:success="onCopy" v-clipboard:error="onError">
                                    <img src="../../../assets/ico/copy-icon.png" style="width:15px; height: 15px;">
                                </button>
                            </p>
                        </div>
                        <div class="modal-footer justify-content-between">
                            <MaterialButton variant="gradient" color="dark" data-bs-dismiss="modal">
                                Close
                            </MaterialButton>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal Minnie -->
            <div class="modal fade" id="minnieAccountModal" tabindex="-1" aria-labelledby="minnieAccountModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h6 class="modal-title" id="minnieAccountModalLabel">
                                신부측 계좌번호
                            </h6>
                            <MaterialButton color="none" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </MaterialButton>
                        </div>
                        <div class="modal-body">
                            <p style="color: black">
                                <small class="text-uppercase font-weight-bold" style="color:black">
                                    <strong style="color: black;">[신부 나진원] 가족통장  </strong><br>
                                </small>
                                <small>우리은행 1002-246-198716</small>&nbsp
                                <button class="pl-1" type="button" v-clipboard:copy="minnieAccount"
                                    v-clipboard:success="onCopy" v-clipboard:error="onError">
                                    <img src="../../../assets/ico/copy-icon.png" style="width:15px; height: 15px;">
                                </button>
                            </p>
                        </div>
                        <div class="modal-footer justify-content-between">
                            <MaterialButton variant="gradient" color="dark" data-bs-dismiss="modal">
                                Close
                            </MaterialButton>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div class="col-md-6 m-auto mt-1" style="text-align: center;">
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
            </div> -->
        </div>

    </section>
</template>

<style>
/* modal position(center)*/
.modal {
    text-align: center;
}

.modal-dialog {
    display: inline-block;
    text-align: left;
    vertical-align: middle;
}
</style>
