import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./Store/Store";

function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}>Home</Route>
      <Route path="/cart" element={<Cart/>}>cart</Route>
    </Routes>
   
    </BrowserRouter>
    </Provider>
    </>
   
    
  );
}

export default App;
