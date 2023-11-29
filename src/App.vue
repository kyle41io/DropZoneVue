<script>
import DropZone from "@/components/DropZone.vue";

export default {
  components: {
    DropZone,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div id="app">
    <DropZone />
  </div>
</template>

<style scoped>
#app {
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
