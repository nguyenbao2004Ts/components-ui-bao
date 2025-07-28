<template>
  <button 
    :class="buttonClasses" 
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="bao-button__loading">⏳</span>
    <slot v-else>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { capitalize } from '../../core'
import type { ButtonProps, ButtonEvents } from '../types'

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
  block: false
})

const emit = defineEmits<ButtonEvents>()

const buttonClasses = computed(() => [
  'bao-button',
  `bao-button--${props.variant}`,
  `bao-button--${props.size}`,
  {
    'bao-button--disabled': props.disabled,
    'bao-button--loading': props.loading,
    'bao-button--block': props.block
  }
])

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
.bao-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  outline: none;
  box-sizing: border-box;
}

/* Variants */
.bao-button--primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.bao-button--secondary {
  background: #f8f9fa;
  color: #495057;
  border: 1px solid #dee2e6;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.bao-button--danger {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
}

.bao-button--success {
  background: linear-gradient(135deg, #51cf66 0%, #40c057 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(81, 207, 102, 0.4);
}

.bao-button--warning {
  background: linear-gradient(135deg, #ffd43b 0%, #fab005 100%);
  color: #495057;
  box-shadow: 0 4px 15px rgba(255, 212, 59, 0.4);
}

/* Sizes */
.bao-button--small {
  padding: 8px 16px;
  font-size: 14px;
  min-height: 32px;
}

.bao-button--medium {
  padding: 12px 24px;
  font-size: 16px;
  min-height: 40px;
}

.bao-button--large {
  padding: 16px 32px;
  font-size: 18px;
  min-height: 48px;
}

/* States */
.bao-button:hover:not(.bao-button--disabled):not(.bao-button--loading) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.bao-button:active:not(.bao-button--disabled):not(.bao-button--loading) {
  transform: translateY(0);
}

.bao-button--disabled,
.bao-button--loading {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

.bao-button--block {
  width: 100%;
}

.bao-button__loading {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
