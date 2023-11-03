<template>
  <div class="d-flex justify-content-center h-100">
    <PButton @click="handleSubmit" label="Submit" icon="pi pi-check" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)

function handleSubmit() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  })
}
</script>
