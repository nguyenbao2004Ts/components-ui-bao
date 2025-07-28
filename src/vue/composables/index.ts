import { ref, onMounted, onUnmounted } from "vue";

export function useClickOutside(callback: () => void) {
  const elementRef = ref<HTMLElement>();

  const handleClickOutside = (event: Event) => {
    if (elementRef.value && !elementRef.value.contains(event.target as Node)) {
      callback();
    }
  };

  onMounted(() => {
    document.addEventListener("click", handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
  });

  return elementRef;
}

export function useToggle(initialValue = false) {
  const isToggled = ref(initialValue);

  const toggle = () => {
    isToggled.value = !isToggled.value;
  };

  const setToggle = (value: boolean) => {
    isToggled.value = value;
  };

  return {
    isToggled,
    toggle,
    setToggle,
  };
}

export function useLoading(initialValue = false) {
  const isLoading = ref(initialValue);

  const startLoading = () => {
    isLoading.value = true;
  };

  const stopLoading = () => {
    isLoading.value = false;
  };

  const withLoading = async <T>(asyncFn: () => Promise<T>): Promise<T> => {
    startLoading();
    try {
      return await asyncFn();
    } finally {
      stopLoading();
    }
  };

  return {
    isLoading,
    startLoading,
    stopLoading,
    withLoading,
  };
}
