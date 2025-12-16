<template>
 
        <div class="row">
            <div class="col-12">
                <div id="map" ref="map"></div>
            </div>
        </div>
     
</template>

<script setup>
import { onMounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const map = ref(null)

onMounted(() => {
  const leafletMap = L.map(map.value, {
    zoomControl: true,
    scrollWheelZoom: false
  }).setView([24.4539, 54.3773], 11) // Abu Dhabi

  L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    { attribution: '' }
  ).addTo(leafletMap)

  const locations = [
    { name: 'Fahid Island', lat: 24.5605, lng: 54.3946 },
    { name: 'Yas Island', lat: 24.4942, lng: 54.6070 },
    { name: 'Saadiyat Island', lat: 24.5535, lng: 54.4303 },
    { name: 'Abu Dhabi City', lat: 24.4539, lng: 54.3773 },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708 }
  ]

  locations.forEach(loc => {
    L.marker([loc.lat, loc.lng])
      .addTo(leafletMap)
      .bindPopup(`<strong>${loc.name}</strong>`)
  })
})
</script>

<style scoped>
.map-section {
  margin-bottom: 60px;
}

#map {
  width: 100%;
  height: 320px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);

}

@media (max-width: 768px) {
  #map {
    height: 300px;
  }
}
</style>