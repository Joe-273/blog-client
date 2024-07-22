<template>
  <div id="app">
    <h1>APP</h1>
    <Avatar imgUrl="http://pic.bizhi360.com/bpic/9/11209.jpg" :imgSize="200" />
    <Avatar
      imgUrl="https://images.chinatimes.com/newsphoto/2021-03-19/1024/20210319003325.jpg"
      :imgSize="100"
    />
  </div>
</template>

<script>
// import imgUrl from "../assets/404AM.png";
import Avatar from "./components/Avatar.vue";
export default {
  name: "App",
  components: {
    Avatar,
  },
};
</script>

<style lang="less"></style>
