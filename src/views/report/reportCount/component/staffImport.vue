<template>
    <div id="staffImport" :style="{width: '400px', height: '400px'}"></div>
</template>

<script>
    export default {
        name: 'staffImport',
        components: {},
        data() {
            return {};
        },
        methods: {
            init() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('staffImport'))
                // 绘制图表
                myChart.setOption(this.option);
            }
        },
        computed: {
            option() {
                return {
                    title: {
                        text: '员工入库统计',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        y: 'center',
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    },
                    series: [
                        {
                            name: '订单数量',
                            type: 'pie',
                            center: ['60%', '60%'],
                            radius: '65%',

                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },

                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [
                                {value: 335, name: '直接访问'},
                                {value: 310, name: '邮件营销'},
                                {value: 234, name: '联盟广告'},
                                {value: 135, name: '视频广告'},
                                {value: 1548, name: '搜索引擎'}
                            ]
                        }
                    ]
                };
            }
        },
        mounted() {
            this.init()
        }
    }
</script>

<style scoped>

</style>
