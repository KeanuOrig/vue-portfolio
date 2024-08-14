<template>
    <div class="pt-12"> 
        <div class="text-center mx-auto lg:mb-4 max-w-[510px]">
            <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            <span class="inline-block text-green-600 pt-12">Contact()</span>
            </h2>
        </div>

        <div class="sm:h-screen bg-image relative items-top justify-center pt-20 lg:pt-[120px] bg-white dark:bg-gray-900 sm:items-center">
            <div class="pb-64 sm:pb-0 max-w-6xl lg:max-w-screen-xl m-auto mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <div class="p-6 bg-blue-600 dark:bg-gray-800 sm:rounded-lg">
                            <h1 class="text-4xl sm:text-5xl text-gray-100 dark:text-white font-extrabold tracking-tight">
                                Get in touch
                            </h1>
                            <p class="text-normal text-lg sm:text-2xl font-medium text-gray-200 dark:text-gray-400 mt-2">
                                Fill in the form to start a conversation
                            </p>

                            <div class="ml-2 mt-8 text-white space-x-12">
                                <a target="_blank" href="https://www.facebook.com/iBellowinAgony">
                                    <fa :icon="['fab', 'facebook']" beat size="lg"/>
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/in/keanu-john-orig-12086163">
                                    <fa :icon="['fab', 'linkedin']" beat size="lg"/>
                                </a>
                                <a target="_blank" href="https://www.instagram.com/keanuorig/">
                                    <fa :icon="['fab', 'instagram']" beat size="lg"/>
                                </a>
                                <a target="_blank" href="https://github.com/KeanuOrig/">
                                    <fa :icon="['fab', 'github']" beat size="lg"/>
                                </a>
                            </div>
                            
                            <div class="ml-2 flex items-center mt-8 text-gray-200 dark:text-gray-400">
                                <fa :icon="['fas', 'location-dot']" beat size="lg"/>
                                <div class="ml-4 text-md tracking-wide font-semibold w-50">
                                    Mandaluyong, Philippines
                                </div>
                            </div>

                            <div class="ml-2 flex items-center mt-4 text-gray-200 dark:text-gray-400">
                                <fa :icon="['fas', 'phone']" beat size="lg"/>
                                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                    +63 917-4513-413
                                </div>
                            </div>

                            <div class="ml-2 flex items-center mt-4 text-gray-200 dark:text-gray-400">
                                <fa :icon="['fas', 'envelope']" beat size="lg"/>
                                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                    keanujohnorig@gmail.com
                                </div>
                            </div>
                        </div>

                        <form ref="form" @submit.prevent="sendEmail" class="p-6 flex flex-col justify-center">
                            <div v-if="successMessage" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-5" role="alert">
                                <strong class="font-bold">Success! </strong>
                                <span class="block sm:inline">{{ successMessage }}</span>
                            </div>

                            <div v-if="warningMessage" class="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mb-5" role="alert">
                                <strong class="font-bold">Warning! </strong>
                                <span class="block sm:inline">{{ warningMessage }}</span>
                            </div>

                            <div v-if="errorMessage" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-5" role="alert">
                                <strong class="font-bold">Success! </strong>
                                <span class="block sm:inline">{{ errorMessage }}</span>
                            </div>

                            <label>Name</label>
                            <input type="text" 
                                name="user_name" 
                                v-model="form.user_name"
                                class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                            >

                            <label>Email</label>
                            <input type="email" 
                                name="user_email" 
                                v-model="form.user_email"
                                class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none">
                            
                            <label>Message</label>
                            <textarea 
                                type="text" 
                                name="message" 
                                v-model="form.message"
                                class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"></textarea>
                            
                            <div v-if="isLoading" class="md:w-32 bg-green-600 hover:bg-green text-white font-bold py-3 px-6 rounded-lg mt-3 flex justify-center items-center">
                                <img class="w-20 h-6 justify-center animate-spin" src="https://www.svgrepo.com/show/70469/loading.svg" alt="Loading icon">
                            </div>

                            <input v-else type="submit" value="Send" class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">

                        </form>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-2 left-0 right-0 text-center text-white text-sm">
                © Created and Designed by Keanu John Orig 2024
            </div>
        </div>
    </div>
</template>

<script>
    import emailjs from '@emailjs/browser';
    
    export default {
    data() {
        return {
            form: {
                user_name: '',
                user_email: '',
                message: '',
            },
            isLoading: false,
            successMessage: '',
            errorMessage: '',
            warningMessage: ''
        };
    },
    methods: {
        
        sendEmail() {
            this.isLoading = true;
            this.successMessage = '';
            this.errorMessage = '';
            this.warningMessage = '';
            
            if (!this.form.user_name || !this.form.user_email || !this.form.message) {
                this.warningMessage = 'All fields are required.';
                this.isLoading = false;
                return;
            }

            emailjs
                .sendForm('service_32zs0io', 'template_ge9dx6v', this.$refs.form, {
                publicKey: 'WNq712M0mKK5MURyY',
                })
                .then(
                () => {
                    console.log('sent')
                    this.successMessage = 'Email sent successfully!';
                    this.errorMessage = ''; // Clear error message if any
                    this.warningMessage = '';
                    this.isLoading = false;
                },
                (error) => {
                    this.errorMessage = `Error sending email: ${error.text}`;
                    this.successMessage = ''; // Clear success message if any
                    this.warningMessage = '';
                    this.isLoading = false;
                },
            );
        },
    },
    };
</script>

<style scoped>

  .bg-image {
    background-image: url("../assets/footer.png");
    background-size: cover;
  }
  
</style>