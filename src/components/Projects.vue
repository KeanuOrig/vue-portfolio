<template>
   <section class="max-w-6xl m-auto pt-20 lg:pt-[120px]">
      <div class="container">

         <div class="text-center mx-auto lg:mb-4 max-w-[510px]">
            <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            <span class="inline-block text-green-600">Projects()</span>
            </h2>
         </div>

         <div class="flex flex-wrap">

            <div v-for="project in projects" :key="project.id" class="w-full md:w-1/2 lg:w-1/3">
               <div class="px-10 pt-10 pb-4 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">

                  <div 
                     class="w-[300px] h-[300px] mx-auto flex items-center justify-center bg-primary rounded-2xl mb-8" 
                     :style="{
                        'background-image': 'url(' + project.image + ')',
                        'background-size': 'cover',
                        'background-repeat': 'no-repeat',
                        'background-position': 'center'
                     }"
                  ></div>

                  <h4 class="font-semibold text-xl text-dark mb-3">
                     {{ project.title }}
                     <span class="text-sm text-gray-500"> @ {{ project.date }} </span>
                  </h4>
                  
                  <p class="text-body-color">
                     {{ project.description }}
                  </p>
                  <div v-if=project.link class="text-right -mx-4">
                     <div class="inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm">
                       <div class="absolute flex-shrink-0 flex items-center justify-center">
                         <span class="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                       </div>
                       <a :href=project.link target="_blank" class="ml-3.5 font-medium text-gray-900">Link</a>
                     </div>
                  </div>

                  <div v-else class="text-right -mx-4 pt-4">
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
         
      </div>
   </section>
</template>

<script setup>
import { ref } from 'vue';
import p0 from '@/assets/p0.jpg';
import ai from '@/assets/ai.gif';
import p4 from '@/assets/p4.png';   
import p5 from '@/assets/p5.png';
import react from '@/assets/react.gif';
import p7 from '@/assets/p7.jpg';

const projects = ref([
        {
          id: 1,
          title: 'Hotel Property Management System (PMS)',
          image: p0,
          link: null,
          description: 'Developed a Full Stack Laravel web application for a Japanese client managing multiple hotels, featuring reservation management, payments, orders, third-party API integrations, and more.',
          date: '2024'
        },
        {
          id: 2,
          title: 'FAQ System',
          image: ai,
          link: 'https://devpost.com/software/ai-faq-system?fbclid=IwZXh0bgNhZW0CMTAAAR2XFmppa3tEDfsoXM9bpKzKVCxCtJGANBRRUZRf_0aOfmlp9qgRtYcSW4o_aem_AdIjxseggletwljFfo7QQf-6pJ0TKwHpC_1eDioKanGcSPoBQF-vWs_VxNhFP56TyjCgg4mPSFr1o7lwjZBht574',
          description: 'Google AI hackathon entry. A project utilizing Google Gemini AI, empowering users with AI-Powered answers.',
          date: '2024'
        },
        {
          id: 3,
          title: 'Web Treasury System',
          image: p0,
          link: null,
          description: 'Contributed to a team effort to automate the web treasury system, leveraging technologies like Laravel and Google Cloud Scheduler.',
          date: '2023'
        },
        {
          id: 4,
          title: 'Pera Remit System',
          image: p0,
          link: null,
          description: 'Led the development efforts to create a comprehensive partner system utilizing technologies such as Lumen and Vue.js.',
          date: '2023'
        },
        {
          id: 5,
          title: 'Responsive Landing Page',
          image: p4,
          link: 'https://github.com/KeanuOrig/LandingPageEcommerce',
          description: 'A responsive and animated landing page for a website showcasing my skills in HTML, CSS, GSAP, and Javascript.',
          date: '2022'
        },
        {
          id: 6,
          title: 'Movie Review Application',
          image: p5,
          link: 'https://github.com/KeanuOrig/MovieApp',
          description: 'A CRUD application. Built the Front End using React.js while utilizing Redux for application state management. Designed the Back End using Node.js and Express.js for handling HTTP requests and used MySQL for the database.',
          date: '2022'
        },
        {
          id: 7,
          title: 'Ecommerce Application',
          image: react,
          link: 'https://cs3-ecommerce-ecru.vercel.app/',
          description: `This is a capstone project under Zuitt's Fullstack Development bootcamp. It is a responsive ecommerce website using the MERN stack.`,
          date: '2021'
        },
        {
          id: 8,
          title: 'Oil and Gas Plant Model',
          image: p7,
          link: null,
          description: 'Utilized SP3D and Autocad software for GPX and GYO project. Also part of the development team for creating software solutions to expedite construction and instrument deliverables.',
          date: '2018-2022'
        },
        
      ]);

</script>
