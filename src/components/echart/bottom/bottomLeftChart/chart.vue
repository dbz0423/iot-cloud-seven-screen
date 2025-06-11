<template>
  <div>
    <!-- 年度开工率 -->
    <Echart
      :options="options"
      id="bottomLeftChart"
      height="480px"
      width="100%"
    ></Echart>
  </div>
</template>

<script>
import Echart from "@/common/echart";
export default {
  data() {
    return {
      options: {},
    };
  },
  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({}),
    },
  },
  watch: {
    cdata: {
      handler(newData) {
        this.options = {
          tooltip: {
            trigger: "axis",
            backgroundColor: "rgba(255,255,255,0.1)",
            axisPointer: {
              type: "shadow",
              label: {
                show: true,
                backgroundColor: "#7B7DDC",
              },
            },
          },
          legend: {
            data: [
              "灯",
              "传感器",
              "摄像头",
              "广播",
              "风扇",
              "空调",
              "闸门",
              "蜂鸣器",
              "设备总和",
            ],
            textStyle: {
              color: "#B4B4B4",
            },
            top: "0%",
          },
          grid: {
            x: "8%",
            width: "88%",
            y: "4%",
            top: "10%",
          },
          xAxis: {
            data: newData.category,
            axisLine: {
              lineStyle: {
                color: "#B4B4B4",
              },
            },
            axisTick: {
              show: false,
            },
          },
          yAxis: [
            {
              splitLine: { show: false },
              axisLine: {
                lineStyle: {
                  color: "#B4B4B4",
                },
              },

              axisLabel: {
                formatter: "{value} ",
              },
            },
            {
              splitLine: { show: false },
              axisLine: {
                lineStyle: {
                  color: "#B4B4B4",
                },
              },
              axisLabel: {
                formatter: "{value} ",
              },
            },
          ],
          series: [
            {
              name: "设备总和",
              type: "line",
              smooth: true,
              showAllSymbol: true,
              symbol: "emptyCircle",
              symbolSize: 8,
              yAxisIndex: 1,
              itemStyle: {
                normal: {
                  color: "#F02FC2",
                },
              },
              data: newData.rateData,
            },
            {
              name: "灯",
              type: "bar",
              barWidth: 10,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#00c2ff" },
                    { offset: 0.5, color: "#00c2ff" },
                    { offset: 1, color: "#00c2ff" },
                  ]),
                },
              },
              data: newData.aData,
            },
            {
              name: "传感器",
              type: "bar",
              barWidth: 10,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#92fe9d" },
                    { offset: 0.5, color: "#00c2ff" },
                    { offset: 1, color: "#00c2ff" },
                  ]),
                },
              },
              z: -12,
              data: newData.bData,
            },
            {
              name: "摄像头",
              type: "bar",
              barWidth: 10,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#ffc72b" },
                    { offset: 0.5, color: "#ffc72b" },
                    { offset: 1, color: "#ffc72b" },
                  ]),
                },
              },
              z: -12,
              data: newData.uData,
            },
            {
              name: "广播",
              type: "bar",
              barWidth: 10,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#87cefa" },
                    { offset: 0.5, color: "#87cefa" },
                    { offset: 1, color: "#87cefa" },
                  ]),
                },
              },
              z: -12,
              data: newData.dData,
            },
            {
              name: "风扇",
              type: "bar",
              barWidth: 10,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#da70d6" },
                    { offset: 0.5, color: "#da70d6" },
                    { offset: 1, color: "#da70d6" },
                  ]),
                },
              },
              z: -12,
              data: newData.eData,
            },
            {
              name: "空调",
              type: "bar",
              barWidth: 10,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#ffb6c1" },
                    { offset: 0.5, color: "#ffb6c1" },
                    { offset: 1, color: "#ffb6c1" },
                  ]),
                },
              },
              z: -12,
              data: newData.fData,
            },
            {
              name: "闸门",
              type: "bar",
              barWidth: 10,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#add8e6" },
                    { offset: 0.5, color: "#add8e6" },
                    { offset: 1, color: "#add8e6" },
                  ]),
                },
              },
              z: -12,
              data: newData.gData,
            },
            {
              name: "蜂鸣器",
              type: "bar",
              barWidth: 10,
              itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "#ffa07a" },
                    { offset: 0.5, color: "#ffa07a" },
                    { offset: 1, color: "#ffa07a" },
                  ]),
                },
              },
              z: -12,
              data: newData.hData,
            },
          ],
        };
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>
