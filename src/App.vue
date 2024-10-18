<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView class="full" />
</template>
<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw; /* 设置宽度为视窗宽度 */
  margin: 0;
  padding: 0;
  overflow: hidden; /* 避免出现滚动条 */
  box-sizing: border-box; /* 确保边框和填充在宽高计算内 */
  flex-grow: 1; /* 使得 #app 在父级容器中扩展以填满可用空间 */
}


.full {
  height: 100%;
  width: 100%;
}
</style>
