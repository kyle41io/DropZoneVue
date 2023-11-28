<script setup>
import IconUpload from "./icons/IconUpload.vue";
</script>

<template>
  <div>
    <div class="drag-drop">
      <IconUpload />
      <h2>Drag and drop files</h2>
    </div>
    <div class="preview"></div>
  </div>
</template>
<style scoped>
.drag-drop {
  width: 842px;
  height: 232px;
  flex-shrink: 0;
  border-radius: 7px;
  border: 1px solid #dcdcdc;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h2 {
  color: #333;
  text-align: center;
  font-family: Noto Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 122.222% */
}
</style>
