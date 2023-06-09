/*
 * ECharts 组件基础部分
 * 传入 option 和渲染方式 renderer
 * */

import React, { useEffect, useRef, useState } from 'react';

import * as echarts from 'echarts';
import 'zrender/lib/svg/svg';
import { debounce } from '../../utils/index'; // 一个节流函数
export default function useChart(props) {
 const [initState] = useState({ width: '100%', height: '100%' })

 const { width, height } = initState;

 const chartRef = useRef()

 // 模拟声明周期
 useEffect(() => {
  if (chartRef.current) {
   const renderer = 'canvas';
   const chart = echarts.init(chartRef.current, null, {
    renderer,
    width: 'auto',
    height: 'auto',
   })
   console.info(chart);
   // 设置图表实例的配置项和数据
   chart.setOption(props.option)

   window.addEventListener('resize', debounce(chart.resize, 100));
   return () => {
    chart.dispose()
   }
  }
 })
 return (
  <div
   className='default-chart'
   ref={chartRef}
   id='mian'
   style={{ width, height }}
  />
 )
}
