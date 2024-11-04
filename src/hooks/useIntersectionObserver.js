import { ref } from 'vue';

export function useIntersectionObserver() {

    const visibilityMap = ref({});
    const observeElement = (element, id) => {
        if (!element) return;

        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                visibilityMap.value[id] = true; // Mark as visible
            } else {
                // Reset visibility when not visible
                visibilityMap.value[id] = false; // Mark as not visible
            }
        });
        }, { threshold: 0.1 });
        observer.observe(element);
    };

  return { visibilityMap, observeElement };
}