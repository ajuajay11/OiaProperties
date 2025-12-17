<template>
  <header>
    <nav class="container px-5 px-lg-0">

      <div class="row header align-items-center d-none d-md-flex" data-aos="fade-down" data-aos-delay="3000">

        <div class="navbar navbar-expand-lg col-lg-4 px-3 justify-content-start">
          <ul class="navbar-nav d-flex gap-3 text-capitalize">
            <li class="nav-item cursor">
              <span class="nav-link d-flex align-items-center gap-1" @click.stop="toggle = !toggle">
                All Pages <i class="bi" :class="toggle ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
              </span>
            </li>

            <li class="nav-item">
              <a href="/#properties" class="nav-link" :class="{ menu_active: activeSection == 'properties' }">
                Properties
              </a>
            </li>

            <li class="nav-item">
              <a href="#faq" class="nav-link" :class="{ menu_active: activeSection === 'faq' }"> Faq </a>
            </li>
          </ul>
        </div>

        <div class="col-lg-4 d-flex justify-content-center">
          <router-link to="/">
            <img src="../../assets/images/logo.webp" alt="logo" width="90" height="90" class="img-fluid" />
          </router-link>
        </div>

        <div class="col-lg-4 d-flex justify-content-end">
          <Button text="Register" @click="showRegister = true" />
        </div>

      </div>

      <div class="row align-items-center d-lg-none py-2 bg-white rounded-4">

        <div class="col-6 d-flex align-items-center">
          <router-link :to="{ name: 'Layouts' }" class="py-2 px-4 rounded-4">
            <img src="../../assets/images/logo.webp" alt="logo" width="70" height="70" class="img-fluid" />
          </router-link>
        </div>

        <div class="col-6 d-flex justify-content-end">
          <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu"
            aria-controls="mobileMenu">
            <i class="bi bi-list clr_one" style="font-size: 26px;"></i>
          </button>
        </div>

      </div>

    </nav>


    <transition name="dropdown">
      <div v-if="toggle" class="toggleMenu" v-click-outside="closeMenu">
        <div class="container">
          <div class="dropdown-card">
            <div class="row g-4">

              <div class="col-md-3 dropdown-image">
                <img src="../../assets/images/toggle.avif" class="img-fluid rounded-3" alt="Preview" />
              </div>

              <div class="col-md-9">
                <div class="row">

                  <div class="col-md-4">
                    <ul class="dropdown-links">
                      <li><a :class="{ menu_active: activeSection == 'home' }" href="#home" @click="closeMenu">Home</a>
                      </li>
                      <li><a href="/services" @click="closeMenu">Services</a></li>
                      <li><a href="/reviews" @click="closeMenu">Reviews</a></li>
                    </ul>
                  </div>

                  <div class="col-md-4">
                    <ul class="dropdown-links">
                      <li><a href="/#properties" :class="{ menu_active: activeSection === 'properties' }"
                          @click="closeMenu">Properties</a></li>
                      <li><a href="/blog" @click="closeMenu">Blog</a></li>
                      <li><a href="/career" @click="closeMenu">Career</a></li>
                    </ul>
                  </div>

                  <div class="col-md-4">
                    <ul class="dropdown-links">
                      <li><a href="/terms" @click="closeMenu">Terms</a></li>
                      <li><a href="/privacy" @click="closeMenu">Privacy</a></li>
                      <li><a href="#faq" @click="closeMenu">FAQ</a></li>
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

  <div class="offcanvas offcanvas-end" tabindex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="mobileMenuLabel">Menu</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body justify-content-center d-flex flex-column">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="/#home" class="nav-link fs_one" :class="{ menu_active: activeSection == 'home' }"
            @click="handleMobileNav('home')">Home</a>
        </li>
        <li class="nav-item">
          <a href="/#about" class="nav-link fs_one" :class="{ menu_active: activeSection == 'about' }"
            @click="handleMobileNav('about')">About</a>
        </li>
        <li class="nav-item">
          <a href="/#properties" class="nav-link fs_one" :class="{ menu_active: activeSection == 'properties' }"
            @click="handleMobileNav('properties')">Properties</a>
        </li>
        <li class="nav-item">
          <a href="/#location" class="nav-link fs_one" :class="{ menu_active: activeSection == 'location' }"
            @click="handleMobileNav('location')">Location</a>
        </li>
        <li class="nav-item">
          <a href="/#faq" class="nav-link fs_one" :class="{ menu_active: activeSection == 'faq' }"
            @click="handleMobileNav('faq')">FAQ</a>
        </li>

      </ul>

      <div class="mt-3 text-center">
        <Button text="Register" @click="showRegister = true" />
      </div>
    </div>
  </div>

  <RegisterPopup v-if="showRegister" @close="showRegister = false" />

</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Button from '../Button.vue'
import RegisterPopup from '../RegisterPopup.vue'

const showRegister = ref(false)
const toggle = ref(false)
const activeSection = ref('home')

let observer = null

const scrollTo = (id) => {
  window.$lenis?.scrollTo(`#${id}`, {
    offset: -130
  })
}

const closeMenu = () => {
  toggle.value = false
}

const handleMobileNav = (id) => {
  const offcanvasEl = document.getElementById('mobileMenu')
  const instance = window.bootstrap?.Offcanvas.getInstance(offcanvasEl)

  if (instance) {
    instance.hide()

    offcanvasEl.addEventListener(
      'hidden.bs.offcanvas',
      () => {
        window.$lenis?.scrollTo(`#${id}`, {
          offset: -130,
          duration: 1.1
        })
      },
      { once: true }
    )
  } else {
    window.$lenis?.scrollTo(`#${id}`, {
      offset: -130,
      duration: 1.1
    })
  }
}

/* 🔥 ACTIVE SECTION TRACKING */
onMounted(() => {
  const sections = document.querySelectorAll(
    '#home, #about, #properties, #location, #faq'
  )

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    {
      root: null,
      threshold: 0.6,
      rootMargin: '-130px 0px -40% 0px' // accounts for fixed header
    }
  )

  sections.forEach((section) => observer.observe(section))
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})

/* CLICK OUTSIDE */
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
header {
  position: fixed;
  top: 30px;
  width: 100%;
  z-index: 9999;
}

nav .header {
  background: #fff;
  border-radius: 25px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  padding: 10px 0;
}

.nav-link {
  cursor: pointer;
  font-weight: 600;
}

.nav-link:hover,
.active {
  color: var(--template-main_color);
}

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
