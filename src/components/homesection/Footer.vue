<template>
  <section class="cta-section py-5" id="contact">
    <div class="container">
      <div class="cta-card">
        <div class="row align-items-center">
          <div class="col-lg-7 mb-4 mb-lg-0">
            <h2 class="cta-heading mb-3">Ready to find your flow?</h2>
            <p class="text-white mb-4">
              Join a community of driven professionals built for focus, flexibility, and real connection. Your desk is
              waiting.
            </p>

            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="mb-3">
                <input v-model="formData.email" type="email" class="form-control form-input"
                  placeholder="Your email address" required />
              </div>
              <div class="mb-3">
                <textarea v-model="formData.message" class="form-control form-textarea" rows="4"
                  placeholder="Your message" required></textarea>
              </div>
              <button type="submit" class="btn btn-submit">
                Send Message
                <i class="bi bi-envelope-fill ms-2"></i>
              </button>
            </form>
          </div>

          <div class="col-lg-5">
            <div class="features-list">
              <div class="feature-item mb-3">
                <i class="bi bi-wifi feature-icon"></i>
                <span class="feature-text">500 Mbps Wi-Fi</span>
              </div>
              <div class="feature-item mb-3">
                <i class="bi bi-clock-fill feature-icon"></i>
                <span class="feature-text">24/7 Access</span>
              </div>
              <div class="feature-item mb-3">
                <i class="bi bi-grid-3x3-gap feature-icon"></i>
                <span class="feature-text">Meeting Rooms</span>
              </div>
              <div class="feature-item mb-3">
                <i class="bi bi-chair feature-icon"></i>
                <span class="feature-text">Ergonomic Chairs</span>
              </div>

              <div class="community-section mt-4">
                <div class="avatar-group">
                  <div class="avatar" v-for="i in 3" :key="i">
                    <i class="bi bi-person-fill"></i>
                  </div>
                </div>
                <span class="community-text ms-3">Join 500+ professionals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer-section">
    <div class="container">
      <div class="row g-4">

        <div class="col-lg-4 col-md-6">
          <div class="footer-brand mb-4">
            <div class="d-flex align-items-center mb-3 ">

              <router-link to="/" class="bg-white px-4 rounded-3">
                <img src="../../assets/images/logo.webp" alt="logo" width="90" height="90" class="img-fluid" />
              </router-link>
            </div>
            <p class="brand-description">
              Coworking designed for focus, flexibility, and community
            </p>
            <div class="created-by mt-4">
              <span class="me-2">Developed by</span>
              <strong>Oia Properties</strong>
              <span class="mx-2">for</span>
              <span>Fahid Island, Abu Dhabi</span>
            </div>

          </div>
        </div>


        <div class="col-lg-2 col-md-6 col-6">
          <h6 class="footer-heading mb-3">Navigation</h6>
          <ul class="footer-links list-unstyled">
            <li class="mb-2">
              <a href="#home" class="footer-link">Home</a>
            </li>
            <li class="mb-2">
              <a href="#locations" class="footer-link">Locations</a>
            </li>
            <li class="mb-2">
              <a href="#memberships" class="footer-link">Memberships</a>
            </li>
            <li class="mb-2">
              <a href="#faq" class="footer-link">FAQ</a>
            </li>
            <li class="mb-2">
              <a href="#privacy" class="footer-link">Privacy policy</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-6 col-6">
          <h6 class="footer-heading mb-3">Socials</h6>
          <ul class="footer-links list-unstyled">
            <li class="mb-2">
              <a href="#" class="footer-link">Twitter (X)</a>
            </li>
            <li class="mb-2">
              <a href="#" class="footer-link">Instagram</a>
            </li>
            <li class="mb-2">
              <a href="#" class="footer-link">LinkedIn</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-4 col-md-6">
          <h6 class="footer-heading mb-3">Contact</h6>
          <ul class="footer-contact list-unstyled">
            <li class="mb-2 d-flex align-items-start">
              <i class="bi bi-envelope me-2 mt-1"></i>
              <a href="mailto:info@fahidisland.com" class="footer-link">
                info@fahidisland.com
              </a>
            </li>
            <li class="mb-2 d-flex align-items-start">
              <i class="bi bi-telephone me-2 mt-1"></i>
              <a href="tel:+33612345678" class="footer-link">
                +33 6 12 34 56 78
              </a>
            </li>
            <li class="mb-2 d-flex align-items-start">
              <i class="bi bi-clock me-2 mt-1"></i>
              <span class="footer-text">Mon-Fri, 9am to 6pm</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  email: '',
  message: ''
});

const handleSubmit = () => {
  console.log('Form submitted:', formData.value);
  alert('Message sent successfully!');
  formData.value = { email: '', message: '' };
};
</script>

<style scoped>
.cta-section {
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  padding: 80px 0;
}

.cta-card {
  background: var(--template-main_color);
  border-radius: 24px;
  padding: 60px;
  color: var(--template-color-1);
}

.cta-heading {
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 700;
  color: var(--template-color-1);
  font-family: "Exo", sans-serif;
}

.cta-description {
  font-size: 18px;
  color: var(--template-color-3);
  line-height: 1.6;
  max-width: 600px;
}

.contact-form {
  max-width: 500px;
}

.form-input,
.form-textarea {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--template-color-1);
  padding: 14px 20px;
  border-radius: 12px;
  font-size: 15px;
  transition: all 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  background: rgba(255, 255, 255, 0.15);
  border-color: var(--template-main_color);
  color: var(--template-color-1);
  box-shadow: 0 0 0 3px rgba(8, 136, 140, 0.2);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--template-color-1);
}

.btn-submit {
  background: var(--template-color-1);
  color: var(--template-color-2);
  padding: 14px 32px;
  border-radius: 50px;
  font-weight: 600;
  border: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
}

.btn-submit:hover {
  background: var(--template-main_color);
  color: var(--template-color-1);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(8, 136, 140, 0.3);
}

.features-list {
  padding-left: 40px;
}

.feature-item {
  display: flex;
  align-items: center;
  font-size: 16px;
}

.feature-icon {
  font-size: 20px;
  margin-right: 12px;
  color: var(--template-color-1);
}

.feature-text {
  color: var(--template-color-1);
  font-weight: 500;
}

.community-section {
  display: flex;
  align-items: center;
}

.avatar-group {
  display: flex;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--template-color-3);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -12px;
  border: 3px solid var(--template-color-2);
  color: var(--template-color-2);
  font-size: 18px;
}

.avatar:first-child {
  margin-left: 0;
}

.community-text {
  color: var(--template-color-1);
  font-size: 14px;
  font-weight: 500;
}

.footer-section {
  background: var(--template-color-2);
  color: var(--template-color-1);
  padding: 60px 0 30px;
}

.brand-icon {
  width: 40px;
  height: 40px;
  background: var(--template-color-1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--template-color-2);
  font-size: 20px;
}

.brand-name {
  font-weight: 700;
  color: var(--template-color-1);
  font-size: 22px;
}

.brand-description {
  color: var(--template-color-3);
  line-height: 1.6;
  font-size: 15px;
}

.created-by {
  color: var(--template-color-3);
  font-size: 14px;
  display: flex;
  align-items: center;
}

.creator-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--template-color-3);
  font-size: 12px;
  color: var(--template-color-2);
}

.footer-heading {
  color: var(--template-color-1);
  font-weight: 600;
  font-size: 16px;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-link {
  color: var(--template-color-3);
  text-decoration: none;
  font-size: 15px;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--template-main_color);
}

.footer-contact i {
  color: var(--template-color-3);
  font-size: 16px;
}

.footer-text {
  color: var(--template-color-3);
  font-size: 15px;
}

/* Responsive */
@media (max-width: 991px) {
  .cta-card {
    padding: 40px 30px;
  }

  .features-list {
    padding-left: 0;
    margin-top: 30px;
  }

  .cta-section {
    padding: 60px 0;
  }
}

@media (max-width: 576px) {
  .cta-card {
    padding: 30px 20px;
  }

  .cta-heading {
    font-size: 28px;
  }

  .avatar {
    width: 35px;
    height: 35px;
  }
}
</style>