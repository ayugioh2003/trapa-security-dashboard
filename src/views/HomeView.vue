<script setup>
import AIndex from '@/components/action/AIndex.vue'
import Tindex from '../components/tickets/Tindex.vue'
</script>

<template>
  <main class="px-2 flex h-screen pt-5">
    <AIndex class="w-1/2" />
    <Tindex class="w-1/2" />
  </main>
</template>

<style lang="scss" scoped>
main {
  min-height: 100vh;
}
</style>
