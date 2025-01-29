
import { Routes ,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import useAuthStore from './store/useAuthStore.js'
import { useEffect } from 'react'

function App() {
 
const {authUser,checkAuth}= useAuthStore();
useEffect(()=>{
  checkAuth();
},[checkAuth])
console.log(authUser)
  return (
   <div>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}> </Route>
        <Route path="/signup" element={<SignUpPage></SignUpPage>}> </Route>
        <Route path="/login" element={<LoginPage></LoginPage>}> </Route>
        <Route path="/settings" element={<SettingsPage></SettingsPage>}> </Route>
        <Route path="/profile" element={<ProfilePage></ProfilePage>}> </Route>

       
      </Routes>
   
   </div>
  )
}

export default App
