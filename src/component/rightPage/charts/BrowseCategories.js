import React from 'react'
import Chart from '../../echarts/index'
import { BrowseCategoriesOptions } from './options';
// 关联数据类别
export default function BrowseCategories(props) {
  const renderer = 'canvas'
  return (
    <div
      style={{
        width: '5.375rem',
        height: '2.5rem',
      }}>
      {props.browseCategories ? (
        <Chart
          renderer={renderer}
          option={BrowseCategoriesOptions(props.browseCategories)}
        />
      ) : (
        ''
      )}
    </div>
  )
}
