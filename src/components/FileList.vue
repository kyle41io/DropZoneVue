<script>
import IconNext from "@/components/icons/IconNext.vue";
import IconDefault from "@/components/icons/IconDefault.vue";
import IconWord from "@/components/icons/IconWord.vue";
import IconExcel from "@/components/icons/IconExcel.vue";
import IconPdf from "@/components/icons/IconPdf.vue";
import FileCard from "@/components/FileCard.vue";

export default {
  props: {
    files: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return { slide: 0 };
  },
  components: {
    IconNext,
    IconDefault,
    IconWord,
    IconExcel,
    IconPdf,
    FileCard,
  },
  methods: {
    prevSlide() {
      if (this.slide > 0) {
        this.slide--;
      }
    },
    nextSlide() {
      if (this.slide < this.files.length - 3) {
        this.slide++;
      }
    },
    deleteFile(index) {
      this.files.splice(index, 1);
    },
  },
};
</script>
<template>
  <div class="preview">
    <div
      v-if="files.length > 3"
      class="prev"
      @click="prevSlide"
      :class="{ disabled: slide <= 0 }"
    >
      <IconNext />
    </div>
    <div class="file-list">
      <div
        class="file"
        :style="{ transform: 'translateX(' + slide * -256 + 'px)' }"
        v-for="(file, index) in files"
        :key="index"
      >
        <FileCard @delete-file="deleteFile(index)">
          <template #file-icon>
            <IconWord v-if="file.type === 'doc' || file.type === 'docx'" />
            <IconExcel
              v-else-if="file.type === 'xlsx' || file.type === 'xls'"
            />
            <IconPdf v-else-if="file.type === 'pdf'" />
            <IconDefault v-else />
          </template>
          <template #file-name>
            <div class="file-name">{{ file.name }}</div>
          </template>
          <template #file-size>
            <div class="file-size">{{ file.size }}</div>
          </template>
        </FileCard>
      </div>
    </div>

    <div
      v-if="files.length > 3"
      class="next"
      @click="nextSlide"
      :class="{ disabled: slide >= files.length - 3 }"
    >
      <IconNext />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.preview {
  height: 50px;
  width: 842px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  .prev {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    background: #627d98;
    border-radius: 32px;
    transform: rotate(180deg);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: #4284c7;
    }
    &.disabled {
      opacity: 0.5;
      cursor: default;
      pointer-events: none;
    }
  }

  .file-list {
    width: 100%;
    display: flex;
    gap: 12px;
    margin-right: 10px;
    margin-left: 10px;
    overflow: hidden;
    .file {
      transition: transform 0.3s ease-in-out;
    }
  }

  .next {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    background: #627d98;
    border-radius: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: #4284c7;
    }
    &.disabled {
      opacity: 0.5;
      cursor: default;
      pointer-events: none;
    }
  }
}
.file-name {
  color: #333;
  font-weight: 700;
  font-size: 12px;
  max-width: 160px;
  overflow: hidden;
}

.file-size {
  color: #666;
  font-size: 10px;
  font-weight: 400;
}
</style>
