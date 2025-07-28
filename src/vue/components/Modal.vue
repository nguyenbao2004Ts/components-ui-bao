<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="bao-modal-overlay" @click="handleMaskClick">
        <div :class="modalClasses" @click.stop>
          <div v-if="title || closable" class="bao-modal__header">
            <h3 v-if="title" class="bao-modal__title">{{ title }}</h3>
            <button 
              v-if="closable" 
              class="bao-modal__close"
              @click="handleClose"
            >
              ✕
            </button>
          </div>
          
          <div class="bao-modal__body">
            <slot />
          </div>
          
          <div v-if="$slots.footer" class="bao-modal__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import type { ModalProps, ModalEvents } from '../types'

const props = withDefaults(defineProps<ModalProps>(), {
  size: 'medium',
  closable: true,
  maskClosable: true
})

const emit = defineEmits<ModalEvents>()

const modalClasses = computed(() => [
  'bao-modal',
  `bao-modal--${props.size}`
])

const handleClose = () => {
  emit('update:modelValue', false)
  emit('close')
}

const handleMaskClick = () => {
  if (props.maskClosable) {
    handleClose()
  }
}

// Prevent body scroll when modal is open
watch(() => props.modelValue, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.bao-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.bao-modal {
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  max-height: 90vh;
  overflow: auto;
}

.bao-modal--small {
  width: 400px;
}

.bao-modal--medium {
  width: 600px;
}

.bao-modal--large {
  width: 800px;
}

.bao-modal--fullscreen {
  width: 95vw;
  height: 95vh;
}

.bao-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #e5e7eb;
}

.bao-modal__title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #111827;
}

.bao-modal__close {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #6b7280;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.bao-modal__close:hover {
  background-color: #f3f4f6;
  color: #374151;
}

.bao-modal__body {
  padding: 24px;
}

.bao-modal__footer {
  padding: 16px 24px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

/* Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bao-modal,
.modal-leave-active .bao-modal {
  transition: transform 0.3s ease;
}

.modal-enter-from .bao-modal,
.modal-leave-to .bao-modal {
  transform: scale(0.9);
}
</style>
