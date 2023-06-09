import Chart from '../../echarts/index';
import { trafficOptions } from './options';
import React from 'react'

export default function useTrafficSituation(props) {
  const renderer = 'canvas'
  return (
    <div
      style={{
        width: '5.375rem',
        height: '3.125rem',
      }}>
      {props.trafficSitua ? (
        <Chart renderer={renderer} option={trafficOptions(props.trafficSitua)} />
      ) : (
        ''
      )}
    </div>
  )
}
