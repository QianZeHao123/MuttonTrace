<template>
    <div>
        <div class="mockup-window border border-base-300 h-screen">
            <div class="flex justify-center px-4 py-16 border-t border-base-300">
                <div>欢迎来到羊肉溯源系统客户端！<br /><br />
                    程序正在检测您的设备，请稍后...<br /><br />
                    我们检测到您的设备是 {{ userAgent }}<br /><br />
                    抱歉，羊肉溯源系统尚不支持桌面端，请切换到手机端使用。
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import SideBar from "../components/SideBar.vue"
// import DataBarShow from "../components/DataBarShow.vue"
export default {
    name: "UnsupportDevice",
    components: {
        // SideBar,
        // DataBarShow
    },
    data() {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return {
            userAgent
        }
    },
    methods: {
        // Alert_version: alert('For security reasons, this version does not connect to the backend.'),
        // Alert_connection: alert('Thank you for your understanding, the full version of the program is detailed at: https://gitee.com/qian_zehao/nashsweeper'),
    },
    mounted() {
        // Alert_version(),
        // Alert_connection(),
    },
}
</script>

<style scoped></style>