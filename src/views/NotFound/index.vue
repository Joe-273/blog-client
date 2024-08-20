<template>
  <div class="not-found-container">
    <div class="main">
      <div class="content">
        <div class="title">
          <h2>
            一些描述信息：<span>{{ currentStr }}</span>
          </h2>
        </div>
        <div class="desc">
          <p @click="handleClick"><strong>404</strong> Page Not Found</p>
          <p @click="handleClick"><strong>404</strong> 所求之页不获，恕不见矣</p>
          <p @click="handleClick"><strong>404</strong> 페이지를 찾을 수 없습니다</p>
          <p @click="handleClick"><strong>404</strong> ページが見つかりません</p>
          <p @click="handleClick"><strong>404</strong> Страница не найдена</p>
        </div>
      </div>
      <div class="image">
        <img :src="img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import img from '@/assets/defaultError.jpg'
export default {
  data() {
    return {
      img,
      currentStr: '',
    }
  },
  created() {
    const fromRefresh = sessionStorage.getItem('fromRefresh')
    if (fromRefresh) {
      sessionStorage.removeItem('fromRefresh')
      console.log('Redirecting to Home')
      this.$router.replace('/') // 刷新时重定向到首页
    }
  },
  methods: {
    handleClick(e) {
      const str = e.target.innerText
      this.currentStr = str.substring(3, str.length)
    },
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
@import '~@/styles/common.less';
.not-found-container {
  width: 100%;
  height: 100%;
  .flex-center();
  .main {
    width: 1000px;
    height: 600px;
    border-radius: 15px;
    box-shadow: 0 0 40px @gray;
    background-color: @white;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    .image {
      padding: 10px;
      width: 55%;
      overflow: hidden;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 9px;
        object-fit: cover;
      }
    }
    .content {
      padding: 10px;
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: darken(@lightWords, 10%);
      .title {
        width: 100%;
        padding: 25px;
        h2 {
          span {
            font-size: 17px;
            font-weight: normal;
          }
        }
      }
      .desc {
        user-select: none;
        p {
          transition: 0.25s;
          font-size: 14px;
          padding: 10px 0;
          text-shadow: 0 0 30px @white;
          transform-origin: left;
          strong {
            font-size: 26px;
            padding-right: 10px;
          }
          &:hover {
            transform: scale(1.25);
            text-shadow: 0 0 30px @primary;
          }
        }
      }
    }
  }
}
</style>
