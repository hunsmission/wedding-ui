<script setup>
import DefaultCounterCard from "../../../../examples/cards/counterCards/DefaultCounterCard.vue";
import IconCall from "@/components/IconCall.vue";
import IconMessage from "@/components/IconMessage.vue";
</script>

<template>
    <section class="pt-3 pb-4" id="invite-info">
        <div class="container" style="padding-left: 0px; padding-right: 0px;">
            <div class="row">
                <div class="col-lg-7 pb-4 text-center mx-auto position-relative"
                    style="padding-left: 0px; padding-right: 0px; width: 100%;">
                    <img :src=image style="padding-left: 0px; padding-right: 0px; width: 100%; height: 85%;" />
                </div>
                <div                 
                    style="
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        color: #555;
                        padding-left: 0px;
                        padding-right: 0px;
                ">
                    <ul>
                        <li class="congratulations-contact groom-bride">
                            <div>신랑에게 축하 인사</div>
                            <div>
                                <IconCall width="20" phoneNumber="010-2827-6829"></IconCall>
                            </div>
                            <div>
                                <IconMessage width="20" phoneNumber="010-2827-6829"></IconMessage>
                            </div>
                        </li>
                        <li class="congratulations-contact groom-bride">
                            <div>신부에게 축하 인사</div>
                            <div>
                                <IconCall width="20" phoneNumber="010-7376-0560"></IconCall>
                            </div>
                            <div>
                                <IconMessage width="20" phoneNumber="010-7376-0560"></IconMessage>
                            </div>
                        </li>
                    </ul>
                    <div style="
          background-color: #555;
          height: 50px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 20px;
        ">
                        혼주에게 전화하기
                    </div>
                    <div class="cantact-parents-container">
                        <ul>
                            <li>신랑측 혼주</li>
                            <li class="congratulations-contact parents">
                                <div>아버지 박기수</div>
                                <div>
                                    <IconCall width="15" phoneNumber="010-9070-6829"></IconCall>
                                </div>
                                <div>
                                    <IconMessage width="15" phoneNumber="010-9070-6829"></IconMessage>
                                </div>
                            </li>
                            <li class="congratulations-contact parents">
                                <div>어머니 백명옥</div>
                                <div>
                                    <IconCall width="15" phoneNumber="010-7112-6829"></IconCall>
                                </div>
                                <div>
                                    <IconMessage width="15" phoneNumber="010-7112-6829"></IconMessage>
                                </div>
                            </li>
                        </ul>
                        <ul>
                            <li>신부측 혼주</li>
                            <li class="congratulations-contact parents">
                                <div>아버지 나병선</div>
                                <div>
                                    <IconCall width="15" phoneNumber="010-4330-3936"></IconCall>
                                </div>
                                <div>
                                    <IconMessage width="15" phoneNumber="010-4330-3936"></IconMessage>
                                </div>
                            </li>
                            <li class="congratulations-contact parents">
                                <div>어머니 김미주</div>
                                <div>
                                    <IconCall width="15" phoneNumber="010-9500-0450"></IconCall>
                                </div>
                                <div>
                                    <IconMessage width="15" phoneNumber="010-9500-0450"></IconMessage>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "weddingPhotoLayout",
    data() {
        return {
            image: new URL(`../../../../assets/img/content/LovePhoto.PNG`, import.meta.url).href
        }
    }
}
</script>