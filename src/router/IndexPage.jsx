import React, { Fragment } from 'react';
// 页面全局样式 页面中间样式
import { IndexPageStyle, IndexPageContent } from './style';

import CenterPage from '../component/centerPage/index';
import Header from '../component/header/index';
import LeftPage from '../component/leftPage/index';
import RightPage from '../component/rightPage/index';
export default function IndexPage() {
  return (
    <Fragment>
      <IndexPageStyle>
        <Header></Header>
        <IndexPageContent>
          <LeftPage></LeftPage>
          <CenterPage className='center-page'></CenterPage>
          <RightPage></RightPage>
        </IndexPageContent>
      </IndexPageStyle>
    </Fragment>
  )
}

