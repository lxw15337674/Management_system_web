<template>
    <div id="ExportEcharts" :style="{width: '400px', height: '400px'}"></div>
</template>

<script>
    import getData from '@/mixins/getEchartsData'

    export default {
        name: 'ExportEcharts',
        mixins:[getData],
        components: {},
        data() {
            return {

            };
        },
        methods: {
            init() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('ExportEcharts'))
                // 绘制图表
                myChart.setOption(this.option);
            },
        },
        computed: {
            option() {
                return {
                    title: {
                        text: '商品出库统计',
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
                            data: this.echartsData
                        }
                    ]
                };
            }
        },
        mounted() {
            this.getData('outprocount')

        }
    }
</script>

<style scoped>

</style>
