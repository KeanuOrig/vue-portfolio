<template>
  <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-50">
    <div class="relative bg-white p-8 max-w-sm w-full rounded-xl overflow-hidden shadow-lg crumpled-modal font-paper">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">{{ title }}</h2>
      <p class="text-gray-700 mb-6" v-html="formattedMessage"></p>
      <div class="flex justify-end space-x-4">
        <button @click="confirmAction" class="px-5 py-2 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition">
          Yes
        </button>
        <button @click="closeModal" class="px-5 py-2 bg-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-400 transition">
          No
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps, defineEmits, computed } from 'vue';

  const props = defineProps({
    isVisible: Boolean,
    title: {
      type: String,
      default: "Confirmation"
    },
    message: String
  });

  const emit = defineEmits(["confirm", "close"]);
  const formattedMessage = computed(() => props.message.replace(/\n/g, "<br>"));

  function confirmAction() {
    emit("confirm");
  }

  function closeModal() {
    emit("close");
  }
</script>

<style scoped>
.crumpled-modal {
  background-image: url("@/assets/paper_modal.jpg");
  box-shadow: inset 0px 8px 16px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.1); /* Paper depth and crumple effect */
  border-radius: 12px;
}

.crumpled-modal::before {
  content: '';
  position: absolute;
  top: -6px;
  left: -6px;
  right: -6px;
  bottom: -6px;
  background: inherit;
  filter: blur(4px); /* Optional blur to enhance paper edges */
  z-index: -1;
}
</style>