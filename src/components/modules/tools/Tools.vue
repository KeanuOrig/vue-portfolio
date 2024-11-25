<template>
   <div class="text-center mx-auto lg:mb-4 h-screen pt-20">
      <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
         <span :class="['inline-block text-green-600 pt-12', isVisible ? 'animate-fadeinbounceleft' : '']">Tools()</span>
      </h2>
      
      <Suspense>
         <ThreeTools :toolsData="toolsData"/>
         <template #fallback>
            <span class="loader"></span>
         </template>
      </Suspense>

   </div>
</template>

<script setup>
   /* import ThreeTools from './ThreeTools.vue'; */
   import { ref, onMounted } from 'vue';
   import toolsData from '@/assets/data/tools.json';

   const props = defineProps({
      isVisible: Boolean
   });

   const ThreeTools = ref(null);

   onMounted(async () => {
      ThreeTools.value = (await import('./ThreeTools.vue')).default;
   });
</script>