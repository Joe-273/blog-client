<template>
  <div></div>
</template>

<script>
import { getBanner } from "@/api/banner";
getBanner().then((resp) => console.log(resp));
export default {};
</script>

<style lang="less" scoped></style>
