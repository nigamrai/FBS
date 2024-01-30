import './App.css'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import { Routes,Route } from 'react-router-dom'
function App() {
  

  return (
      <Routes>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/' element={<HomePage/>}></Route>
      </Routes>
  )
}

export default App
