<script>
import IconUpload from "@/components/icons/IconUpload.vue";
import IconNext from "@/components/icons/IconNext.vue";
import IconDefault from "@/components/icons/IconDefault.vue";
import IconWord from "@/components/icons/IconWord.vue";
import IconExcel from "@/components/icons/IconExcel.vue";
import IconPdf from "@/components/icons/IconPdf.vue";
import FileCard from "@/components/FileCard.vue";

export default {
  data() {
    return {
      files: [
        { type: "doc", name: "sample.doc", size: "500KB" },
        { type: "xlsx", name: "sample.xlsx", size: "600KB" },
        { type: "pdf", name: "sample.pdf", size: "700KB" },
        // { type: "jpg", name: "sample.jpg", size: "800KB" },
      ],
    };
  },
  components: {
    IconUpload,
    IconNext,
    IconDefault,
    IconWord,
    IconExcel,
    IconPdf,
    FileCard,
  },
};
</script>

<template>
  <div>
    <div class="drag-drop">
      <IconUpload />
      <div class="">
        <h2>Drag and drop files</h2>
        <p>Browse files</p>
      </div>
    </div>
    <div class="preview">
      <div class="prev"><IconNext /></div>
      <div class="file-list" v-for="file in files" :key="file">
        <FileCard>
          <template #file-icon>
            <IconWord v-if="file.type === 'doc'" />
            <IconExcel v-else-if="file.type === 'xlsx'" />
            <IconPdf v-else-if="file.type === 'pdf'" />
            <IconDefault v-else />
          </template>
          <template #file-props>
            <div class="file-props">
              <div class="file-name">{{ file.name }}</div>
              <div class="file-size">{{ file.size }}</div>
            </div>
          </template>
        </FileCard>
      </div>
      <div class="next"><IconNext /></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #333;
    gap: 4px;
    h2 {
      text-align: center;
      font-family: Noto Sans;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
    }
    p {
      font-family: Noto Sans;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      text-decoration-line: underline;
    }
  }
}
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
  }

  .file-list {
    padding-right: 10px;
    padding-left: 10px;
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
  }
}
.file-name {
  color: #333;
  font-weight: 700;
}

.file-size {
  color: #666;
}
</style>
