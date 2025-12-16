<template>
    <section class="hero" id="home">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-8">
                    <div class="text-start " data-aos="fade-up" data-aos-delay="3000">
                        <span data-aos="zoom-in" data-aos-delay="600" style="color: #08888c !important;"
                            class="clr_one fst-italic fw-semibold bg-white px-3 p-2 rounded-4 ">Fahid
                            Island</span>
                        <div class="postion-relative text-white">
                            <h1 class="text-white fs_one mt-3 fw-semibold my-4" data-aos="fade-up"
                                data-aos-delay="2000">
                                Exclusive Off-Plan Island <br></br>Living in Abu Dhabi
                            </h1>
                            <div class="hero-badge" data-aos="fade-down" data-aos-delay="3000">
                                <svg class="badge-circle" viewBox="0 0 120 120">
                                    <path id="circlePath" d="M 60, 60 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                                        fill="none" />
                                    <text class="badge-text">
                                        <textPath href="#circlePath" startOffset="0%">
                                            Fahid Island
                                            • Abu Dhabi •
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>
                        
                        <p class="lead mb-5 text-white" data-aos="fade-up" data-aos-delay="1500">
                            Secure early access to luxury off-plan residences on Abu Dhabi’s newest residential island
                            community.
                        </p>
                        <Button text="Register Interest" color="white" @click="showRegister = true" data-aos="fade-up"
                            data-aos-delay="1800" />
                    </div>

                </div>
            </div>
        </div>
    </section>
    <RegisterPopup v-if="showRegister" @close="showRegister = false" />
</template>

<script setup>
import { ref } from 'vue';
import Button from '../../Button.vue';
import RegisterPopup from '../../RegisterPopup.vue';
const showRegister = ref(false)
</script>

<style scoped>
.hero {
    height: 70vh;
    min-height: 750px;
    max-height: 100vh;
    background-image: url('@/assets/images/hero.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}


.hero::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg,
            rgba(0, 0, 0, 0.342),
            rgba(0, 0, 0, 0.562));
}

.hero .container {
    position: relative;
    z-index: 2;
}

.hero-badge {
    position: absolute;
    top: 10px;
    right: 3%;
    width: 120px;
    height: 120px;
    animation: rotate 20s linear infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.badge-text {
    fill: white;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: 2px;
}

/* Responsive */
@media (max-width: 768px) {
    .hero-badge {
        width: 90px;
        height: 90px;
        top: -15px;
        right: 0%;
    }

    .badge-text {
        font-size: 10px;
    }
}

@media (max-width: 480px) {
    .hero-badge {
        display: none;
    }
}
</style>