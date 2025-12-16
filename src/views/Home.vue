<template>
    <Hero />
    <About />
    <Counter />
    <ThreePillar />
    <RelatedProjects />
    <ScienceofFahidLiving />
    <Faq />
</template>

<script setup>
import Hero from "../components/homesection/sections/Hero.vue";
import About from "../components/homesection/sections/About.vue";
import ThreePillar from "../components/homesection/sections/ThreePillar.vue";
import Counter from "../components/homesection/sections/Counter.vue";
import RelatedProjects from "../components/homesection/sections/RelatedProjects.vue";
import ScienceofFahidLiving from "../components/homesection/sections/ScienceofFahidLiving.vue";
import Faq from "../components/homesection/sections/Faq.vue";
import { useHead } from '@vueuse/head'
useHead({
    title: 'Fahid Island – Exclusive Luxury Residences in Abu Dhabi | Oia Properties',
    meta: [
        {
            name: 'description',
            content:
                "Discover Fahid Island, Abu Dhabi’s premier luxury residential community by Aldar. Sustainable living, wellness-focused design, and premium off-plan residences."
        },
        {
            name: 'keywords',
            content:
                'Fahid Island, Abu Dhabi luxury residences, Aldar properties, off-plan real estate, Oia Properties'
        },
        { name: 'robots', content: 'index, follow' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Fahid Island – Exclusive Luxury Residences in Abu Dhabi' },
        {
            property: 'og:description',
            content:
                "Discover Fahid Island, Abu Dhabi’s premier luxury residential community by Aldar."
        },
        {
            property: 'og:image',
            content: 'https://oia-properties-kohl.vercel.app/og-image.webp'
        },
        {
            property: 'og:url',
            content: 'https://oia-properties-kohl.vercel.app/'
        },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        {
            name: 'twitter:image',
            content: 'https://oia-properties-kohl.vercel.app/og-image.webp'
        }
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://oia-properties-kohl.vercel.app/'
        }
    ]
})
</script>

<style></style>