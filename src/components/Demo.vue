

<template>
  <div class="container">
    <div class="part1" v-show="currentTab === 1">
      <div class="desc">1、请找出下面的安全帽</div>
      <a-card>
        <a-card-grid class="card-item" style="width: 50%">
          <a-image :width="200" :src="img1" />
          <a-checkbox style="margin-left: 8px" v-model:checked="checked1" />
        </a-card-grid>
        <a-card-grid class="card-item" style="width: 50%">
          <a-image :width="200" :src="img2" />
          <a-checkbox style="margin-left: 8px" v-model:checked="checked2" />
        </a-card-grid>
        <a-card-grid class="card-item" style="width: 50%">
          <a-image :width="200" :src="img3" />
          <a-checkbox style="margin-left: 8px" v-model:checked="checked3" />
        </a-card-grid>
        <a-card-grid class="card-item" style="width: 50%">
          <a-image :width="200" :src="img4" />
          <a-checkbox style="margin-left: 8px" v-model:checked="checked4" />
        </a-card-grid>
      </a-card>
    </div>
    <div class="part2" v-show="currentTab === 2">
      <div class="desc">
        2、对员工周一进行绩效评价并说明原因（可以输入答案或者点击语音开始）
      </div>
      <a-textarea style="margin-bottom: 20px" v-model:value="answerStr" />

      <audio-recorder />
    </div>
    <div class="btns">
      <a-button @click="onPre">上一题</a-button>
      <a-button @click="onNext">下一题</a-button>
    </div>
  </div>
</template>
<script setup lang="js">
import {ref,onMounted} from 'vue';
import img1 from '../assets/img/1.jpg'
import img2 from '../assets/img/2.jpg'
import img3 from '../assets/img/3.jpg'
import img4 from '../assets/img/4.jpg'

const checked1 = ref(false);
const checked2= ref(false);
const checked3= ref(false);
const checked4= ref(false);
const currentTab = ref(1);
const answerStr = ref(undefined);
const onPre = ()=>{
  currentTab.value = 1;
}
const onNext = ()=>{
  currentTab.value = 2;
}
</script>

<style scoped lang="scss">
.container {
  width: 1000px;
  padding: 16px 16px 48px 16px;
  position: absolute;
  left: 50%;
  top: 50px;
  transform: translateX(-50%);
  border: 1px solid gray;
  .part1,
  .part2 {
    padding-bottom: 16px;
  }
  .part1 {
    .card-item {
      text-align: center;
    }
  }
  .desc {
    padding-bottom: 8px;
  }
  .btns {
    position: absolute;
    right: 16px;
    bottom: 16px;
    display: flex;
    gap: 8px;
  }
}
</style>
<style lang="scss">
.ar-icon__sm {
  line-height: normal !important;
}
</style>
