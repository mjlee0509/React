import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Info from './pages/Info';
import State from './pages/State';
import Param1 from './pages/Param1';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/info" element={<Info />} />
        <Route path="/state" element={<State />} />

        {/* 프로젝트시 저 뒤에 parameter 부분은 계속 바뀌어야 하므로 변수 처리함 */}
        <Route path="/param/:id" element={<Param1 />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
