<template>
  <main>

    <Navbar />

    <section ref="homeSection">
      <Hero :is-visible="visibilityMap['home'] ?? false" id="home" />
    </section>

    <section ref="experienceSection">
      <Experience :is-visible="visibilityMap['experience'] ?? false" id="experience" />
    </section>

    <section ref="projectsSection">
      <Projects :is-visible="visibilityMap['projects'] ?? false" id="projects" />
    </section>

    <section ref="toolsSection">
      <Tools :is-visible="visibilityMap['tools'] ?? false" id="tools" />
    </section>

    <section ref="contactSection">
      <Contact :is-visible="visibilityMap['contact'] ?? false" id="contact" />
    </section>
      
  </main>
</template>

<script setup>
  import { ref, onMounted, nextTick } from 'vue';
  import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

  import Hero from '@/components/Hero.vue';
  import Experience from '@/components/Experience.vue';
  import Projects from '@/components/Projects.vue';
  import Contact from '@/components/Contact.vue';
  import Navbar from '@/components/Navbar.vue';
  import Tools from '@/components/Tools.vue';

  const { visibilityMap, observeElement } = useIntersectionObserver();

  const homeSection = ref(null);
  const experienceSection = ref(null);
  const projectsSection = ref(null);
  const contactSection = ref(null);
  const toolsSection = ref(null);
  
  onMounted(async () => {
    // Wait until DOM updates
    await nextTick();

    observeElement(homeSection.value, 'home');
    observeElement(experienceSection.value, 'experience');
    observeElement(projectsSection.value, 'projects');
    observeElement(contactSection.value, 'contact');
    observeElement(toolsSection.value, 'tools');
  });
</script>
