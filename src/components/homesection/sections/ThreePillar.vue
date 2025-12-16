<template>
    <section class="pillars-section p-0">
        <div class="container-fluid">
            <div class="row align-items-stretch">

                <!-- LEFT -->
                <div class="col-lg-6 bg_one position-relative">
                    <div class="row justify-content-lg-end">
                        <div class="col-12 col-lg-9 col-xxl-9 position-relative">
                            <v-carousel v-model="currentSlide" class="flex-fill" :show-arrows="false" cycle hide-delimiters>
                                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                                    <div class="d-flex flex-column justify-content-center align-items-start text-white h-100 text-start px-4">
                                        <span class="bg-white rounded-circle mb-3 d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                                            <i class="fs-2 clr_one" :class="slide.icon"></i>
                                        </span>
                                        <h3 class="fs_3">{{ slide.title }}</h3>
                                        <p class="fs-5">{{ slide.description }}</p>
                                        <div class="mb-4">
                                            <Button text="Register Interest" color="white"
                                                @click="showRegister = true" />
                                        </div>
                                    </div>
                                </v-carousel-item>
                            </v-carousel>

                            <!-- Custom Arrows -->
                            <button class="carousel-arrow carousel-arrow-left" @click="prevSlide">
                                <i class="bi bi-chevron-left"></i>
                            </button>
                            <button class="carousel-arrow carousel-arrow-right" @click="nextSlide">
                                <i class="bi bi-chevron-right"></i>
                            </button>

                        </div>

                    </div>
                </div>
                <!-- RIGHT (image defines height) -->
                <div class="col-lg-6 p-0 d-none d-lg-block">
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
const currentSlide = ref(0)

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};

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

.carousel-arrow {
    position: absolute;
    bottom: 0%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s;
    z-index: 10;
}

.carousel-arrow:hover {
    background: rgba(255, 255, 255, 1);
}

.carousel-arrow-left {
    left: 10px;
}

.carousel-arrow-right {
    right: 10px;
}

.carousel-arrow i {
    font-size: 20px;
    font-weight: bolder;
    color: #000;
}
</style>