<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "@/assets/js/useWindowsWidth";

// images
import ArrDark from "@/assets/img/down-arrow-dark.svg";
import downArrow from "@/assets/img/down-arrow.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";

import MaterialButton from "@/components/MaterialButton.vue";

const props = defineProps({
    transparent: {
        type: Boolean,
        default: false
    },
    light: {
        type: Boolean,
        default: false
    },
    dark: {
        type: Boolean,
        default: false
    },
    sticky: {
        type: Boolean,
        default: false
    },
    darkText: {
        type: Boolean,
        default: false
    }
});

// set arrow  color
function getArrowColor() {
    if (props.transparent && textDark.value) {
        return ArrDark;
    } else if (props.transparent) {
        return DownArrWhite;
    } else {
        return ArrDark;
    }
}

// set text color
const getTextColor = () => {
    let color;
    if (props.transparent && textDark.value) {
        color = "text-dark";
    } else if (props.transparent) {
        color = "text-white";
    } else {
        color = "text-dark";
    }

    return color;
};

// set nav color on mobile && desktop

let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (type.value === "mobile") {
    textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
    textDark.value = false;
}

watch(
    () => type.value,
    (newValue) => {
        if (newValue === "mobile") {
            textDark.value = true;
        } else {
            textDark.value = false;
        }
    }
);
</script>
<template>
    <nav class="navbar navbar-expand-lg top-0" :class="{
        'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
            props.transparent,
        'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
            props.sticky,
        'navbar-light bg-white py-3': props.light,
        ' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark
    }"
        style="padding-left: 10px; padding-right: 10px;"
    >
        <div :class="
            props.transparent || props.light || props.dark
                ? 'container'
                : 'container-fluid px-0'
        ">
            <RouterLink class="navbar-brand d-none d-md-block" :class="[
                (props.transparent && textDark.value) || !props.transparent
                    ? 'text-dark font-weight-bolder ms-sm-3'
                    : 'text-white font-weight-bolder ms-sm-3'
            ]" :to="{ name: 'presentation' }" rel="tooltip" title="Mickey & Minnie Wedding" data-placement="bottom">
                &#10084; Wedding Invitation &#10084;
            </RouterLink>
            <RouterLink class="navbar-brand d-block d-md-none" :class="
                props.transparent || props.dark
                    ? 'text-white'
                    : 'font-weight-bolder ms-sm-3'
            " to="/" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" style="margin-right:1px">
                <!-- {{ $t('mickeyName2') }} &#10084; {{ $t('minnieName2') }} -->
               <!-- <small><strong>&#10084; Wedding Invitation &#10084;</strong></small> -->
               &#10084; Wedding Invitation &#10084;
            </RouterLink>
            <MaterialButton class="pt-2" variant="gradient" color="info" @click="$i18n.locale = 'ko'" size="sm" sclass="me-2"
                style="width: 20%; padding-left: 10px; padding-right: 10px; font-size: 10px; margin-bottom: 0; ">
                KOR
            </MaterialButton>
            <MaterialButton class="pt-2" variant="gradient" color="success" @click="$i18n.locale = 'en'" size="sm" sclass="me-2"
                style="width: 20%; padding-left: 10px; padding-right: 10px; font-size: 10px; margin-bottom: 0; ">
                ENG
            </MaterialButton>
            <!-- <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
                                <ul class="navbar-nav d-lg-block d-none mx-2">
                                    <li class="nav-item">
                                        <a :href="korAction.route" class="btn btn-sm mb-0" :class="korAction.color"
                                            onclick="smoothToPricing('pricing-soft-ui')">{{ korAction.label }}</a>
                                    </li>
                                </ul>
                                <ul class="navbar-nav d-lg-block d-none">
                                    <li class="nav-item">
                                        <a :href="engAction.route" class="btn btn-sm mb-0" :class="engAction.color"
                                            onclick="smoothToPricing('pricing-soft-ui')">{{ engAction.label }}</a>
                                    </li>
                                </ul>
                            </div> -->
        </div>
    </nav>
<!-- End Navbar --></template>
