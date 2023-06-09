import React from 'react'
import { CenterPage, CenterBottom } from './style';
import Map from '../Map/index';
import { mapData1, detailsList } from '../Map/options';
export default function centerPage(props) {
 return (
  <CenterPage>
   <Map mapData={mapData1}></Map>
   <CenterBottom>
    <div className='detail-list'>
     {detailsList
      ? detailsList.map((item, index) => {
       return (
        <div className='detail-list-item' key={index}>
         <img
          src={require(`../../assets/images/center-details-data${index + 1
           }.png`)}
          alt={item.title}
         />
         <div className='detail-item-text'>
          <h3>{item.title}</h3>
          <span>{item.number}</span>
          <span className='unit'>{item.unit}</span>
         </div>
        </div>
       );
      })
      : ''}
    </div>
   </CenterBottom>
  </CenterPage>
 )
}
