import React, { useState, Fragment, useEffect } from 'react'
import {
 Decoration10,
 Decoration8,
 Decoration7,
} from '@jiaminghi/data-view-react';
import { formatTime } from '../../utils';
import { TopBox, TimeBox } from './style';

export default function useHeader() {
 const [weekday] = useState([
  '星期天',
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六',
 ])
 const [title] = useState('可视化Hooks版本');
 const [timeStr, setTimeStr] = useState('')


 useEffect(() => {
  const timing = setInterval(() => {
   let dateYear = formatTime(new Date(), 'yyyy-MM-dd');
   let dateDay = formatTime(new Date(), 'HH: mm: ss');
   let dateWeek = weekday[new Date().getDay()];
   setTimeStr(
    `${dateYear} | ${dateDay} ${dateWeek}`,
   )
  }, 1000);
  return () => {
   clearInterval(timing)
  }
 })
 return (
  <Fragment>
   <TopBox>
    <div className='top_box'>
     <Decoration10 className='top_decoration10' />
     <div className='title-box'>
      <Decoration8
       className='top_decoration8'
       color={['#568aea', '#000090']}
      />
      <div className='title'>
       <span className='title-text'>{title}</span>
       <Decoration7
        className='title-bototm top_decoration6'
        reverse={true}
        color={['#50e3c2', '#67a1e5']}
       >
        Decoration
       </Decoration7>
      </div>

      <Decoration8
       reverse={true}
       className='top_decoration8'
       color={['#568aea', '#000090']}
      />
     </div>
     <Decoration10 className='top_decoration10 top_decoration10_reverse' />
     <TimeBox>
      <h3>{timeStr}</h3>
     </TimeBox>
    </div>
   </TopBox>
  </Fragment>
 )
}
