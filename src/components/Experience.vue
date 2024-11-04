<template>
  <div class="bg-white sm:pt-44">
    <div class="text-center mx-auto lg:mb-4 max-w-[510px]">
        <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          <span :class="['inline-block text-green-600 pt-12', isVisible ? 'animate-fadeinbounceleft' : '']">Experience()</span>
        </h2>
    </div>
    <div class="max-w-xl mx-auto p-8">
      <div class="flow-root">
        <ul class="-mb-8">

          <li v-for="(experience, index) in experiences" :key="experience.id">
            <div class='relative pb-8'>
              <span :class="['absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200', visibilityMap[index] ? `animate-fadeinbounceup animation-delay-${index * 1000}` : '']"></span>
              <div class="relative flex items-start space-x-3">
                <div>
                  <div :class="['relative px-1 opacity-0', visibilityMap[index] ? `animate-fadeinbounceup animation-delay-${index * 1000}` : '']">
                    <div class="h-8 w-8 bg-green-500 rounded-full ring-8 ring-white flex items-center justify-center">
                      <span class="animate-ping h-full w-full rounded-full bg-red-400 opacity-50"></span>
                    </div>
                  </div>
                </div>
                <div class='min-w-0 flex-1 py-0'>
                  <div :class="['text-md text-gray-500 ', visibilityMap[index] ? `animate-fadeinbounceup` : '']" ref="experienceRefs"
                    >
                    <div>
                      <span class="font-medium text-gray-900 mr-2">{{ experience.title }}</span>
                    </div>
                    <div>
                      <span class="text-gray-900 mr-2">{{ experience.company }}</span>
                    </div>
                    <span class="whitespace-nowrap text-sm">{{ experience.date }}</span>
                  </div>
                  <div :class="['mt-2 text-gray-700 opacity-0', visibilityMap[index] ? `animate-fadeinbounceup` : '']" 
                    :style="{ animationDelay: `${(index + 1) * 200}ms` }">
                      {{ experience.description }}
                  </div>
                </div>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>

  </div>
    
</template>

<script setup>
  import { ref, defineProps, onMounted, nextTick } from 'vue';
  import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
  import experiencesData from '@/assets/data/experiences.json';

  const props = defineProps({
    isVisible: Boolean
  });

  const experiences = ref(experiencesData.reverse());
  const experienceRefs = ref([]);
  const { visibilityMap, observeElement } = useIntersectionObserver();

  onMounted(async () => {
    await nextTick();
    experienceRefs.value.forEach((el, index) => {
      observeElement(el, index);
    });
  });
</script>