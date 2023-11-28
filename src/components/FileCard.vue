<template>
  <div id="file-card">
    <slot name="file-icon"></slot>
    <div class="file-content">
      <slot name="file-props"></slot>
      <IconDelete />
    </div>
  </div>
</template>

<script setup>
import IconDelete from "./icons/IconDelete.vue";
</script>

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
  gap: 12px;
  align-items: center;
  .file-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
