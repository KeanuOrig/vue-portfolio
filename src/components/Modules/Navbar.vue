

<template>
    <nav class="sticky top-0 bg-blakish relative px-6 py-6 flex justify-between items-center z-10">
		<ul class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex mx-auto items-center space-x-6">
			<li @click="scrollTo('home')" class="text-sm text-gray-100 navi cursor-pointer">
                Home
            </li>
			<li @click="scrollTo('experience')" class="text-sm text-gray-100 navi cursor-pointer">
                Experience
            </li>
			<li @click="scrollTo('projects')" class="text-sm text-gray-100 navi cursor-pointer">
                Projects
            </li>
			<li @click="scrollTo('tools')" class="text-sm text-gray-100 navi cursor-pointer">
                Tools
            </li>
			<li @click="scrollTo('contact')" class="text-sm text-gray-100 navi cursor-pointer">
                Contact
            </li>
			<li class="text-sm text-gray-100 navi cursor-pointer">
                <a href="#" @click.prevent="showModal = true">3D</a>
            </li>
		</ul>
	</nav>

	<ConfirmModal
		:is-visible="showModal"
		title="Redirect Confirmation"
		:message=message
		@confirm="handleConfirm"
		@close="showModal = false"
	/>

</template>

<script setup>
	import { ref } from 'vue';
	import ConfirmModal from '@/components/Global/ConfirmModal.vue';

	const showModal = ref(false);
	const message = `Please note that my 3D portfolio is currently under construction.<br><br>You are about to be redirected to a different site. Would you like to continue?`;

	const scrollTo = (view) => {
		const el = document.getElementById(view);
		el.scrollIntoView({behavior: "smooth"});
	};
	
	function handleConfirm() {
		console.log("test")
		showModal.value = false;
		window.location.href = "https://portfolio-orig-3d.vercel.app/";
	}

</script>

<style scoped>

	.bg-image {
		background-image: url("@/assets/background.png");
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
