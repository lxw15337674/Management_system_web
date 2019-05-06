<template>
    <div id="order" :style="{width: '400px', height: '400px'}"></div>
</template>

<script>
    import getData from '@/mixins/getEchartsData'

    export default {
        name: 'order',
        mixins: [getData],

        components: {},
        data() {
            return {};
        },
        methods: {
            init() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('order'))
                // 绘制图表
                myChart.setOption(this.option);
            }
        },
        computed: {
            option() {
                return {
                    title: {
                        text: '订单统计',
                        x: 'center'
                    },
                    color: ['#3398DB'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data : this.lineKey,
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '订单数量',
                            type: 'bar',
                            barWidth: '60%',
                            data:this.lineValue
                        }
                    ]
                };
            }
        },
        mounted() {
            this.getLineData('ordercount')

        }
    }
</script>

<style scoped>

</style>
