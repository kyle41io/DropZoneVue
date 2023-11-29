<script>
import IconUpload from "@/components/icons/IconUpload.vue";
import FileList from "./FileList.vue";
import { ref, uploadBytesResumable } from "firebase/storage";
import storage from "@/utils/firebaseConfig";

export default {
  data() {
    return {
      files: [],
      slide: 0,
      isDragging: false,
      isError: false,
      isComplete: false,
    };
  },
  components: {
    IconUpload,
    FileList,
  },
  methods: {
    handleFileChange(event) {
      const fileList = event.target.files;

      this.handleFileSelect(fileList);
    },
    handleFileSelect(fileList) {
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        const fileType = file.name.split(".").pop().toLowerCase();
        const fileName = file.name;

        let fileSize = (file.size / 1024).toFixed(2);
        if (fileSize > 10 * 1024) {
          this.isError = true;
          return;
        }
        if (fileSize > 1024) {
          fileSize = (fileSize / 1024).toFixed(2) + "MB";
        } else {
          fileSize += "KB";
        }
        this.isError = false;

        this.files.push({ type: fileType, name: fileName, size: fileSize });
      }
    },
    handleDrop(event) {
      this.isDragging = false;
      const fileList = event.dataTransfer.files;
      this.handleFileSelect(fileList);
    },
    uploadFiles() {
      const timestamp = Date.now();
      const uploadPromises = [];
      // Lặp qua từng file trong danh sách files
      this.files.forEach((file) => {
        const storageRef = ref(storage, "/" + timestamp + "/" + file.name);
        const uploadPromise = uploadBytesResumable(storageRef, file);
        uploadPromises.push(uploadPromise);
      });
      Promise.all(uploadPromises)
        .then(() => {
          this.isComplete = true;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    reloadPage() {
      window.location.reload();
    },
  },
  computed: {},
};
</script>

<template>
  <div>
    <div v-if="!isComplete">
      <div
        class="drag-drop"
        :class="{ dragging: isDragging, error: isError }"
        @dragover.prevent="isDragging = true"
        @dragenter.prevent="isDragging = true"
        @dragleave.prevent="isDragging = false"
        @drop.prevent="handleDrop"
      >
        <div class="" v-if="isDragging">Drop!!!</div>
        <div class="" v-else>
          <IconUpload />
          <div class="">
            <h2>Drag and drop files</h2>
            <label for="file" class="browse">Browse files</label>
            <input id="file" type="file" @change="handleFileChange" multiple />
          </div>
          <button
            v-if="files.length >= 1"
            @click="uploadFiles"
            class="upload-btn"
          >
            Upload
          </button>
        </div>
      </div>
      <div class="error-text" v-if="isError">
        The maximum file size is 10 MB
      </div>
      <FileList :files="files"></FileList>
    </div>
    <div v-if="isComplete" class="upload-complete">
      <h2>Upload Complete</h2>
      <p class="continue" @click="reloadPage">Continue to upload</p>
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
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
    }
    label {
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      text-decoration-line: underline;
    }
    input {
      visibility: hidden;
    }
  }

  &.error {
    border-color: red;
  }
  &.dragging {
    border: 2px dotted rgb(98, 98, 243);
  }
  .error-text {
    color: red;
  }
}

.upload-btn {
  background: #4284c7;
  padding: 6px;
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background: #0974df;
  }
}

.browse {
  cursor: pointer;
}

.upload-complete {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.continue {
  color: #4284c7;
  cursor: pointer;
  &:hover {
    color: #0974df;
  }
}
</style>
