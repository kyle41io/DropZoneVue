<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import DropZone from "@/components/DropZone.vue";
</script>

<template>
  <div id="app">
    <DropZone />
  </div>
</template>

<style scoped>
#app {
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
