<template>
   <section class="max-w-6xl m-auto pt-20 lg:pt-[120px]">
      <div class="container">

         <div class="text-center mx-auto lg:mb-4 max-w-[510px]">
            <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            <span :class="['inline-block text-green-600', isVisible ? 'animate-fadeinbounceleft' : '']">Projects()</span>
            </h2>
         </div>

         <div class="flex flex-wrap">

            <div v-for="(project, index) in projectList.slice(0, showCount)" :key="project.id" ref="projectRefs" class="w-full md:w-1/2 lg:w-1/3">
               <div :class="['relative h-[40rem] px-10 pt-10 pb-4 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8 rounded hover:bg-sky-100', 
                  visibilityMap[index] ? 'animate-growonce' : '']"  
                  :style="{ animationDelay: `${(index + 1) * 200}ms` }">

                  <ImageLoadingBox :src="project.image" :alt="project.title" classImage="w-[300px] h-[300px] mx-auto flex items-center justify-center bg-primary rounded-2xl mb-8 object-cover"/>

                  <h4 class="font-semibold text-xl text-dark mb-3">
                     {{ project.title }}
                     <span class="text-sm text-gray-500"> @ {{ project.date }} </span>
                  </h4>
                  
                  <p class="text-body-color text-justify">
                     {{ project.description }}
                  </p>
                  <div v-if=project.link class="absolute bottom-5 right-8 text-right -mx-4 pt-4">
                     <div class="inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                       <div class="absolute flex-shrink-0 flex items-center justify-center">
                         <span class="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                       </div>
                       <a :href=project.link target="_blank" class="ml-3.5 font-medium text-gray-900">Link</a>
                     </div>
                  </div>

                  <div v-else class="absolute bottom-5 right-8 text-right -mx-4 pt-4">
                     <div class="inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                       <div class="absolute flex-shrink-0 flex items-center justify-center">
                         <span class="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                       </div>
                       <a :href=project.link target="_blank" class="ml-3.5 font-medium text-gray-900">Link</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
         <div class="mx-auto text-center mt-8" v-if="projectList.length > defaultCount">
            <button
               v-if="showCount < projectList.length"
               @click="showMore"
               class="inline-block px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-full transition animate-wiggle"
            >
               Show More...
            </button>

            <button
               v-else
               @click="showLess"
               class="inline-block px-6 py-2 text-white bg-gray-600 hover:bg-gray-700 rounded-full transition animate-wiggle"
            >
               Show Less
            </button>
         </div>
      </div>
   </section>
</template>

<script setup>
   import { ref, onMounted, nextTick } from 'vue';
   import projectsData from '@/assets/data/projects.json';
   import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
   import ImageLoadingBox from '../global/ImageLoadingBox.vue';

   const props = defineProps({
   isVisible: Boolean
   });

   const projectList = ref(projectsData.reverse());
   const projectRefs = ref([]);
   const { visibilityMap, observeElement } = useIntersectionObserver();

   const defaultCount = 3;
   const showCount = ref(defaultCount);

   const showMore = () => {
      showCount.value = projectList.value.length;
   };

   const showLess = () => {
      showCount.value = defaultCount;
   };
   onMounted(async () => {
      await nextTick();
      projectRefs.value.forEach((el, index) => {
         observeElement(el, index);
      });
   });
</script>
