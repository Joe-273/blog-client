<template>
  <ul class="contact-container">
    <li class="item" v-for="item in itemArray" :key="item.iconType">
      <a @click="handlerClick($event, item.href)" :href="item.href" target="_blank" class="aLink">
        <div class="icon">
          <Icon :type="item.iconType" />
        </div>
        <div v-if="!!item.imgUrl" class="image">
          <img ref="imgBox" :src="placeHolderImg" :data-realSrc="item.imgUrl" alt="" />
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
import Icon from '@/components/Icon'
import placeHolderImg from '@/assets/defaultLoading.gif'
export default {
  data() {
    return {
      placeHolderImg,
      itemArray: [
        {
          iconType: 'qq',
          contentText: '1123116289',
          imgUrl: '',
          href: '',
        },
        {
          iconType: 'wechat',
          contentText: 'Joe',
          imgUrl: '',
          href: '',
        },
        {
          iconType: 'github',
          imgUrl: 'https://picsum.photos/210/200',
          href: 'https://github.com/Joe-273?tab=repositories',
        },
        {
          iconType: 'email',
          contentText: 'Qihaowei.273@Outlook',
          imgUrl: 'https://picsum.photos/200/210',
          href: 'mailto:Qihaowei.273@Outlook.com',
        },
      ],
    }
  },
  components: {
    Icon,
  },
  methods: {
    loadRealImage() {
      for (const item of this.$refs.imgBox) {
        const realSrc = item.dataset.realsrc
        if (realSrc) item.src = realSrc
      }
    },
    handlerClick(e, itemHref) {
      if (!itemHref) e.preventDefault()
    },
  },
  mounted() {
    window.addEventListener('load', this.loadRealImage)
  },
  beforeDestroy() {
    window.removeEventListener('load', this.loadRealImage)
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/common.less';
@import '~@/styles/var.less';
@width: 240px;
.contact-container {
  .flex-center();
  .abs-center();
  top: -30px;
  color: @lightWords;
  font-size: 14px;
  .item {
    margin: 0 10px;
    .aLink {
      .icon {
        @d: 36px;
        .flex-center();
        .border-style(50%, @lightWords);
        transition: 0.25s;
        width: @d;
        height: @d;
        font-size: 22px;
      }
      &:hover {
        .icon {
          transform: scale(1.25);
          border-color: @primary;
        }
      }
    }
    .image {
      transform-origin: center 100%;
      opacity: 0;
      transition: 0.25s;
      position: absolute;
      pointer-events: none;
      left: 50%;
      bottom: 50px;
      transform: translate(-50%, 0) scaleY(0);
      max-width: @width;
      max-height: @width;
      width: 100%;
      margin: 0 auto;
      padding-top: 100%;
      background-color: @gray;
      .border-style(8px);
      &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 15%;
        width: 8px;
        height: 8px;
        .border-style(2px, @gray);
        transform: translateY(-50%) rotate(45deg);
        background-color: @gray;
      }
      img {
        .abs-center();
        width: 90%;
        object-fit: cover;
        background-color: @white;
        .border-style(6px, @gray);
      }
    }
    &:hover {
      .image {
        opacity: 1;
        transform: translate(-50%, -5px) scaleY(1);
      }
    }
  }
  .item:nth-child(1) {
    .image::after {
      left: 9.5%;
    }
  }
  .item:nth-child(2) {
    .image::after {
      left: 36%;
    }
  }
  .item:nth-child(3) {
    .image::after {
      left: 60%;
    }
  }
  .item:nth-child(4) {
    .image::after {
      left: 86%;
    }
  }
}
</style>
