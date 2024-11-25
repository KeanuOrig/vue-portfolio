<template>
  <div>
    <div class="relative max-w-full">
      <img
        :src="src"
        :alt="alt"
        ref="img"
        @load="loaded"
        :class="classImage"
      />
      <div
        class="absolute inset-0 bg-gray-300 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shiny"
        :class="[isLoaded ? 'hidden' : '', classPlaceholder]"
        aria-hidden="true"
        ref="placeholder"
        :style="{ height: `${placeholderHeight.value}px` }"
      >
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

  const props = defineProps({
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    classImage: {
      type: String,
      default: '',
    },
    classPlaceholder: {
      type: String,
      default: '',
    },
  });

  const img = ref(null);
  const placeholder = ref(null);

  const isLoaded = ref(false);
  const loadedAspectRatio = ref(null);
  const clientWidth = ref(0);

  const loaded = () => {
    isLoaded.value = true;
  };

  const updateClientWidth = () => {
    clientWidth.value = placeholder.value.clientWidth;
  };

  const placeholderHeight = computed(() => {
    if (!loadedAspectRatio.value) {
      return 0;
    }
    return clientWidth.value / loadedAspectRatio.value;
  });

  onMounted(() => {
    const sizeInterval = setInterval(() => {
      if (img.value.naturalWidth) {
        clearInterval(sizeInterval);
        loadedAspectRatio.value = img.value.naturalWidth / img.value.naturalHeight;
      }
    }, 10);

    window.addEventListener('resize', updateClientWidth);
    updateClientWidth();
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateClientWidth);
  });
</script>
