<script setup>
import { ref } from "vue";
import MaterialButton from "@/components/MaterialButton.vue";
import { useToast } from 'vue-toast-notification';
const $toast = useToast();

const mickeyAccount = '53602383401018';
const mickeyFatherAccount = '46930201103044';
const mickeyMotherAccount = '110517162913';
const minnieAccount = '1002246198716'
const onCopy = (e) => {    
    $toast.open({
                message: 'Copied to clipboard : ' + e.text,
                type: 'default',
                position: 'bottom',
                duration: 1500,
                queue: true               
    });
};
const onError = (e) => {
    $toast.open({
                message: 'Failed Copied to clipboard : ',
                type: 'error',
                position: 'bottom',
                duration: 1500,
                queue: true               
    });
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
                    {{ $t('accountTitle') }}<br>
                </h6>
                <p>
                    <small>Thank you</small>
                </p>
            </div>
            <div class="text-center">
                <MaterialButton class="my-4 mb-2" variant="gradient" style="background-color: #e7b6cc; color: white"
                    fullWidth data-bs-toggle="modal" data-bs-target="#mickeyAccountModal">{{ $t('accountMickey') }}
                </MaterialButton>
            </div>
            <div class="text-center">
                <MaterialButton class="my-4 mb-2" variant="gradient" style="background-color: #e7b6cc; color: white"
                    fullWidth data-bs-toggle="modal" data-bs-target="#minnieAccountModal">{{ $t('accountMinnie') }}
                </MaterialButton>
            </div>

            <!-- Modal Mickey -->
            <div class="modal fade" id="mickeyAccountModal" tabindex="-1" aria-labelledby="mickeyAccountModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h6 class="modal-title" id="mickeyAccountModalLabel">
                                {{ $t('accountMickey') }}
                            </h6>
                            <MaterialButton color="none" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </MaterialButton>
                        </div>
                        <div class="modal-body">
                            <p style="color: black">
                                <small class="text-uppercase font-weight-bold" style="color:black">
                                    <strong style="color: black;">{{ $t('accountMickeyInfo1') }}</strong><br>
                                </small>
                                <small>기업은행 536-023834-01-018</small>&nbsp
                                <button class="pl-1" type="button" v-clipboard:copy="mickeyAccount"
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
                                {{ $t('accountMinnie') }}
                            </h6>
                            <MaterialButton color="none" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </MaterialButton>
                        </div>
                        <div class="modal-body">
                            <p style="color: black">
                                <small class="text-uppercase font-weight-bold" style="color:black">
                                    <strong style="color: black;">{{ $t('accountMinnieInfo1') }} </strong><br>
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