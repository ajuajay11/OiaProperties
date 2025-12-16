<template>
  <header>
    <nav class="container">
      <div class="row header align-items-center" data-aos="fade-up" data-aos-delay="3000">

        <!-- LEFT: NAV LINKS -->
        <div class="navbar navbar-expand-lg col-lg-4 col-12 px-3 justify-content-center justify-content-lg-start">
          <div class="d-none d-lg-block">
            <ul class="navbar-nav d-flex gap-3 text-capitalize">

            <li class="nav-item cursor">
              <span class="nav-link d-flex align-items-center gap-1" @click.stop="toggle = !toggle">
                Home
                <i class="bi" :class="toggle ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
              </span>
            </li>

            <li class="nav-item">
              <a href="#contact" class="nav-link" :class="{ active: activeSection === 'contact' }"
                @click.prevent="scrollTo('contact')">
                Contact
              </a>
            </li>

            <li class="nav-item">
              <a href="#faq" class="nav-link" :class="{ active: activeSection === 'faq' }"
                @click.prevent="scrollTo('faq')">
                Faq
              </a>
            </li>
          </ul>
          </div>
        </div>

        <!-- CENTER: LOGO -->
        <div class="col-lg-4 col-12 d-flex justify-content-center my-2 my-lg-0">
          <router-link to="/">
            <img src="../../assets/images/logo.webp" alt="logo" width="90" height="90" class="img-fluid" />
          </router-link>
        </div>

        <!-- RIGHT: BUTTON -->
        <div class="col-lg-4 col-12 d-flex justify-content-center justify-content-lg-end">
          <Button text="Register" @click="showRegister = true" />
        </div>

      </div>
    </nav>

    <!-- DROPDOWN -->
    <transition name="dropdown">
      <div v-if="toggle" class="toggleMenu" v-click-outside="closeMenu">
        <div class="container">
          <div class="dropdown-card">
            <div class="row g-4">

              <!-- IMAGE (hidden on mobile) -->
              <div class="col-md-3 dropdown-image">
                <img src="../../assets/images/toggle.avif" class="img-fluid rounded-3" alt="Preview" />
              </div>

              <!-- LINKS -->
              <div class="col-md-9">
                <div class="row">

                  <div class="col-md-4">
                    <ul class="dropdown-links">
                      <li><a href="/homepage" @click="closeMenu">Homepage</a></li>
                      <li><a href="/services" @click="closeMenu">Services</a></li>
                      <li><a href="/reviews" @click="closeMenu">Reviews</a></li>
                    </ul>
                  </div>

                  <div class="col-md-4">
                    <ul class="dropdown-links">
                      <li><a href="/projects" @click="closeMenu">Projects</a></li>
                      <li><a href="/blog" @click="closeMenu">Blog</a></li>
                      <li><a href="/career" @click="closeMenu">Career</a></li>
                    </ul>
                  </div>

                  <div class="col-md-4">
                    <ul class="dropdown-links">
                      <li><a href="/terms" @click="closeMenu">Terms</a></li>
                      <li><a href="/privacy" @click="closeMenu">Privacy</a></li>
                      <li><a href="/faq" @click="closeMenu">FAQ</a></li>
                    </ul>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
  <RegisterPopup v-if="showRegister" @close="showRegister = false" />

</template>

<script setup>
import { ref } from 'vue'
import Button from '../Button.vue'
import RegisterPopup from '../RegisterPopup.vue';
const showRegister = ref(false);
const toggle = ref(false)
const activeSection = ref('home')

const scrollTo = (id) => {
  window.$lenis?.scrollTo(`#${id}`)
}

const closeMenu = () => {
  toggle.value = false
}

/* Click outside directive */
const vClickOutside = {
  mounted(el, binding) {
    el._clickOutside = (e) => {
      if (!el.contains(e.target)) binding.value()
    }
    document.addEventListener('click', el._clickOutside)
  },
  unmounted(el) {
    document.removeEventListener('click', el._clickOutside)
  }
}
</script>


<style scoped>
/* HEADER */
header {
  position: fixed;
  top: 30px;
  width: 100%;
  z-index: 20;
}

nav .header {
  background: #fff;
  border-radius: 25px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  padding: 10px 0;
}

/* NAV */
.nav-link {
  cursor: pointer;
  font-weight: 600;
}

.nav-link:hover,
.active {
  color: var(--template-main_color);
}

/* DROPDOWN */
.toggleMenu {
  position: fixed;
  top: 155px;
  left: 0;
  right: 0;
  z-index: 30;
}

.dropdown-card {
  background: #fff;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.dropdown-image img {
  height: 100%;
  object-fit: cover;
}

/* LINKS */
.dropdown-links {
  list-style: none;
  padding: 0;
}

.dropdown-links a {
  display: block;
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: 600;
  color: #1a1a1a;
  text-decoration: none;
  transition: 0.3s;
}

.dropdown-links a:hover {
  background: #f5f5f5;
  color: var(--template-main_color);
  padding-left: 16px;
}

/* TRANSITION */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: 0.3s ease;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* RESPONSIVE */
@media (max-width: 991px) {
  header {
    top: 10px;
  }

  .navbar-nav {
    flex-direction: column;
    align-items: center;
  }

  .toggleMenu {
    top: 85px;
    padding: 0 12px;
    max-height: calc(100vh - 100px);
    overflow-y: auto;
  }

  .dropdown-image {
    display: none;
  }
}
</style>
