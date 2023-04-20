<script setup>
import IconCall from "@/components/IconCall.vue";
import IconMessage from "@/components/IconMessage.vue";
</script>

<template>
    <section class="pt-3 pb-4" id="invite-info">
        <div class="container" style="padding-left: 0px; padding-right: 0px;">
            <div class="row">
                <!-- Image Card-->
                <div class="cantact-parents-container pt-5" style="padding-left: 0px; padding-right: 0px;">
                    <img :src=image style="padding-left: 0px; padding-right: 0px; width: 100%; height: 85%;" />
                </div>
                <!-- Contact -->
                <div style="
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                color: #555;
                                padding-left: 0px;
                                padding-right: 0px;
                        ">
                    <ul>
                        <li class="congratulations-contact groom-bride">
                            <div>{{ $t('contactMickey') }}</div>
                            <div>
                                <IconCall width="20" phoneNumber="010-2827-6829"></IconCall>
                            </div>
                            <div>
                                <IconMessage width="20" phoneNumber="010-2827-6829"></IconMessage>
                            </div>
                        </li>
                        <li class="congratulations-contact groom-bride">
                            <div>{{ $t('contactMinnie') }}</div>
                            <div>
                                <IconCall width="20" phoneNumber="010-7376-0560"></IconCall>
                            </div>
                            <div>
                                <IconMessage width="20" phoneNumber="010-7376-0560"></IconMessage>
                            </div>
                        </li>
                    </ul>
                    <!-- <div style="
                  background-color: #555;
                  height: 50px;
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: white;
                  margin-bottom: 20px;
                ">
                        {{ $t('contactParents') }}
                    </div>
                    <div class="cantact-parents-container">
                        <ul>
                            <li>{{ $t('contactMickeyParentsTitle') }}</li>
                            <li class="congratulations-contact parents">
                                <div>{{ $t('contactMickeyFather') }}</div>
                                <div>
                                    <IconCall width="15" phoneNumber="010-9070-6829"></IconCall>
                                </div>
                                <div>
                                    <IconMessage width="15" phoneNumber="010-9070-6829"></IconMessage>
                                </div>
                            </li>
                            <li class="congratulations-contact parents">
                                <div>{{ $t('contactMickeyMother') }}</div>
                                <div>
                                    <IconCall width="15" phoneNumber="010-7112-6829"></IconCall>
                                </div>
                                <div>
                                    <IconMessage width="15" phoneNumber="010-7112-6829"></IconMessage>
                                </div>
                            </li>
                        </ul>
                        <ul>
                            <li>{{ $t('contactMinnieParentsTitle') }}</li>
                            <li class="congratulations-contact parents">
                                <div>{{ $t('contactMinnieFather') }}</div>
                                <div>
                                    <IconCall width="15" phoneNumber="010-4330-3936"></IconCall>
                                </div>
                                <div>
                                    <IconMessage width="15" phoneNumber="010-4330-3936"></IconMessage>
                                </div>
                            </li>
                            <li class="congratulations-contact parents">
                                <div>{{ $t('contactMinnieMother') }}</div>
                                <div>
                                    <IconCall width="15" phoneNumber="010-9500-0450"></IconCall>
                                </div>
                                <div>
                                    <IconMessage width="15" phoneNumber="010-9500-0450"></IconMessage>
                                </div>
                            </li>
                        </ul>
                    </div> -->
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
            image: new URL(`../../../assets/img/wedding/wedding-card1.jpg`, import.meta.url).href
        }
    }
}
</script>