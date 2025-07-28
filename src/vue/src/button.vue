<template>
  <button class="vue-button">
    {{ capitalized }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { capitalize } from '../../core';

const props = defineProps<{ label: string }>();
const capitalized = computed(() => capitalize(props.label));
</script>

<style scoped>
.vue-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.vue-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.vue-button:active {
  transform: translateY(0);
}
</style>