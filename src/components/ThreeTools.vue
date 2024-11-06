<template>
   <TresCanvas>
      <TresPerspectiveCamera :position="[0, 0, 5]" :args="[100]"/> <!-- 50 lg mobile 60 -->
      <OrbitControls />
      <Suspense>
         <!-- Carousel Component -->
         <TresGroup ref="carouselRef" v-on:beforeRender="rotateCarousel">
            <template v-for="(card, index) in cards" :key="index">
            <TresMesh :position="card.position" :rotation="card.rotation">
               <TresPlaneGeometry :args="[1, 1.5]" />
               <TresMeshBasicMaterial v-if="card.texture" :map="card.texture.map" :aoMap="card.texture.map" :specularMap="card.texture.map"  :opacity="1"   />
            </TresMesh>
            </template>
         </TresGroup>
         <template #fallback>
            <div>Loading 3D textures...</div>
          </template>
      </Suspense>
   </TresCanvas>
 </template>


<script setup>
import { ref, onMounted } from 'vue'
import { TresCanvas, useRenderLoop, useTexture } from '@tresjs/core'
import OrbitControls from './Three/OrbitControls.vue'
import * as THREE from 'three'

const props = defineProps({
   toolsData: {
      type: Array,
      required: true
   }
});

const carouselRef = ref(null)
const cards = ref([]);

// Load textures asynchronously
const loadTextures = async () => {
   const textures = await Promise.all(
      props.toolsData.map(tool => {
         return useTexture({ map: tool.image });
      })
   );

// Carousel setup 
const radius = 4
cards.value = textures.map((texture, i) => ({
    position: [
      Math.sin((i / textures.length) * Math.PI * 2) * radius,
      0,
      Math.cos((i / textures.length) * Math.PI * 2) * radius
    ],
    rotation: [0, (i / textures.length) * Math.PI * 2, 0],
    color: new THREE.Color(`hsl(${(1 / textures.length) * 360}, 10%, 70%)`),
    texture: texture
  }));

};

onMounted(loadTextures);

// Rotate the carousel group
const { onBeforeLoop } = useRenderLoop()

onBeforeLoop(({ delta }) => {
  if (carouselRef.value) {
    // Adjust rotation speed by modifying multiplier
    carouselRef.value.rotation.y += delta * 0.1
  }
})
</script>