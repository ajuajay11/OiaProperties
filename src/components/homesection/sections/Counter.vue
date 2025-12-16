<template>
    <section class="proximity-section mt-50" id="location">
        <div class="container text-center">
            <h1 class="section-title fs_1 mt-3 text-capitalize text-center">Prime Location & Connectivity</h1>
            <p class="section-subtitle pb-5 mb-5">
                Fahid Island offers unparalleled accessibility, with swift connections to Abu Dhabi's key attractions, airports, and business hubs.
            </p>
            <LocationMap />
            <div class="row pt-3 d-none d-lg-block">
                <div class="proximity-list ">
                <div v-for="(item, index) in locations" :key="index" class="proximity-card">
                    <img :src="item.icon" class="icon" />

                    <h3>
                        {{ item.time }} <span>min</span>
                    </h3>

                    <p>{{ item.name }}</p>
                </div>
            </div>
            </div>
            

        </div>
    </section>

</template>

<script>
import LocationMap from './LocationMap.vue';
export default {
    components: {
        LocationMap
    },
    data() {
        return {
            locations: [
                {
                    time: 5,
                    name: 'YAS ISLAND',
                    icon: 'https://www.oiaproperties.com/images/locations/Yas-Island-02_1758692680_6715f207.svg'
                },
                {
                    time: 15,
                    name: 'SAADIYAT ISLAND',
                    icon: 'https://www.oiaproperties.com/images/locations/Saadiyat-Island-02_1758692680_0447a0df.svg'
                },
                {
                    time: 50,
                    name: 'DUBAI',
                    icon: 'https://www.oiaproperties.com/images/locations/Dubai-01_1758692680_4568347f.svg'
                },
                {
                    time: 15,
                    name: 'ZAYED INTERNATIONAL AIRPORT',
                    icon: 'https://www.oiaproperties.com/images/locations/Zayed-Airport-02_1758692680_b8c33ba4.svg'
                },
                {
                    time: 20,
                    name: 'ABU DHABI CITY',
                    icon: 'https://www.oiaproperties.com/images/locations/Abu-Dhabi Logo-01_1758692680_68771e60.svg'
                }
            ]
        }
    }
}

</script>

<style scoped>
.proximity-section {
    padding: 80px 0;
    background: #fff;
}

.proximity-list {
    display: flex;
    gap: 24px;
    justify-content: center;
    flex-wrap: nowrap;
}

.proximity-card {
    background: #fff;
    padding: 30px 24px;
    border-radius: 16px;
    width: 220px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: transform .3s ease;
    text-align: center;
}

.proximity-card:hover {
    transform: translateY(-6px);
}

.proximity-card .icon {
    width: 48px;
    margin-bottom: 20px;
}

.proximity-card h3 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 8px;
}

.proximity-card h3 span {
    font-size: 14px;
    color: #666;
}

.proximity-card p {
    font-size: 13px;
    letter-spacing: 1px;
    color: #555;
}

/* Mobile horizontal scroll */
@media (max-width: 768px) {
    .proximity-list {
        overflow-x: auto;
        flex-wrap: nowrap;
        padding-bottom: 10px;
    }

    .proximity-card {
        flex: 0 0 260px;
    }
}
</style>