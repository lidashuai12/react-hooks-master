import React, { useState } from 'react'
import { mapData1, mapOptions } from './options';
import Chart from '../echarts/index';
export default function useMap() {
 const [renderer] = useState('canvas')
 return (
  <div
   style={{
    width: '10.625rem',
    height: '8.125rem',
   }}>
   {
    mapData1 ? <Chart renderer={renderer} option={mapOptions(mapData1)} /> : ''
   }
  </div>
 );
}
