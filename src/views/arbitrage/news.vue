<template>
  <div class="relative flex">
    <textarea
      v-model="message"
      placeholder="填入要编辑的内容"
      rows="1"
      class="textarea-focus"
      style="
        box-sizing: border-box;
        width: 800px;
        min-height: 300px;
        padding: 20px;
        border: 3px solid lightblue;
      "
      @input="autoGrow"
    ></textarea>
    <div
      class="ml-4 p-4 border-2 border-lightblue"
      style="box-sizing: border-box; width: 800px; min-height: 300px; overflow: auto"
      v-html="formattedMessage"
    ></div>
    <a-button class="mt-4" @click="save">保存</a-button>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        message: '',
      };
    },
    computed: {
      formattedMessage() {
        // 在这里添加你的格式化逻辑
        return this.message;
      },
    },
    async created() {
      const response = await axios.get('http://api.chatools.net/v1/arbitrage_news/');
      this.message = response.data.data.message;
      this.$nextTick(() => {
        this.autoGrow({ target: this.$el.querySelector('textarea') });
      });
    },
    methods: {
      autoGrow(event) {
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + 'px';
      },
      async save() {
        const response = await axios.post('http://api.chatools.net/v1/arbitrage_news/', {
          message: this.message,
        });
        if (response.status === 200) {
          alert('保存成功');
        } else {
          alert('保存失败');
        }
      },
    },
  };
</script>
