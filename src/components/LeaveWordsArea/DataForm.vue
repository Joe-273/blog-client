<template>
  <form @submit.prevent="handleSubmit" class="data-form-container" ref="formContainer">
    <div class="visibleBox">
      <div class="formArea" :class="{ focus: isTextAreaFocus }">
        <textarea
          @focus="handleFocus($event, 'TextArea')"
          @blur="handleBlur($event, 'TextArea')"
          @input="handleInput"
          @keydown="handleKeyDown"
          v-model="formData.content"
          placeholder="发表一下你的看法吧~"
          maxlength="300"
          rows="1"
        ></textarea>
        <span class="error">{{ error.content }}</span>
        <span class="tip">{{ formData.content.length }}/300</span>
      </div>
    </div>
    <div class="hideBox" :class="{ isFocused: isTextAreaFocus || isInputFocus }">
      <div class="formArea nickInput" :class="{ focus: isInputFocus }">
        <input
          @focus="handleFocus($event, 'Input')"
          @blur="handleBlur($event, 'Input')"
          v-model="formData.nickName"
          maxlength="10"
          placeholder="请填写一个昵称"
          type="text"
        />
        <span class="error">{{ error.nickName }}</span>
        <span class="tip">{{ formData.nickName.length }}/10</span>
      </div>
      <div @click.prevent="handleSubmit" class="formArea submit " :class="{ disabled: isSubmiting }">
        <button>{{ isSubmiting ? '发布中...' : '发布' }}</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      isTextAreaFocus: false,
      isInputFocus: false,
      formData: {
        nickName: '',
        content: '',
      },
      error: {
        nickName: '',
        content: '',
      },
      isSubmiting: false,
    }
  },
  methods: {
    // 修改textarea回车行为
    handleKeyDown(event) {
      // 检查按下的键是否是回车键
      if (event.keyCode === 13) {
        // 检查是否同时按下了Shift键
        if (!event.shiftKey) {
          // 阻止默认行为，即阻止换行
          event.preventDefault()
          this.handleSubmit()
        }
        // 如果是Shift+Enter，不执行任何操作，允许换行
      }
    },
    // 提交表单函数
    handleSubmit(e) {
      this.error.nickName = this.formData.nickName ? '' : '要不先填一个昵称吧？'
      this.error.content = this.formData.content ? '' : '你在评论的时候忘记评论内容啦！'
      if (!this.formData.nickName || !this.formData.content) {
        return
      }
      // 提交表单
      this.isSubmiting = true
      this.$emit('submit', this.formData, (message) => {
        this.isSubmiting = false
        this.formData.nickName = ''
        this.formData.content = ''
        this.$showMessage({
          content: message,
          type: 'success',
          container: this.$refs.formContainer,
          duration: 1000,
        })
      })
    },
    handleInput(e) {
      const textarea = e.target
      textarea.style.height = 'auto'
      textarea.style.height = textarea.scrollHeight + 'px'
    },
    handleFocus(e, type) {
      this[`is${type}Focus`] = true
    },
    handleBlur(e, type) {
      if (e.target.value) return
      this[`is${type}Focus`] = false
    },
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
@import '~@/styles/common.less';
@bottomGap: 30px;
.data-form-container {
  padding: 15px;
  width: 100%;
  overflow: hidden;
  .visibleBox {
    padding-bottom: @bottomGap;
  }
  .hideBox {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    transition: 0.2s;
    padding-bottom: @bottomGap;
    padding: 0;
    height: 0;
    opacity: 0;
    &.isFocused {
      padding-bottom: @bottomGap;
      height: calc(42px + @bottomGap);
      opacity: 1;
    }
    .submit {
      @gap: 20px;
      cursor: pointer;
      width: fit-content;
      padding-left: @gap;
      padding-right: @gap;
      border: none;
      background-color: lighten(@primary, 5%);
      color: lighten(@gray, 15%);
      user-select: none;
      &:hover {
        background-color: @primary;
        color: @white;
      }
      &.disabled {
        background-color: lighten(@primary, 15%);
        color: lighten(@gray, 10%);
        cursor: not-allowed;
      }
    }
  }
  .formArea {
    position: relative;
    transition: 0.25s;
    display: flex;
    width: 100%;
    padding: 10px 15px;
    border: 1px solid lighten(@lightWords, 10%);
    background-color: lighten(@lightWords, 30%);
    border-radius: 8px;
    color: @lightWords;
    .error {
      position: absolute;
      left: 0;
      top: calc(100% + 8px);
      color: @danger;
      font-size: 14px;
    }
    &.focus {
      color: @words;
      border: 1px solid @primary;
      background-color: transparent;
    }
    &.nickInput {
      width: fit-content;
      .flex-center();
      input {
        width: 200px;
      }
      .tip {
        color: inherit;
        font-size: 12px;
      }
    }
    button,
    input,
    textarea {
      cursor: inherit;
      color: inherit;
      font-family: '等线';
      font-size: 16px;
      flex: 1;
      line-height: 20px;
      resize: none;
      overflow-y: hidden;
      outline: none;
      border: none;
      background-color: transparent;
    }
  }
}
</style>
