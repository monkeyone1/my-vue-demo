<template>
  <div>
    <quill-editor
      ref="myQuillEditor"
      v-model="content"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
      @change="onEditorChange($event)"
    />
    {{ count }} / 50
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css'
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      count: 0,
      content: '<h2>I am Example</h2>',
      editorOption: {
        //  富文本编辑器配置
        modules: {
          toolbar: {
            container: [
              [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
              ['bold', 'italic', 'underline'], // toggled buttons
              [{ color: [] }], // dropdown with defaults from theme
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ align: [] }],
              ['clean'], // remove formatting button
              ['link', 'image'] // 上传图片、上传视频
            ],
            handlers: {
              image: function (value) {
                // 劫持原来的图片点击按钮事件
                if (value) {
                  document.querySelector('.hiddenInput').click()
                }
              }
            }
          }
        },
        theme: 'snow',
        placeholder: 'Start writing your post here. Add images and more.'
      }
    }
  },
  methods: {
    onEditorBlur(quill) {
      console.log('editor blur!', quill)
    },
    onEditorFocus(quill) {
      console.log('editor focus!', quill)
    },
    onEditorReady(quill) {
      console.log('editor ready!', quill)
    },
    onEditorChange({ quill, html }) {
      // quill.deleteText(50, quill.getLength())
      this.count = quill.getLength() - 1
      this.content = html
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  mounted() {
    this.count = this.$refs.myQuillEditor.quill.getLength() - 1
  }
}
</script>

<style></style>
