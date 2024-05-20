<template>
  <main>
    <nav class="sticky top-0 bg-blakish relative px-6 py-6 flex justify-between items-center z-10">
      <ul class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex mx-auto items-center space-x-6">
        <li @click="scrollTo('#home')" class="text-sm text-gray-100 navi">Home</li>
        <li @click="scrollTo('#experience')" class="text-sm text-gray-100 navi">Experience</li>
        <li @click="scrollTo('#projects')" class="text-sm text-gray-100 navi">Projects</li>
        <li @click="scrollTo('#contact')" class="text-sm text-gray-100 navi">Contact</li>
      </ul>
	  </nav>
    <Hero id="home"/>
    <Experience id="experience"/>
    <Projects id="projects"/>
    <Contact id="contact"/>
  </main>
</template>

<script setup>
  import Hero from '../components/Hero.vue'
  import Experience from '../components/Experience.vue'
  import Projects from '../components/Projects.vue'
  import Contact from '../components/Contact.vue'

  const scrollTo = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
</script>

<style scoped>

	.navi {
	color: white;
	}

	.navi:hover{
	color: #00FF00 !important;
	}
	.navi::before{
	content:  "";
	display: block;
	height: 5px;
	width: 0%;
	background-color: #00FF00;
	opacity: 70%;
	transition:  all ease-in-out 250ms;

	}

	.navi:hover::before{
	width: 100%;
	}

</style>

