<script setup>
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
</script>

<template>
    <section class="pt-3 pb-4" id="wedding-celebration-board">
        <div class="row">
            <hr style="border: solid 2px #f881b4; width: 100%">
        </div>
        <div class="row">
            <div class="col-lg-7 mx-auto d-flex justify-content-center flex-column">
                <h3 class="text-center">축하 메시지 남기기</h3>

                <div class="card-body">
                    <form role="form" class="text-start">
                        <MaterialInput id="email" class="input-group-outline my-3"
                            :label="{ text: '이름', class: 'form-label' }" type="email" />
                        <MaterialInput id="password" class="input-group-outline mb-3"
                            :label="{ text: '패스워드', class: 'form-label' }" type="password" />
                        <MaterialTextArea class="input-group-static mb-4" id="message" :rows="4">Your message
                        </MaterialTextArea>
                        <div class="text-center">
                            <MaterialButton class="my-4 mb-2" variant="gradient" color="success" fullWidth>등록하기
                            </MaterialButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>