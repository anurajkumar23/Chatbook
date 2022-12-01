import Home from './pages/home/Home'
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import EditProfile from "./pages/editProfile/EditProfile";
import Profile from "./pages/profile/Profile";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./style/dark.scss"

function App() {
  return (
    <div className="app dark">
    <BrowserRouter>
    <Routes>
      <Route path="/">
         <Route path='login' element={<Login />}/>
         <Route path='register' element={<Register />}/>
         <Route index element={<Home />}/>
         <Route path='profile'>
            <Route path=':userId' element={<Profile />}/>   
            <Route path=':userId/edit' element={<EditProfile />}/>   
         </Route>
      </Route> 
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
