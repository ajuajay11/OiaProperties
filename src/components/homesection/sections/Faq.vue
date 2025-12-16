<template>
    <section class="faq-section">
        <div class="container">
            <div class="row g-4 ">
                <div class="col-12 col-lg-4">

                    <span class="clr_one fw-semibold bg_one px-3 p-2 rounded-4"
                        style="color: #fff !important;">Faq</span>
                    <h2 class="mt-3 faq-title text-center text-lg-start">
                        Know Before <br>You Buy
                    </h2>
                    <p class="">Fahid Island is Abu Dhabi’s next flagship coastal community; wellness-focused, future-ready, and
                        close to everything. Here are the most asked questions.</p>

                    <Button @click="showRegister = true" text="See all FAQs" rounded="xl" variant="flat">

                        <v-icon end>mdi-arrow-right</v-icon>
                    </Button>

                </div>
                <div class="col-12 col-lg-8">
                    <v-expansion-panels v-model="openPanels" variant="accordion" class="faq-panels">
                        <v-expansion-panel v-for="(faq, i) in faqs" :key="i">
                            <v-expansion-panel-title>
                                <div class="faq-row">
                                    <span class="faq-number" :class="{ 'factive': isPanelOpen(i) }">
                                        {{ String(i + 1).padStart(2, '0') }}
                                    </span>
                                    <span class="faq-question clr_four fs-6" :class="{ 'factive fw-bold': isPanelOpen(i) }">
                                        {{ faq.question }}
                                    </span>
                                </div>
                            </v-expansion-panel-title>

                            <v-expansion-panel-text>
                                <p class="fs_two">
                                    {{ faq.answer }}
                                </p>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </div>
            </div>
        </div>
    </section>
    <RegisterPopup v-if="showRegister" @close="showRegister = false" />

</template>

<script setup>
import { ref } from 'vue'
import Button from "../../Button.vue"
import RegisterPopup from '../../RegisterPopup.vue';
const showRegister = ref(false);
const openPanels = ref(0) // First panel open by default

const isPanelOpen = (index) => {
    return openPanels.value === index
}

const faqs = [
    {
        question: 'How involved can I be in the design process?',
        answer:
            'We believe in collaboration and value your input throughout the design process. We encourage clients to actively participate in discussions, share their ideas, preferences, and feedback.'
    },
    {
        question: 'What services do you offer?',
        answer:
            'We offer full interior design services including concept design, space planning, material selection, and project management.'
    },
    {
        question: 'What is your design process?',
        answer:
            'Our process includes discovery, concept development, design execution, and final delivery.'
    },
    {
        question: 'How do you establish your design fees?',
        answer:
            'Fees are determined based on project scope, size, and complexity.'
    },
    {
        question: 'How long does a typical project take?',
        answer:
            'Project timelines vary, but most projects range from a few weeks to several months.'
    }
]
</script>


<style scoped>
.faq-section {
    padding: 80px 0;
    background: #ffffff;
}

/* left */
.faq-label {
    font-size: 12px;
    letter-spacing: 1px;
    color: #6c757d;
    margin-bottom: 8px;
}

.faq-title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 24px;
}

.faq-btn {
    background: #0f5f59;
    color: #fff;
    text-transform: none;
    padding: 12px 20px;
}

/* panels */
.faq-panels .v-expansion-panel {
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    margin-bottom: 14px;
}

.faq-panels .v-expansion-panel-title {
    padding: 20px;
}

/* row */
.faq-row {
    display: flex;
    align-items: center;
    gap: 20px;
}

.faq-number {
    font-size: 14px;
    color: #9ca3af;
    min-width: 32px;
}

.faq-number.factive {
    color: var(--template-main_color);
    font-weight: bold;
}

.faq-question {
    font-size: 16px;
    font-weight: 500;
}

/* answer */
.faq-answer {
    font-size: 14px;
    color: #4b5563;
    line-height: 1.6;
}

/* responsive */
@media (max-width: 768px) {
    .faq-title {
        font-size: 26px;
    }
}
</style>