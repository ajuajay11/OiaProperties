<template>
    <section class="related-projects mt-50">
        <div class="container">
            <div class="row d-none d-md-flex">
                <h1 class="section-title fs_1 text-capitalize my-5 text-center"> Related Projects </h1>
                <p class="section-subtitle text-center mb-4">Explore other premium developments by Aldar Properties, offering exceptional living experiences in Abu Dhabi.</p>
                <div class="col-md-4 mt-50" v-for="(project, i) in projects" :key="'desktop-' + i">
                    <div class="project-card">
                        <div class="image-wrap cursor">
                            <img :src="project.image" class="img-fluid w-100" />
                        </div>
                        <div class="info-card">
                            <div class="meta">
                                <span>
                                    <i class="bi bi-house"></i>
                                    {{ project.units }}
                                </span>
                                <span>
                                    <i class="bi bi-buildings"></i>
                                    Aldar Properties
                                </span>
                            </div>
                            <h4>{{ project.title }}</h4>
                            <p class="price">
                                From <strong>{{ project.price }}</strong>
                            </p>
                            <p class="type">{{ project.type }}</p>
                            <Button text="Book Now" @click="showRegister = true" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-md-none mt-4 position-relative">
                <v-carousel v-model="active" hide-delimiters :show-arrows="false" height="420">
                    <v-carousel-item v-for="(project, i) in projects" :key="'mobile-' + i">
                        <div class="project-card  cursor">
                            <div class="image-wrap">
                                <img :src="project.image" class="img-fluid w-100" />
                            </div>

                            <div class="info-card">
                                <div class="meta">
                                    <span>
                                        <i class="bi bi-house"></i>
                                        {{ project.units }}
                                    </span>
                                    <span>
                                        <i class="bi bi-buildings"></i>
                                        Aldar Properties
                                    </span>
                                </div>

                                <h4>{{ project.title }}</h4>

                                <p class="price">
                                    From <strong>{{ project.price }}</strong>
                                </p>

                                <p class="type">{{ project.type }}</p>

                                <Button text="Appointment" @click="showRegister = true" />
                            </div>
                        </div>
                    </v-carousel-item>
                </v-carousel>

                <!-- custom arrows -->
                <button class="nav-btn left" @click="prev">
                    <i class="bi bi-chevron-left"></i>
                </button>

                <button class="nav-btn right" @click="next">
                    <i class="bi bi-chevron-right"></i>
                </button>
            </div>

        </div>
    </section>
    <RegisterPopup v-if="showRegister" @close="showRegister = false" />

</template>

<script setup>
import { ref } from 'vue'
import RegisterPopup from '../../RegisterPopup.vue';
import Button from '../../Button.vue';
// ✅ your images
import img1 from '@/assets/images/ChatGPT Image Sep 10, 2025, 04_33_06 PM_1757509649_a69221f6.webp'
import img2 from '@/assets/images/ChatGPT Image Sep 10, 2025, 03_54_06 PM_1757509649_4d7965ea.webp'
import img3 from '@/assets/images/Fahid-Beach-Residences-by-Aldar-Properties-Banner.webp'

const active = ref(0)
const showRegister = ref(false)

const projects = [
    {
        title: 'Fahid Beach Residences',
        price: '3,500,000 AED',
        type: 'Apartments, Duplex, Townhouse',
        units: '1, 2, 3, 4, 5',
        image: img1
    },
    {
        title: 'Fahid Beach House',
        price: '1,800,000 AED',
        type: 'Apartments',
        units: 'Studio, 1, 2, 3',
        image: img2
    },
    {
        title: 'Fahid Beach Terraces',
        price: '3,600,000 AED',
        type: 'Apartments, Duplex, Penthouse',
        units: '1, 2, 3, 4, 5',
        image: img3
    }
]

const prev = () => {
    active.value =
        active.value === 0 ? projects.length - 1 : active.value - 1
}

const next = () => {
    active.value =
        active.value === projects.length - 1 ? 0 : active.value + 1
}
</script>

<style scoped>
/* ===== CARD ===== */
.project-card {
    position: relative;
    height: 500px;
}

.image-wrap {
    overflow: hidden;
    border-radius: 6px;
}

.image-wrap img {
    height: 260px;
    object-fit: cover;
    transition: transform 0.6s ease;
}

.project-card:hover img {
    transform: scale(1.08);
}

.info-card {
    position: absolute;
    bottom: 80px;
    background: #fff;
    width: 90%;
    padding: 18px;
    border-radius: 20px;
    left: 5%;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}

.meta {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #777;
    margin-bottom: 10px;
}

.meta i {
    margin-right: 4px;
}


.price {
    font-size: 14px;
    margin: 6px 0;
}

.type {
    font-size: 13px;
    color: #777;
}

.cta {
    display: inline-block;
    margin-top: 10px;
    font-size: 13px;
    color: #0f5f59;
    font-weight: 600;
    text-decoration: none;
}

/* ===== MOBILE ARROWS ===== */
.nav-btn {
    position: absolute;
    top: 45%;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: #fff;
    border: none;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
}

.nav-btn.left {
    left: -10px;
}

.nav-btn.right {
    right: -10px;
}

/* hide arrows on desktop */
@media (min-width: 768px) {
    .nav-btn {
        display: none;
    }
}
</style>
