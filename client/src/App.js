import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./scenes/Home";
import SignIn from "./scenes/SignIn";
import SignUp from "./scenes/SignUp";
import './App.css';


const Routing =() =>{
  return(
    <>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routing/>
    </BrowserRouter>
  );
}

export default App;
