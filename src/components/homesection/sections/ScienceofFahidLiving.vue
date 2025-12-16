<template>
    <section class="newsreadsection">
        <div class="container p-0">
            <div class="row g-4">
                <h1 class="fs_one text-center fw-semibold text-white">The Science of Fahid Living</h1>
                <p class="text-center fs-4 text-white">See the proof</p>
                <div class="col-12 col-md-4" v-for="(fact, index) in facts" :key="index" :data-aos="index % 2 === 0 ? 'fade-down' : 'fade-right'">
                    <div class="fact-card rounded-4">

                        <div class="fact-number">
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

            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            facts: [
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
            ]

        }
    }
};
</script>

<style>
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
    background: #000;
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
</style>