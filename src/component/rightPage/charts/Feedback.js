import React from 'react'
import Chart from '../../echarts/index'
import { FeedbackOptions } from './options';

export default function Feedback(props) {
  const renderer = 'canvas'
  return (
    <div
      style={{
        width: '1.25rem',
        height: '1.25rem',
      }}>
      <Chart
        renderer={renderer}
        option={FeedbackOptions(props.FeedbackData)}
      />
      ;
    </div>
  )
}

