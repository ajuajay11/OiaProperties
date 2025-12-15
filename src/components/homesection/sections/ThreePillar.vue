<template>
    <section class="pillars-section p-0">
        <div class="container-fluid">
            <div class="row align-items-stretch">

                <!-- LEFT -->
                <div class="col-lg-6 bg_one ">
                    <div class="row justify-content-end">
                        <div class="col-10 col-xxl-9">
                            <v-carousel class="flex-fill" :show-arrows="false" cycle hide-delimiters>
                                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                                    <div
                                        class="d-flex flex-column justify-content-center align-items-start text-white h-100 text-start px-4">
                                        <span class="bg-white rounded-circle mb-3">
                                            <i class="fs_1 p-3 mb-4 clr_one" :class="slide.icon"></i>
                                        </span>
                                        <h3 class="fs_3">{{ slide.title }}</h3>
                                        <p class="fs-5">{{ slide.description }}</p>
                                        <div class="mb-4">
                                            <Button text="Register Interest" color="white" @click="showRegister = true" />
                                        </div>
                                    </div>
                                </v-carousel-item>
                            </v-carousel>

                        </div>
                    </div>
                </div>
                <!-- RIGHT (image defines height) -->
                <div class="col-lg-6 p-0">
                    <img class="img-fluid h-100 w-100 object-fit-cover"
                        src="../../../assets/images/ChatGPT Image Sep 10, 2025, 03_54_06 PM_1757509649_4d7965ea.webp"
                        alt="threepillar">
                </div>
            </div>
        </div>

    </section>
    <RegisterPopup v-if="showRegister" @close="showRegister = false" />

</template>

<script setup>
import { ref } from 'vue';
import Button from '../../ButtonThree.vue';
import RegisterPopup from '../../RegisterPopup.vue';
const showRegister = ref(false)

const slides = [
    {
        title: "Nature at Your Doorstep",
        icon: "bi bi-tree",
        description:
            "Fahid Island weaves 940,000 sqm of greenery into everyday life. From pocket lawns to shaded trails, every home sits within 250 metres of a park or green area."
    },
    {
        title: "Made for the Water",
        icon: "bi bi-droplet",
        description:
            "An 11-km shoreline wraps the island, giving residents direct access to the water’s edge. With 1,000,000 sqm of clean, sandy beaches, there’s space to relax, recharge, and play."
    },
    {
        title: "Wellness & Sustainability Credentials",
        icon: "bi bi-heart-pulse",
        description:
            "The island proudly boasts a Fitwel 3-Star Rating and is LEED Platinum certified, making it the first in the world to achieve its certification."
    }
];
</script>

<style scoped>
.v-carousel__controls {
    display: none !important;
}

.object-fit-cover {
    object-fit: cover;
}
</style>