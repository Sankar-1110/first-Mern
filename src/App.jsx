import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { About } from './pages/about'
import { Home } from './pages/Home'
import { SignOut } from './pages/signOut'
import { Signin } from './pages/signin'
import { Profile } from './pages/profile'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/signOut' element={<SignOut/>}/>
    <Route path='/profile' element={<Profile/>}/>


   </Routes>
   </BrowserRouter>
  )
}

export default App
