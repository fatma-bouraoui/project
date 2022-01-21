
import Signup from './Components/Signup/Signup';
import { Route, Routes, } from "react-router-dom";
import './App.css';
import Dashbord from './Components/Dashbord/Dashbord';
import NavBar from './Components/NavBar';

import Home from './Components/Home';
import Reason from './Components/Reason';
import Footer from './Components/Footer';
import Service from './Components/Service';
import ListProp from './Components/ListProp';
import Maison from './Components/Maison';
import GardEnfant from './Components/GardEnfant';
import CompSenior from './Components/CompSenior';




function App() {
  return (
    <div className="App">
    <NavBar />
    <Routes> 
    {/* <Route exact path='/Navbar' element={} /> */}
    <Route exact path='/' element={<Home />} />
    {/* <Route exact path='/footer' element={} /> */}
    <Route exact path='/signup' element={<Signup />} />
    <Route exact path='/reason' element={<Reason />} />

    <Route exact path='/service' element={<Service />} />
    <Route exact path='/listprop' element={<ListProp />} />
    <Route exact path='/maison' element={<Maison />} />
    <Route exact path='/gardenfant' element={<GardEnfant />} />
    <Route exact path='/compsenior' element={<CompSenior />} />
    <Route exact path='/Dashbord' element={<Dashbord />} />
    
    </Routes>
    <Footer/>
     
    </div>
  );
}

export default App;
