import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import AudioRecorder from 'vue3-mic-recorder';
import './style.css'
import 'ant-design-vue/dist/reset.css';

const app = createApp(App);
app.use(Antd).use(AudioRecorder).mount('#app');

