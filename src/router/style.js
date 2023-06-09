import styled from 'styled-components';
import pageBg from '../assets/pageBg.png';
// 页面全局样式
export const IndexPageStyle = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0px;
  padding: 10px 0 0 0;
  background: url(${pageBg}) center center no-repeat;
  background-size: cover;
  height: 100%
`;
// 中间容器样式
export const IndexPageContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  .center-page {
    flex: 1;
  }
`;
