<template>
    <div class="counter-section" ref="counterSection">
        <div class="container">
            <div class="row justify-content-center mb-5">
                <div class="col-12 text-center">
                    <h2 class="section-title fs_1" data-aos="fade-up">Proximity to Key Destinations</h2>
                    <p class="section-subtitle mb-5" data-aos="fade-up" data-aos-delay="200">Experience effortless
                        connectivity with quick access to Abu Dhabi's premier locations.</p>
                </div>
            </div>
            <div class="row justify-content-center g-3 mt-5">
                <div class="col-10 col-md-3 my-5  text-white" :data-aos="index % 2 === 0 ? 'fade-up' : 'fade-down'"
                    v-for="(item, index) in counter" :key="index">
                    <div
                        class="bg-dark d-flex flex-column align-items-center justify-content-center rounded-circle p-5">
                        <div>
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="counter-number">
                            <h1 class="fw-bold fs_4">{{ animatedCounters[index] }}<span class="unit"> min +</span>
                            </h1>
                        </div>
                        <div class="fst-italic">
                            <p class="fs_2 text-center text-capitalize "> {{ item.address }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: [
                { time: "10 min", address: "YAS island" },
                { time: "15 min", address: "SAADIYAT ISLAND" },
                { time: "50 min", address: "DUBAI" },
                { time: "15 min", address: "ZAYED INTERNATIONAL AIRPORT" },
                { time: "20 min", address: "ABU DHABI CITY" },
            ],
            animatedCounters: [0, 0, 0, 0, 0],
            hasAnimated: false
        }
    },
    mounted() {
        this.observeCounter();
    },
    methods:{
         observeCounter() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !this.hasAnimated) {
                        this.hasAnimated = true;
                        this.startCounters();
                    }
                });
            }, { threshold: 0.5 });
            observer.observe(this.$refs.counterSection);
        },
        startCounters() {
            this.counter.forEach((item, index) => {
                const target = parseInt(item.time);
                const duration = 2000; // 2 seconds
                const step = target / (duration / 50);
                let current = 0;
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    this.animatedCounters[index] = Math.floor(current);
                }, 50);
            });
        }
    }
}
</script>

<style scoped>
    
.counter-section {
    padding: 80px 0;
    color: #ffffff;
}

.dropdown-card {
    background: #fff;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.section-subtitle {
   
    color: #7f8c8d;
    max-width: 600px;
    margin: 0 auto;
}
</style>