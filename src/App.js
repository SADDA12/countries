import "./App.css";
import AboutPage from "./pages/about";
import Home from "./pages/home";
import Countries from "./pages/countries";
import Country from "./pages/country";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/countries' element={<Countries/>}></Route>
          <Route path='/country' element={<Country/>}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
