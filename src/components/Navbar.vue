

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
		</ul>
	</nav>
</template>

<script setup>

	const scrollTo = (view) => {
		const el = document.getElementById(view);
		el.scrollIntoView({behavior: "smooth"});
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
