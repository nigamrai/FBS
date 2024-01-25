import './App.css'
import SignUp from './Pages/SignUp'
import { Routes,Route } from 'react-router-dom'
function App() {
  

  return (
      <Routes>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
  )
}

export default App
