

<template>
    <nav class="sticky top-0 bg-blakish relative px-6 py-6 flex justify-between items-center z-10">
		<ul class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex mx-auto items-center space-x-6">
			<li @click="scrollToHome" class="text-sm text-gray-100 navi">
                Home
            </li>
			<li @click="scrollToExperience" class="text-sm text-gray-100 navi">
                Experience
            </li>
			<li @click="scrollToProjects" class="text-sm text-gray-100 navi">
                Projects
            </li>
			<li @click="scrollToTools" class="text-sm text-gray-100 navi">
                Tools
            </li>
			<li @click="scrollToContact" class="text-sm text-gray-100 navi">
                Contact
            </li>
		</ul>
	</nav>
</template>

<script setup>
	import { ref, onMounted } from 'vue';

	const scrollToHome = () => {
	emit('scrollToSection', $refs.homeSection);
	};

	const scrollToExperience = () => {
	emit('scrollToSection', $refs.experienceSection);
	};

	const scrollToProjects = () => {
	emit('scrollToSection', $refs.projectsSection);
	};

	const scrollToTools = () => {
	emit('scrollToSection', $refs.toolsSection);
	};

	const scrollToContact = () => {
	emit('scrollToSection', $refs.contactSection);
	};
	
</script>

<style scoped>

	.bg-image {
		background-image: url("../assets/background.png");
	}
	
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
