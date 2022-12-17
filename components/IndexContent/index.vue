<template>
  <div class="bg-gray-300 h-full">
    <div class="echart1 w-2/5 h-2/5" ref="echart1"></div>
  </div>
</template>

<script>
export default {
  name: 'IndexContent',
  data() {
    return {

    }
  },
  methods: {
    initEchart1() {
      this.$echarts.init(this.$refs.echart1).setOption({
        title: {
          text: '各球队本学期得分情况'
        },
        tooltip: {},
        legend: {
          data: ['分数']
        },
        xAxis: {
          data: ['一队', '二队', '三队', '四队', '五队']
        },
        yAxis: {},
        series: [
          {
            name: '分数',
            type: 'bar',
            data: [5, 20, 36, 10, 10]
          }
        ]
      })
    }
  },
  mounted: function () {
    this.initEchart1()
  }
}
</script>

<style>

</style>
