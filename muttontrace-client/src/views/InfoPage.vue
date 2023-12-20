<template>
    <div>
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
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
        <div class="mockup-browser border border-base-300">
            <div class="mockup-browser-toolbar">
                <div class="input border border-base-300">https://sheep_mock1.com</div>
            </div>
            <div class="flex justify-center px-4 py-5 border-t border-base-300">
                <img src="../assets/sheep/sheep_mock1.gif" alt="">
            </div>
        </div>
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <div class="overflow-x-auto">
            <table class="table">
                <!-- head -->
                <thead>
                    <tr>
                        <th>溯源信息</th>
                        <th>内容</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->
                    <tr>
                        <td>农场位置</td>
                        <td>内蒙古大肥羊农场</td>
                    </tr>
                    <!-- row 2 -->
                    <tr>
                        <td>饲养环境</td>
                        <td>户外放牧、有机饲养</td>
                    </tr>
                    <!-- row 3 -->
                    <tr>
                        <td>品种信息</td>
                        <td>中华大肥羊</td>
                    </tr>
                    <tr>
                        <td>健康记录</td>
                        <td>牲畜疫苗接种2次</td>
                    </tr>
                    <tr>
                        <td>福利标准</td>
                        <td>自由活动空间、营养饲料每周5次</td>
                    </tr>
                    <tr>
                        <td>屠宰和加工日期</td>
                        <td>2023/12/20</td>
                    </tr>
                    <tr>
                        <td>质量标准</td>
                        <td>ISO9000国际质量管理体系羊肉处理</td>
                    </tr>
                    <tr>
                        <td>追溯码</td>
                        <td>sksk129763123kl</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br>
        <br>
        <br>
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <div class="btm-nav">
            <button v-on:click="this.$router.push({ name: 'Home' })">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span class="btm-nav-label">主页</span>
            </button>
            <button class="active">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="btm-nav-label">信息</span>
            </button>
            <button v-on:click="this.$router.push({ name: 'SettingPage' })">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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
export default {
    name: "InfoPage",
    components: {},
    data() {
        return {}
    },
    methods: {},
    mounted() { },
}
</script>

<style scoped></style>