<template>
  <div class="bao-input">
    <label v-if="label" class="bao-input__label">{{ label }}</label>
    <input
      :class="inputClasses"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
      :value="modelValue"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <span v-if="error" class="bao-input__error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { InputProps, InputEvents } from '../types'

const props = withDefaults(defineProps<InputProps & { label?: string }>(), {
  type: 'text',
  disabled: false,
  readonly: false,
  required: false
})

const emit = defineEmits<InputEvents>()

const inputClasses = computed(() => [
  'bao-input__field',
  {
    'bao-input__field--disabled': props.disabled,
    'bao-input__field--readonly': props.readonly,
    'bao-input__field--error': props.error
  }
])

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const handleChange = (event: Event) => {
  emit('change', event)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}
</script>

<style scoped>
.bao-input {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.bao-input__label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.bao-input__field {
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  outline: none;
}

.bao-input__field:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.bao-input__field--disabled {
  background-color: #f9fafb;
  cursor: not-allowed;
  opacity: 0.6;
}

.bao-input__field--readonly {
  background-color: #f9fafb;
}

.bao-input__field--error {
  border-color: #ef4444;
}

.bao-input__field--error:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.bao-input__error {
  font-size: 12px;
  color: #ef4444;
}
</style>
