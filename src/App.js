import { Route, Routes, Navigate } from 'react-router-dom';
import TabTle from './dashboard/index';
import IndexPage from './router/IndexPage'
import './utils/flexible';
function App() {
  return (
    <Routes>
      <Route path='/dashboard' element={TabTle()}></Route>
      <Route path="" element={<Navigate to="/dashboard" />} />
      <Route path="/map" element={IndexPage()} />
    </Routes>
  );
}

export default App;
