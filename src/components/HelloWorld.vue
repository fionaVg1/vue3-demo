

<template>
  <div class="container">
    <iframe
      width="100%"
      height="100%"
      ref="iframeRef"
      src="https://aije-flow-frontend-aije.dev.dm-ai.com/plan-center/plan-manage"
    ></iframe>
  </div>
</template>
<script setup lang="js">
import {ref,onMounted} from 'vue';
const iframeRef = ref();
document.domain = 'aije-flow-frontend-aije.dev.dm-ai.com';
const listenBtn = () => {
  console.log(iframeRef.value.contentWindow.document.querySelector('.ant-btn-primary'));
};
onMounted(()=>{
  listenBtn();

});
</script>

<style scoped>
.container {
  width: 1920px;
  height: 1080px;
}
</style>
