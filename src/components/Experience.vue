<template>
  <div class="bg-white pt-12">
    <div class="text-center mx-auto lg:mb-4 max-w-[510px]">
        <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        <span class="inline-block text-green-600 pt-12">Experience()</span>
        </h2>
    </div>
    <div class="max-w-xl mx-auto p-8">
      <div class="flow-root">
        <ul class="-mb-8">

          <li v-for="experience in experiences" :key="experience.id">
            <div class="relative pb-8">
              <span class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"></span>
              <div class="relative flex items-start space-x-3">
                <div>
                  <div class="relative px-1">
                    <div class="h-8 w-8 bg-green-500 rounded-full ring-8 ring-white flex items-center justify-center">
                      <span class="animate-ping h-full w-full rounded-full bg-red-400 opacity-50"></span>
                    </div>
                  </div>
                </div>
                <div class="min-w-0 flex-1 py-0">
                  <div class="text-md text-gray-500">
                    <div>
                      <span class="font-medium text-gray-900 mr-2">{{ experience.title }}</span>
                    </div>
                    <div>
                      <span class="text-gray-900 mr-2">{{ experience.company }}</span>
                    </div>
                    <span class="whitespace-nowrap text-sm">{{ experience.date }}</span>
                  </div>
                  <div class="mt-2 text-gray-700">
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
import { ref } from 'vue';

const experiences = ref([
        {
          id: 1,
          title: 'Software Engineer',
          company: 'HiPe Inc.',
          description: 'Applied engineering principles and knowledge of programming languages to build software solutions for end users.',
          date: 'June 2024 – Present'
        },
        {
          id: 2,
          title: 'Backend Developer',
          company: 'Petnet Inc.',
          description: 'Developed and maintained RESTful APIs, microservices, and backend services using Laravel and Lumen frameworks.',
          date: 'April 2022 – June 2024'
        },
        {
          id: 3,
          title: 'Instrumentation and Control Engineer 3',
          company: 'Chiyoda Philippines Corporation',
          description: 'Expedited construction, instrument, and system design deliverables.',
          date: 'September 2018 – April 2022'
        }
      ]);

</script>