<template>
  <div id="centerLeft1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-bar" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">设备统计</span>
          <dv-decoration-3 class="dv-dec-3" />
        </div>
      </div>

      <!-- 8个主要的数据 -->
      <div class="bottom-data">
        <div class="item-box" v-for="(item, index) in deviceData" :key="index">
          <div class="d-flex align-items-center">
            <img :src="item.icon" alt="" class="device-icon" />
            <div class="text-content">
              <p>{{ item.name }}</p>
              <dv-digital-flop
                :config="item.config"
                style="width: 100px; height: 50px"
              />
            </div>
            <dv-digital-flop :config="item.config" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDeviceCount } from "@/api/screen";

export default {
  data() {
    return {
      deviceTypes: [
        { id: 1, name: "灯", icon: require("@/assets/svg/1.svg") },
        { id: 2, name: "传感器", icon: require("@/assets/svg/2.svg") },
        { id: 3, name: "摄像头", icon: require("@/assets/svg/3.svg") },
        { id: 4, name: "广播", icon: require("@/assets/svg/4.svg") },
        { id: 5, name: "风扇", icon: require("@/assets/svg/5.svg") },
        { id: 6, name: "空调", icon: require("@/assets/svg/6.svg") },
        { id: 7, name: "闸门", icon: require("@/assets/svg/7.svg") },
        { id: 8, name: "蜂鸣器", icon: require("@/assets/svg/8.svg") },
      ],
      deviceData: [],
      timer: null, // 添加定时器变量
    };
  },
  mounted() {
    this.initDeviceDataConfig(); // 调用初始化方法
    this.getDeviceData();
    // 设置定时器，每隔一段时间更新数据（例如：5秒）
    this.timer = setInterval(() => {
      this.getDeviceData();
    }, 10000);
  },
  beforeDestroy() {
    // 在组件销毁前清除定时器，防止内存泄漏
    clearInterval(this.timer);
  },
  methods: {
    initDeviceDataConfig() {
      this.deviceData = this.deviceTypes.map((type) => ({
        ...type,
        config: {
          number: [0],
          content: "{nt}",
          style: {
            fontSize: 28,
            fill: "#3CD0F0",
            fontWeight: "bolder",
          },
        },
      }));
    },
    async getDeviceData() {
      try {
        const res = await getDeviceCount();
        if (res.code === 0) {
          this.deviceData = this.deviceTypes.map((type) => ({
            name: type.name,
            icon: type.icon,
            config: {
              number: [res.data[type.id] || 0],
              content: "{nt}",
              style: {
                fontSize: 28,
                fill: "#3CD0F0",
                fontWeight: "bolder",
              },
            },
          }));
        }
      } catch (error) {
        console.error("获取设备数据失败：", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$box-width: 300px;
$box-height: 410px;

#centerLeft1 {
  padding: 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 10px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .dv-dec-3 {
    position: relative;
    width: 100px;
    height: 20px;
    top: -3px;
  }

  .bottom-data {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    padding: 0 10px;
    height: calc(100% - 80px); // 确保占满剩余空间

    .item-box {
      width: 40%; // 调整宽度以适应两列布局并留有间距
      height: 25%; // 确保8个格子能占满高度
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 0; // 移除之前的margin-bottom
      padding: 0; // 移除之前的padding
      box-sizing: border-box;
      color: #d3d6dd;
      margin-left: 16px;

      .d-flex {
        width: 100%; // 确保内部flex容器占满宽度
        justify-content: center; // 内部元素水平居中
      }

      .device-icon {
        width: 40px; // 调整图标大小
        height: 40px;
        margin-top: 10px; // 图标右侧间距
        transform: translateX(25%);
      }

      p {
        margin: 0; // 移除p标签的margin
        font-size: 14px;
        text-align: center;
      }

      .dv-digital-flop {
        width: 80px; // 调整宽度
        height: 30px;
      }
    }
  }
}
</style>
