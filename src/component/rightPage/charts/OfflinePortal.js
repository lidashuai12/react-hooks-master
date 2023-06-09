import React from 'react'
import Chart from '../../echarts/index'
import { OfflinePortalOptions } from './options';

export default function OfflinePortal(props) {
  const renderer = 'canvas'
  return (
    <div
      style={{
        width: '5.375rem',
        height: '2.875rem',
      }}>
      <Chart
        renderer={renderer}
        option={OfflinePortalOptions(props.offlinePortalData)}
      />
    </div>
  )
}
