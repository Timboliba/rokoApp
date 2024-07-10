// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/navigationBar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Container from './components/container/Container';
import Settings from './components/settings/Settings'
import Chats from './components/chats/Chats'
import Customer from './components/customers/Customer';
import Orders from './components/orders/Orders';
import Catalog from './components/catalog/Catalog';
import Marketing from './components/marketing/Marketing';
import Profil from './components/profil/Profil';
import Register from './components/auth/register/Register';


function App() {
  return (
    <div className="App">
      
      {/* <BrowserRouter>
        <div style={{display:'grid',gridTemplateColumns:'15% 1fr'}} className='routes'>
        <Navbar/>
        <div style={{backgroundColor:'whitesmoke'}}>
          <Routes>
            <Route index  element={<Chats/>}/>
            <Route path='settings' element={<Settings/>}/>
            <Route path='customers' element={<Customer />} />
            <Route path='communications/*'element={<Marketing/>}/>
            <Route path='orders' element={<Orders/>}/>
            <Route path='catalog' element={<Catalog/>}/>
            <Route path='profil' element={<Profil/>}/>
          </Routes>
        </div>
        </div>
      </BrowserRouter> */}
      <Register/>
    </div>
  );
}

export default App;
