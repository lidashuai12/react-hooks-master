import echarts from "echarts/lib/echarts";

export const trafficOptions = (params) => ({
  title: {
    show: false,
  },
  legend: {
    show: true,
    top: "5%",
    textStyle: {
      color: "#c0c9d2",
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      lineStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(0, 255, 233,0)",
            },
            {
              offset: 0.5,
              color: "rgba(255, 255, 255,1)",
            },
            {
              offset: 1,
              color: "rgba(0, 255, 233,0)",
            },
          ],
          global: false,
        },
      },
    },
  },
  grid: {
    top: "15%",
    left: "10%",
    right: "5%",
    bottom: "10%",
  },
  xAxis: {
    type: "category",
    axisLine: {
      show: true,
    },
    splitArea: {
      color: "#f00",
      lineStyle: {
        color: "#f00",
      },
    },
    axisLabel: {
      color: "#BCDCF0",
    },
    splitLine: {
      show: false,
    },
    boundaryGap: false,
    data: params.timeList,
  },

  yAxis: {
    type: "value",
    min: 0,
    splitLine: {
      show: true,
      lineStyle: {
        color: "rgba(255,255,255,0.1)",
      },
    },
    axisLine: {
      show: true,
    },
    axisLabel: {
      show: true,
      margin: 10,
      textStyle: {
        color: "#d1e6eb",
      },
    },
    axisTick: {
      show: false,
    },
  },
  series: [
    {
      name: "出口流量",
      type: "line",
      smooth: true, //是否平滑
      lineStyle: {
        normal: {
          color: "#00b3f4",
          shadowColor: "rgba(0, 0, 0, .3)",
          shadowBlur: 0,
          shadowOffsetY: 5,
          shadowOffsetX: 5,
        },
      },
      label: {
        show: false,
        position: "top",
        textStyle: {
          color: "#00b3f4",
        },
      },
      // 去除点标记
      symbolSize: 0,
      // 鼠标放上去还是要有颜色的
      itemStyle: {
        color: "#00b3f4",
      },
      // 设置渐变色
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(0,179,244,0.3)",
              },
              {
                offset: 1,
                color: "rgba(0,179,244,0)",
              },
            ],
            false
          ),
          shadowColor: "rgba(0,179,244, 0.9)",
          shadowBlur: 20,
        },
      },
      data: params.outData,
    },
    {
      name: "入口流量",
      type: "line",
      smooth: true, //是否平滑
      // 阴影
      lineStyle: {
        normal: {
          color: "#00ca95",
          shadowColor: "rgba(0, 0, 0, .3)",
          shadowBlur: 0,
          shadowOffsetY: 5,
          shadowOffsetX: 5,
        },
      },
      label: {
        show: false,
        position: "top",
        textStyle: {
          color: "#00ca95",
        },
      },
      // 去除点标记
      symbolSize: 0,
      itemStyle: {
        color: "#00ca95",
      },
      // 设置渐变色
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(0,202,149,0.3)",
              },
              {
                offset: 1,
                color: "rgba(0,202,149,0)",
              },
            ],
            false
          ),
          shadowColor: "rgba(0,202,149, 0.9)",
          shadowBlur: 20,
        },
      },
      data: params.inData,
    },
  ],
});

export const userOptions = (params = {}) => ({
  header: params.header,
  data: params.data,
});

export const data = {
  accessFrequency: 1500,
  peakFlow: 300,
  trafficSitua: {
    timeList: ["9:00", "12:00", "15:00", "18:00", "21:00", "00:00"],
    outData: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
    inData: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14],
  },
  userSitua: {
    header: ["用户", "时间", "状态"],
    data: [
      // ['用户1', '2020-11-11 12:00', '在线'],
      // ['用户2', '2020-11-11 12:00', '离线'],
      // ['用户3', '2020-11-11 12:00', '在线'],
      // ['用户4', '2020-11-11 12:00', '在线'],
      // ['用户5', '2020-11-11 12:00', '在线'],
      // ['用户6', '2020-11-11 12:00', '离线'],
      // ['用户7', '2020-11-11 12:00', '在线'],
      // ['用户8', '2020-11-11 12:00', '在线'],
      // ['用户9', '2020-11-11 12:00', '离线'],
      // ['用户11', '2020-11-11 12:00', '离线'],
      // ['用户12', '2020-11-11 12:00', '离线'],
      // ['用户13', '2020-11-11 12:00', '离线'],
    ],
  },
};
