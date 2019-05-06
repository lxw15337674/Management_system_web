<template>
    <div id="profit" :style="{width: '400px', height: '400px'}"></div>
</template>

<script>
    import getData from '@/mixins/getEchartsData'

    export default {
        name: 'profit',
        mixins:[getData],

        components: {},
        data() {
            return {};
        },
        methods: {
            init() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('profit'));
                // 绘制图表
                myChart.setOption(this.option);
            }
        },
        computed: {
            option() {
                return {
                    title: {
                        text: '利润统计',
                        x: 'center'
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : this.lineKey,
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'利润金额',
                            type:'bar',
                            barWidth: '60%',
                            data:this.lineValue
                        }
                    ]
                };
            }
        },
        mounted() {
            this.getLineData('lirun')
        }
    }
</script>

<style scoped>

</style>
