
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/login/Login';
import Form from './Form';
import Dashboard from './pages/dashboard/Dashboard';



function App() {
  

  return (
    <div className='App'>
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element ={<Login />} />
        <Route path='/dashboard' element ={<Dashboard />} />
        <Route path='/register' element ={<Form />} />


        

        

      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
