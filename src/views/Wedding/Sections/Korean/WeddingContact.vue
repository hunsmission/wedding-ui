<script setup>
import DefaultCounterCard from "../../../../examples/cards/counterCards/DefaultCounterCard.vue";
import IconCall from "@/components/IconCall.vue";
import IconMessage from "@/components/IconMessage.vue";
</script>

<template>
    <section class="pt-3 pb-4" id="invite-info">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 text-center mx-auto position-relative"
                    style="padding-left: 0px; padding-right: 0px;">
                    <img :src=image width="300" style="padding-left: 0px; padding-right: 0px;" />
                </div>
                <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #555;
      ">
                    <ul>
                        <li class="congratulations-contact groom-bride">
                            <div>신랑에게 축하 인사</div>
                            <div>
                                <IconCall width="20" phoneNumber="010-4043-0989"></IconCall>
                            </div>
                            <div>
                                <IconMessage width="20" phoneNumber="010-0000-0000"></IconMessage>
                            </div>
                        </li>
                        <li class="congratulations-contact groom-bride">
                            <div>신부에게 축하 인사</div>
                            <div>
                                <IconCall width="20" phoneNumber="010-0000-0000"></IconCall>
                            </div>
                            <div>
                                <IconMessage width="20" phoneNumber="010-0000-0000"></IconMessage>
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
                                <div>아버지 서종호</div>
                                <div>
                                    <IconCall width="15" phoneNumber="010-0000-0000"></IconCall>
                                </div>
                                <div>
                                    <IconMessage width="15" phoneNumber="010-0000-0000"></IconMessage>
                                </div>
                            </li>
                            <li class="congratulations-contact parents">
                                <div>어머니 임성심</div>
                                <div>
                                    <IconCall width="15" phoneNumber="010-0000-0000"></IconCall>
                                </div>
                                <div>
                                    <IconMessage width="15" phoneNumber="010-0000-0000"></IconMessage>
                                </div>
                            </li>
                        </ul>
                        <ul>
                            <li>신부측 혼주</li>
                            <li class="congratulations-contact parents">
                                <div>아버지 정준영</div>
                                <div>
                                    <IconCall width="15" phoneNumber="010-0000-0000"></IconCall>
                                </div>
                                <div>
                                    <IconMessage width="15" phoneNumber="010-0000-0000"></IconMessage>
                                </div>
                            </li>
                            <li class="congratulations-contact parents">
                                <div>어머니 천필선</div>
                                <div>
                                    <IconCall width="15" phoneNumber="010-0000-0000"></IconCall>
                                </div>
                                <div>
                                    <IconMessage width="15" phoneNumber="010-0000-0000"></IconMessage>
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