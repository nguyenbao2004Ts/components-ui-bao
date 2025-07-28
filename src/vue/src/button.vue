<template>
  <button class="bg-green-500 text-white px-4 py-2 rounded">
    {{ capitalized }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { capitalize } from '../../core';

const props = defineProps<{ label: string }>();
const capitalized = computed(() => capitalize(props.label));
</script>
