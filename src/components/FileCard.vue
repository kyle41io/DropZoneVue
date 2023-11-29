<script setup>
import IconDelete from "./icons/IconDelete.vue";
</script>

<template>
  <div id="file-card">
    <slot name="file-icon"></slot>
    <div class="file-content">
      <div name="file-props">
        <slot name="file-name"></slot>
        <slot name="file-size"></slot>
      </div>
      <div class="delete" @click="$emit('delete-file')"><IconDelete /></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#file-card {
  width: 244px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid var(--gray-2-gray-06-gray-03, #dcdcdc);
  background: var(--White, #fff);
  padding: 8px;
  display: flex;
  gap: 4px;
  align-items: center;
  .file-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.delete {
  cursor: pointer;
}
</style>
