<script setup>
import { onMounted } from "vue";

import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
    setMaterialInput();
});
</script>

<template>
    <section class="pt-3 pb-4" id="wedding-celebration-board">
        <div class="row">
            <hr style="border: solid 3px #f881b4; width: 100%">
        </div>
        <div class="row">
            <div class="col-lg-7 mx-auto d-flex justify-content-center flex-column">
                <p class="lead text-black px-1" :style="{ fontWeight: '700', fontSize: '80%', marginBottom: '1px' }">
                    Congratulatory Messages <br>
                <h6 style="color:black">{{ $t('boardTitle')}}</h6>
                </p>
                <div class="card-body pt-1" style="padding-left: 0px; padding-right: 0px;">
                    <form role="form" class="text-start">
                        <div class="row">
                            <div class="col-6">
                                <MaterialInput id="email" class="input-group-outline my-3"
                                    :label="{ text: 'Name', class: 'form-label' }" type="name" />
                            </div>
                            <div class="col-6 ps-0">
                                <MaterialInput id="password" class="input-group-outline my-3"
                                    :label="{ text: 'Password', class: 'form-label' }" type="password" />
                            </div>
                        </div>

                        <MaterialTextArea class="input-group-static mb-4" id="message" :rows="4">Your message
                        </MaterialTextArea>
                        <div class="text-center">
                            <MaterialButton class="my-4 mb-2" variant="gradient"
                                style="background-color: #e7b6cc; color: white" fullWidth>{{ $t('register')}}
                            </MaterialButton>
                        </div>
                    </form>
                </div>
                <!-- Messages Example Start-->
                <div>
                    <div style="vertical-align: middle;">
                        <h6>
                            미키미키 <small>&nbsp&nbsp&nbsp2023.02.14 13:13:44</small>&nbsp&nbsp&nbsp&nbsp
                            <MaterialButton class="pt-1" variant="gradient" color="light" size="sm" sclass="me-2"
                                style="width: 15%; padding-left: 10px; padding-right: 10px; font-size: 10px; margin-bottom: 0; ">
                                {{ $t('modify')}}</MaterialButton>
                        </h6>
                    </div>
                    <p class="lead text-black px-1" :style="{ fontWeight: '400', fontSize: '80%', marginBottom: '1px' }">
                        추카추카링~~
                    </p>
                    <hr style="border: solid 1px #bcbcbc; width: 100%">
                </div>
                <!-- Messages Example End-->
            </div>
        </div>
    </section>
</template>