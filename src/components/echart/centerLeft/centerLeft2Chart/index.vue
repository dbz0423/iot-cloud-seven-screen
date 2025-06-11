<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from "./chart.vue";
export default {
  data() {
    return {
      cdata: [
        {
          // 名字需要与 “common/map/fujian.js” 地图数据文件里面定义的一一对应，不能是 “福州” 或者 “闽” 之类的缩写
          name: "玄武区",
          value: 188,
          elseData: {
            // 这里放置地图 tooltip 里想显示的数据
          },
        },
        {
          name: "秦淮区",
          value: 94,
        },
        {
          name: "建邺区",
          value: 558,
        },
        {
          name: "鼓楼区",
          value: 27,
        },
        {
          name: "浦口区",
          value: 56,
        },
        {
          name: "栖霞区",
          value: 885,
        },
        {
          name: "雨花台区",
          value: 564,
        },
        {
          name: "江宁区",
          value: 113,
        },
        {
          name: "六合区",
          value: 32,
        },
        {
          name: "溧水区",
          value: 342,
        },
        {
          name: "高淳区",
          value: 62,
        },
      ],
    };
  },
  components: {
    Chart,
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
