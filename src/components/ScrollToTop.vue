<template>
  <div class="scroll-to-top" @click="scrollToTop">
    <span class="tooltip">Scroll to Top</span>
    <span class="icon">
      <svg viewBox="0 0 16 16" class="bi bi-chevron-double-up" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" fill-rule="evenodd"></path>
        <path d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" fill-rule="evenodd"></path>
      </svg>
    </span>
  </div>
</template>

<script setup>
const scrollToTop = () => {
  window.lenis?.scrollTo(0);
};
const uptohundered=false;

</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  border: 0.5px solid var(--template-main_color);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 1000;
}

.scroll-to-top:hover {
  transform: translateY(-5px);
  border: 2px solid var(--template-main_color);
  background: var(--template-main_color) !important;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.2);
}

.tooltip {
  position: absolute;
  bottom: 60px;
  right: 0;
  font-size: 14px;
  background: #fff;
  color: #333;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  white-space: nowrap;
}

.tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background: #fff;
  top: 100%;
  right: 10px;
  transform: translateX(50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.scroll-to-top:hover .tooltip {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.icon svg {
  fill: green;
  transition: fill 0.3s;
}

.scroll-to-top:hover .icon svg {
  fill: white;
}

.scroll-to-top:hover {
  background: #222;
}
</style>