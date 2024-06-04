import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Viewbook from './Components/userComponents/UserBookList';
import AdminDashboard from './Components/AdminComponents/AdminDashboard';


const App = ()=> {

  return (
    <>
    <div className="container">
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={ <Home /> } />    
      <Route path='/login' element ={ <Login /> } />   
      <Route path='/register' element ={ <Register /> } />   
      <Route path='/viewbook' element ={ <Viewbook /> } />  
      <Route path='/admindashboard' element ={ <AdminDashboard/> } />  
    </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}


export default App
