
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './componnets/navbar/Nav';
import Home from './componnets/Home/Home';
import Men from './componnets/catagories/Men/Men';
import About from './componnets/About/About';
import Store from './componnets/Store/Store';
import Women from './componnets/catagories/Women/Women';
import Kids from './componnets/catagories/Kid/Kids';
import Footer from './componnets/Footer/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Nav/>
          <Routes>
          <Route index element={<Home />} />
            <Route path='/' element = {<Home/>} >
              <Route index element={<Men />} />
              <Route path='/men' element = {<Men/>} />
              <Route path='/women' element = {<Women/>} />
              <Route path='/kids' element = {<Kids/>} />
            </Route>
            <Route path='/about' element = {<About/>} />
            <Route path='/store' element = {<Store/>} />
          </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
