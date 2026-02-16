<template>
  <Transition name="modal">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/30 dark:bg-black/40 backdrop-blur-sm transition-all duration-300"
      @click.self="closeModal"
    >
      <div
        :class="[
          'relative w-full rounded-lg shadow-xl transition-all duration-300',
          'bg-white dark:bg-gray-800',
          'border border-gray-200 dark:border-gray-700',
          sizeClasses,
        ]"
        @click.stop
      >
        <!-- Header -->
        <div
          class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700"
        >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            <slot name="title">{{ title }}</slot>
          </h3>
          <button
            @click="closeModal"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title="Close"
          >
            <i class="pi pi-times text-gray-500 dark:text-gray-400"></i>
          </button>
        </div>

        <!-- Body -->
        <div class="p-4 overflow-y-auto text-gray-700 dark:text-gray-300" :style="{ maxHeight }">
          <slot></slot>
        </div>

        <!-- Footer -->
        <div
          v-if="$slots.footer"
          class="flex items-center justify-end gap-3 p-4 border-t border-gray-200 dark:border-gray-700"
        >
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    default: 'Modal Title',
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl', 'full'].includes(value),
  },
  maxHeight: {
    type: String,
    default: '70vh',
  },
  closeOnBackdrop: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['update:modelValue', 'close'])

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full mx-4',
  }
  return sizes[props.size]
})

const closeModal = () => {
  if (props.closeOnBackdrop) {
    emit('update:modelValue', false)
    emit('close')
  }
}

// Prevent body scroll when modal is open
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  },
)
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s ease;
}

.modal-enter-from .relative {
  transform: scale(0.9) translateY(-20px);
}

.modal-leave-to .relative {
  transform: scale(0.9) translateY(-20px);
}
</style>
