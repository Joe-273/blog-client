<template>
  <div>
    <Icon :imgUrl="url" />
  </div>
</template>

<script>
import Icon from "./";
import url from "@/assets/404AM.png";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      url,
    };
  },
};
</script>

<style scoped></style>
