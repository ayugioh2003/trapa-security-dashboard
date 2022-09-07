<script setup>
import AIndex from '@/components/action/AIndex.vue'
import TIndex from '../components/tickets/TIndex.vue'
</script>

<template>
  <main class="px-3 flex h-screen pt-5">
    <AIndex class="w-2/5" />
    <TIndex class="w-3/5" />
  </main>
</template>

<style lang="scss" scoped>
main {
  min-height: 100vh;
}
</style>
