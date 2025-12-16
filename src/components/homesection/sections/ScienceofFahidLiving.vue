<template>
    <section class="newsreadsection mt-50" id="newsreadsection">
        <div class="container p-0">
            <div class="row g-4 ">
                <h1 class="section-title fs_1 mt-3 text-center fw-semibold text-white">The Science of Fahid Living</h1>
                <p class="text-center fs-4 text-white">See the proof</p>

                <!-- DESKTOP GRID -->
                <div class="d-none d-md-block">
                    <div class="row g-4">
                        <div class="col-12 col-md-4 px-4 px-lg-0 " v-for="(fact, index) in facts" :key="index" :data-aos="index % 2 === 0 ? 'fade-down' : 'fade-right'">
                            <div class="fact-card rounded-4 mx-4">
                                <div class="fact-number bg_one rounded-3">
                                    {{ String(index + 1).padStart(2, '0') }}
                                </div>
                                <h4 class="clr_four">
                                    {{ fact.title }}
                                </h4>
                                <p class="fact-text">
                                    {{ fact.text }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- MOBILE CAROUSEL -->
                <div class="d-md-none position-relative p-0">
                    <v-carousel v-model="currentSlide" :show-arrows="false" cycle hide-delimiters height="auto">
                        <v-carousel-item v-for="(fact, index) in facts" :key="index">
                            <div class="d-flex justify-content-center">
                                <div class="fact-card rounded-4 mx-1" style="max-width: 300px;">
                                    <div class="fact-number bg_one rounded-3">
                                        {{ String(index + 1).padStart(2, '0') }}
                                    </div>
                                    <h4 class="clr_one">
                                        {{ fact.title }}
                                    </h4>
                                    <p class="fact-text">
                                        {{ fact.text }}
                                    </p>
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
    </section>
</template>
<script setup>
import { ref } from 'vue';

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % facts.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + facts.length) % facts.length;
};

const facts = [
    {
        title: 'Stress levels drop here',
        text: 'Blue water and green space are linked to lower stress.'
    },
    {
        title: 'Good for your heart',
        text: 'Active paths and calm surroundings support heart health.'
    },
    {
        title: 'Sharper thinking',
        text: 'Greener environments are associated with higher cognitive scores.'
    },
    {
        title: 'Easier breathing',
        text: 'Coastal air and tree cover help you breathe better.'
    },
    {
        title: 'Longer, better life',
        text: 'Wellness-led communities are tied to longer lifespans.'
    },
    {
        title: '13% fewer emissions',
        text: 'Design and operations target a 13% reduction in emissions.'
    }
];
</script>

<style scoped>
.newsreadsection {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
        url('../../../assets/images/Fahid-Beach-Residences-by-Aldar-Properties-Banner.webp');
    background-size: cover;
    background-position: center;
    padding: 80px 0;
}

.newsreadsection .card {
    background: linear-gradient(90deg, #08888c, #08888c);
    border: 2px dotted #08888c;
    border-radius: 18px;
}

.fact-card {
    background: #ffffff;
    padding: 40px 32px;
    height: 100%;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.fact-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
}

/* number box */
.fact-number {
    width: 56px;
    height: 56px;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
}

/* title */
.fact-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
    color: #000;
}

/* text */
.fact-text {
    font-size: 14px;
    color: #555;
    line-height: 1.6;
}

.carousel-arrow {
    position: absolute;
    top: 0%;
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
    color: #333;
}
</style>