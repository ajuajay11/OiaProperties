<template>

    <div class="container mt-50">
        <div class="row w-100 py-5 mb-4">
            <div class="col-6" data-aos="fade-right">
                <div class="text-start">
                    <span class="clr_one fw-semibold bg_one px-3 p-2 rounded-4" style="color: #fff !important;">Fahid
                        Island</span>

                    <span class="fs_1 fw-semibold my-4 ">
                        <h1 class="section-title fs_1">Exclusive Island </h1>
                        <p class=" m-0fs_1 section-title">with Serene Living</p>
                    </span>
                </div>
            </div>
            <div class="col-6" data-aos="fade-in">
                <p class="fs_5 fst-italic mb-5">
                    <span class="clr_one">Fahid Island</span>, Abu Dhabi's exclusive development by Aldar, offers a refined coastal lifestyle
                    with wellness and modern amenities. This low-density community includes residential areas,
                    retail, beachfront hotels, and parks for serene living.

                    Located near Yas Island and Zayed International Airport, it provides easy access to attractions
                    and shopping. Features 1-4 bedroom apartments and 5-bedroom penthouses with stunning views and
                    flexible plans.

                    As the first Fitwel-certified island, it emphasizes sustainability and well-being, ideal for
                    families and professionals.
                </p>
                <Button text="Appointment" @click="showRegister = true" />
            </div>
        </div>
    </div>
    <!-- MARQUEE -->
    <div class="marquee-wrapper">
        <div class="marquee-track">
            <div class="marquee-card" v-for="(item, index) in marqueeItems" :key="index" data-aos="fade-down">
                <div class="image-card cursor">
                    <img :src="item.image" class="img-fluid" :alt="item.title" />
                    <div class="overlay">
                        <h5>{{ item.title }}</h5>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </div>

            <!-- duplicate for smooth infinite scroll -->
            <div class="marquee-card" v-for="(item, index) in marqueeItems" :key="'dup-' + index">
                <div class="image-card cursor">
                    <img :src="item.image" class="img-fluid" :alt="item.title" />
                    <div class="overlay">
                        <h5>{{ item.title }}</h5>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    
    <RegisterPopup v-if="showRegister" @close="showRegister = false" />
</template>


<script>
import heroImage from '@/assets/images/hero.webp';
import image1 from '@/assets/images/Hero_1755768041_df5c881e.webp';
import image2 from '@/assets/images/hero_five.webp';
import image3 from '@/assets/images/Fahid-Beach-Residences-by-Aldar-Properties-Banner.webp';
import image4 from '@/assets/images/ChatGPT Image Sep 10, 2025, 03_46_01 PM_1757509650_c3d4b1d7.webp';
import image5 from '@/assets/images/ChatGPT Image Sep 10, 2025, 03_54_06 PM_1757509649_4d7965ea.webp';
import image6 from '@/assets/images/ChatGPT Image Sep 10, 2025, 04_33_06 PM_1757509649_a69221f6.webp';
import Button from '../../Button.vue';
import RegisterPopup from '../../RegisterPopup.vue';
export default {
    name: 'About',
    data() {
        return {
            showRegister: false,
            heroImage,
            marqueeItems: [
                { image: image1, title: 'Effortlessly Connected', description: 'Seamless connectivity in a prime location.' },
                { image: image2, title: 'Lifestyle-Led Luxury', description: 'Experience unparalleled luxury living.' },
                { image: image3, title: 'A Mindful Community', description: 'A community focused on well-being.' },
                { image: image4, title: 'Architecture with Integrity', description: 'Designs that stand the test of time.' },
                { image: image5, title: "World's First Fitwel-Certified Island", description: 'Certified for health and wellness.' },
                { image: image6, title: 'Sustainability, First and Always', description: 'Committed to eco-friendly practices.' }
            ],
            
        };
    },
    components: {
        Button,
        RegisterPopup
    }
};
</script>
<style scoped>
.marquee-wrapper {
    overflow: hidden;
    width: 100%;
}

.marquee-track {
    display: flex;
    gap: 24px;
    width: max-content;
    animation: scroll 40s linear infinite;
}

.marquee-card {
    min-width: 320px;
}

.image-card {
    position: relative;
    height: 420px;
    border-radius: 16px;
    overflow: hidden;
}

.image-card img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.image-card::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
}

.overlay {
    position: absolute;
    inset: 0;
    z-index: 2;
    color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.overlay h5 {
    font-weight: 600;
}

.overlay p {
    font-size: 14px;
    opacity: 0.9;
}

/* animation */
@keyframes scroll {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}

</style>