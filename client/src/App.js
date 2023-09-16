import './home.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from'./pages/home'
import Login from './pages/login'
import SignUp from './pages/signup'
import NewMessage from './pages/newMessage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/new-message" element={<NewMessage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
