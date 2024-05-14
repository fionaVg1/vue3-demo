

<template>
  <div class="container">
    <div class="part1" v-show="currentTab === 1">
      <div class="desc">1、请找出下面的活动扳手</div>
      <a-card>
        <a-card-grid class="card-item" style="width: 25%">
          <a-image :width="200" :height="50" :src="img1" />
          <a-checkbox style="margin-left: 8px" v-model:checked="checked1" />
        </a-card-grid>
        <a-card-grid class="card-item" style="width: 25%">
          <a-image :width="200" :src="img2" />
          <a-checkbox style="margin-left: 8px" v-model:checked="checked2" />
        </a-card-grid>
        <a-card-grid class="card-item" style="width: 25%">
          <a-image :width="200" :src="img3" />
          <a-checkbox style="margin-left: 8px" v-model:checked="checked3" />
        </a-card-grid>
        <a-card-grid class="card-item" style="width: 25%">
          <a-image :width="200" :src="img4" />
          <a-checkbox style="margin-left: 8px" v-model:checked="checked4" />
        </a-card-grid>
        <a-card-grid class="card-item" style="width: 25%">
          <a-image :width="200" :src="img5" />
          <a-checkbox style="margin-left: 8px" v-model:checked="checked5" />
        </a-card-grid>
        <a-card-grid class="card-item" style="width: 25%">
          <a-image :width="200" :src="img6" />
          <a-checkbox style="margin-left: 8px" v-model:checked="checked6" />
        </a-card-grid>
        <a-card-grid class="card-item" style="width: 25%">
          <a-image :width="200" :src="img7" />
          <a-checkbox style="margin-left: 8px" v-model:checked="checked7" />
        </a-card-grid>
        <a-card-grid class="card-item" style="width: 25%">
          <a-image :width="200" :src="img8" />
          <a-checkbox style="margin-left: 8px" v-model:checked="checked8" />
        </a-card-grid>
        <a-card-grid class="card-item" style="width: 25%">
          <a-image :width="200" :src="img9" />
          <a-checkbox style="margin-left: 8px" v-model:checked="checked9" />
        </a-card-grid>
        <a-card-grid class="card-item" style="width: 25%">
          <a-image :width="200" :src="img10" />
          <a-checkbox style="margin-left: 8px" v-model:checked="checked10" />
        </a-card-grid>
      </a-card>
    </div>
    <div class="part2" v-show="currentTab === 2">
      <div class="desc">
        2、对员工周一进行绩效评价并说明原因（可以输入答案或者点击语音开始）
      </div>
      <a-textarea
        id="result"
        style="margin-bottom: 20px"
        v-model:value="answerStr"
      />

      <audio-recorder />
    </div>
    <div class="part3" v-show="currentTab === 3">
      <div class="items">
        <div class="desc">
          1、识别出单线图中电缆、（识别出电缆终端头符号、识别出电缆中间头符号、识别出配电变压器、识别出带电指示器符号、识别出故障指示器、识别图中负荷开关的电气符号、识别图中断路器的电气符号、识别图中隔离刀闸的电气符号、识别图中接地刀闸的电气符号、识别图中跌落式熔断器的电气符识别图中避雷器的电气符号、识别图中电压互感器的电气符号、识别图中电流互感器的电气符号、识别出配电站、识别出开关站、识别出分支箱、识别出变压器台架）
        </div>
        <div class="desc">2、识别出水泥杆的符号</div>
        <div class="desc">3、识别出铁塔的符号</div>
        <div class="canvasPart">
          <div class="actions">
            <a-button @click="change(4)"> 线条标注</a-button>
            <a-button @click="change(1)">矩形标注</a-button>
            <a-button @click="change(2)">多边形标注</a-button>
          </div>
          <canvas
            class="canvas-container"
            ref="canvasRef"
            width="800"
            height="500"
          ></canvas>
        </div>
      </div>
    </div>
    <div class="btns">
      <a-button @click="onPre">上一题</a-button>
      <a-button @click="onNext">下一题</a-button>
    </div>
  </div>
</template>
<script setup lang="js">
import {ref,onMounted} from 'vue';
import CanvasSelect from 'canvas-select';
import img1 from '../assets/img2/1.png'
import img2 from '../assets/img2/2.png'
import img3 from '../assets/img2/3.png'
import img4 from '../assets/img2/4.png'
import img5 from '../assets/img2/5.png'
import img6 from '../assets/img2/6.png'
import img7 from '../assets/img2/7.png'
import img8 from '../assets/img2/8.png'
import img9 from '../assets/img2/9.png'
import img10 from '../assets/img2/10.png'
import canvasImg from '../assets/peidianwang.jpg';

const checked1 = ref(false);
const checked2= ref(false);
const checked3= ref(false);
const checked4= ref(false);
const checked5 = ref(false);
const checked6= ref(false);
const checked7= ref(false);
const checked8= ref(false);
const checked9= ref(false);
const checked10= ref(false);

const currentTab = ref(3);
const answerStr = ref(undefined);
const canvasRef = ref();
const instance = ref();

onMounted(()=>{
  instance.value = new CanvasSelect('.canvas-container',canvasImg);  
})
const change = (num)=>{
  instance.value.createType = num;
}
const onPre = ()=>{
  currentTab.value = currentTab.value > 1? currentTab.value - 1 : 1;
}
const onNext = ()=>{
  currentTab.value = currentTab.value <3 ?currentTab.value+1:3;
}
</script>

<style scoped lang="scss">
.container {
  width: 1400px;
  padding: 16px 16px 48px 16px;
  position: absolute;
  left: 50%;
  top: 50px;
  transform: translateX(-50%);
  border: 1px solid gray;
  .part1,
  .part2,
  .part3 {
    padding-bottom: 16px;
  }
  .part1 {
    .card-item {
      display: flex;
      text-align: center;
      align-items: center;
    }
  }
  .part3 {
    .canvasPart {
      .actions {
        display: flex;
        gap: 16px;
      }
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
