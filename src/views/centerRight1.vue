<template>
  <div id="centerRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-line" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">告警信息</span>
        </div>
      </div>
      <div class="d-flex jc-center body-box">
        <dv-scroll-board class="dv-scr-board" :config="config" />
      </div>
    </div>
  </div>
</template>

<script>
import { getAlarmLogs } from "@/api/screen";

export default {
  data() {
    return {
      config: {
        header: ["设备名", "信息", "时间"],
        data: [],
        rowNum: 7, //表格行数
        headerHeight: 35,
        headerBGC: "#0f1325", //表头
        oddRowBGC: "#0f1325", //奇数行
        evenRowBGC: "#171c33", //偶数行
        index: true,
        columnWidth: [100, 260, 680, 200],
        align: ["center"],
      },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      getAlarmLogs().then((res) => {
        const formattedData = res.data.map((item) => [
          item.device_id,
          item.log_content,
          new Date(item.event_time).toLocaleString(),
        ]);
        this.config = { ...this.config, data: formattedData };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$box-height: 410px;
$box-width: 1222px;
#centerRight1 {
  padding: 16px;
  padding-top: 20px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 10px;
    overflow: hidden;
    .dv-scr-board {
      width: 1222px;
      height: 340px;
    }
  }
}
</style>
