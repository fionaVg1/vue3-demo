

<template>
  <button @click="startRecording">开始录音</button>
</template>
<script setup lang="js">
import {ref,onMounted} from 'vue';

const startRecording = async() => {
  try {  
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });  
  
        // 在这里，你可以将流发送到音频处理管道或语音识别服务  
        // 注意：此示例仅显示如何获取流，并不进行实际处理  
  
        console.log('麦克风已连接', stream);  
  
        // 停止录音（这里只是一个示例，你可能需要实现更复杂的逻辑）  
        // stream.getTracks().forEach(track => track.stop());  
  
      } catch (err) {  
        console.error('无法获取麦克风', err);  
      }  
};

</script>

<style scoped>
</style>
