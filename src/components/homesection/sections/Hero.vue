<template>
    <section class="hero">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-10">

                    <!-- Circular Badge -->


                    <!-- Main Content -->
                    <div class="text-start text-white position-relative" data-aos="fade-down">
                        <div class="hero-badge">
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
                        <span data-aos="zoom-in" class="clr_one fw-semibold bg-white px-3 p-2 rounded-4 ">Fahid Island:</span>
                        <h1 class="display-1 fw-semibold my-4">
                            Exclusive Off-Plan Island <br></br>Living in Abu Dhabi
                        </h1>

                        <p class="lead mb-5">
                            Secure early access to luxury off-plan residences on Abu Dhabi’s newest residential island
                            community.
                        </p>
                        <Button text="Register Interest" color="white" />
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Button from '../../Button.vue';
</script>

<style scoped>
.hero {
    height: 65vh;
    min-height: 940px;
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

/* Circular Badge */
.hero-badge {
    position: absolute;
    top: -16px;
    right: 0%;
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