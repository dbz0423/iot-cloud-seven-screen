<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from "./chart.vue";
import { getTenantDeviceCount } from "@/api/screen";
export default {
  data() {
    return {
      cdata: {
        category: [],
        rateData: [],
        aData: [],
        bData: [],
        uData: [],
        dData: [],
        eData: [],
        fData: [],
        gData: [],
        hData: [],
      },
      Data: {},
    };
  },
  components: {
    Chart,
  },
  mounted() {
    this.setData();
    this.timer = setInterval(() => {
      this.setData();
    }, 10000); // 每3秒轮询一次
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    // 根据自己的业务情况修改
    setData() {
      this.getTenantDeviceCountData();
    },
    async getTenantDeviceCountData() {
      try {
        const res = await getTenantDeviceCount();
        if (res.code === 0) {
          const tenantNames = Object.keys(res.data);
          this.cdata.category = tenantNames;

          // Initialize all data arrays for types
          const typeDataMap = {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
          };

          tenantNames.forEach((tenantName) => {
            const tenantDevices = res.data[tenantName];
            const currentTenantCounts = {}; // To store counts for current tenant by type

            tenantDevices.forEach((device) => {
              currentTenantCounts[device.type] = device.count;
            });

            // Push counts for each type, defaulting to 0 if not present for this tenant
            for (let type = 1; type <= 8; type++) {
              typeDataMap[type].push(currentTenantCounts[type] || 0);
            }
          });

          // Assign to cdata
          this.cdata.aData = typeDataMap[1];
          this.cdata.bData = typeDataMap[2];
          this.cdata.uData = typeDataMap[3];
          this.cdata.dData = typeDataMap[4];
          this.cdata.eData = typeDataMap[5];
          this.cdata.fData = typeDataMap[6];
          this.cdata.gData = typeDataMap[7];
          this.cdata.hData = typeDataMap[8];

          // Calculate total count for each tenant and populate rateData
          this.cdata.rateData = tenantNames.map((tenantName) => {
            const tenantDevices = res.data[tenantName];
            return tenantDevices.reduce((sum, device) => sum + device.count, 0);
          });
        }
      } catch (error) {
        console.error("获取租户设备数量失败：", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
