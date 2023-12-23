<template>
  <div>
    <!--  -->
    <!--  -->
    <div class="navbar bg-base-100">
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               class="inline-block w-5 h-5 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
            </path>
          </svg>
        </button>
      </div>
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">羊肉溯源系统</a>
      </div>
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               class="inline-block w-5 h-5 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
            </path>
          </svg>
        </button>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!-- <div class="w-full flex justify-center items-center">
        <button class="btn btn-info h-1/2 w-5/6 flex justify-center items-center">
            录入信息
        </button>
    </div> -->
    <div class="divider"></div>
    <!-- <button class="btn h-64 w-5/6 flex justify-center items-center">Button</button> -->
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <div class="w-full flex justify-center items-center">
      <div class="card w-5/6 bg-base-100 shadow-xl">
        <figure><img src="../assets/muttoninfo.png" alt="Mutton Info"/>
        </figure>
        <div class="card-body">
          <h2 class="card-title">肉源信息</h2>
          <p>羊肉供应链的各个阶段，包括养羊的农场、运输卡车、加工设施和零售店。</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">扫码查看</button>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
    <div class="divider"></div>
    <div class="w-full flex justify-center items-center">
      <div class="card w-5/6 bg-base-100 shadow-xl">
        <figure><img src="../assets/finance.png" alt="Mutton Info"/>
        </figure>
        <div class="card-body">
          <h2 class="card-title">利润核算</h2>
          <p>羊肉供应链成本核算</p>
          <div class="card-actions justify-end">
            <button class="btn btn-secondary">点击查看</button>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <div class="divider"></div>
    <!--    <QrcodeStream @detect="onDetect"></QrcodeStream>-->
    <br>
    <br>
    <br>
    <!--  -->
    <!--  -->
    <div class="btm-nav">
      <button class="active">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
        <span class="btm-nav-label">主页</span>
      </button>
      <button v-on:click="this.$router.push({ name: 'InfoPage' })">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span class="btm-nav-label">信息</span>
      </button>
      <button v-on:click="this.$router.push({ name: 'SettingPage' })">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
        <span class="btm-nav-label">设置</span>
      </button>
    </div>
    <!--  -->
    <!--  -->
    <!--  -->
    <!--  -->
  </div>
</template>

<script>
import {QrcodeStream, QrcodeDropZone, QrcodeCapture} from 'vue-qrcode-reader'

export default {
  name: "Home",
  components: {
    QrcodeStream,
  },
  data() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return {
      userAgent
    }
  },
  methods: {},
  mounted() {
  },
  created() {
    // Detect user device and redirect accordingly
    const userAgent = window.navigator.userAgent.toLowerCase();

    if (userAgent.match(/windows|ipad/i)) {
      // Mobile or tablet device, redirect to mobile page
      console.log('This is UnsupportDevice system');
      this.$router.push({name: 'UnsupportDevice'});
    }
  },
}
</script>

<style scoped></style>