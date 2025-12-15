<template>
  <div v-if="showModal" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <img :src="logoImage" alt="Oia Properties Logo" class="logo" />
        <button class="close-btn" @click="closeModal">&times;</button>
      </div>
      <div class="modal-body">
        <h2 class="title">Register Your Interest</h2>
        <p class="subtitle">Secure early access to luxury off-plan residences on Abu Dhabi's newest residential island community.</p>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Full Name</label>
            <div class="input-wrapper">
              <input type="text" id="name" v-model="form.name" placeholder="Enter your full name" required>
              <span class="icon">👤</span>
            </div>
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <div class="input-wrapper">
              <input type="email" id="email" v-model="form.email" placeholder="Enter your email" required>
              <span class="icon">📧</span>
            </div>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <div class="input-wrapper">
              <input type="password" id="password" v-model="form.password" placeholder="Create a password" required>
              <span class="icon">🔒</span>
            </div>
          </div>
          <button type="submit" class="submit-btn">Register Now</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import logoImage from '@/assets/images/logo.webp';

export default {
  name: "RegisterPopup",
  data() {
    return {
      showModal: true,
      form: {
        name: '',
        email: '',
        password: ''
      },
      logoImage
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
      this.$emit('close');
    },
    handleSubmit() {
      console.log('Registering:', this.form);
      this.closeModal();
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--template-main_color), rgba(0, 0, 0, 0.6));
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
  border-radius: 20px;
  padding: 30px;
  max-width: 450px;
  width: 90%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.4s ease-out;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

@keyframes slideIn {
  from {
    transform: translateY(-60px) scale(0.9);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

.modal-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
}

.logo {
  width: 120px;
  height: auto;
}

.close-btn {
  position: absolute;
  top: -10px;
  right: -10px;
  background: var(--template-main_color);
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.close-btn:hover {
  background: #ff3742;
}

.title {
  text-align: center;
    color: #2c3e50;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.subtitle {
  text-align: center;
  color: #7f8c8d;
  font-size: 14px;
  margin-bottom: 30px;
  line-height: 1.5;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: var(--template-main_color);
  font-weight: 600;
}

.input-wrapper {
  position: relative;
}

.input-wrapper input {
  width: 100%;
  padding: 12px 40px 12px 15px;
  border: 2px solid #e1e8ed;
  border-radius: 10px;
  font-size: 16px;
  transition: border-color 0.3s, box-shadow 0.3s;
  background: #fafbfc;
}

.input-wrapper input:focus {
  border-color: var(--template-main_color);
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  outline: none;
}

.input-wrapper .icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
}

.submit-btn {
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, var(--template-main_color), var(--template-main_color));
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
}

.submit-btn:active {
  transform: translateY(0);
}
</style>