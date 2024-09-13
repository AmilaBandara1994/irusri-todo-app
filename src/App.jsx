import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import TodoPage from './pages/TodoPage'
import ProtectedRoutes from './utils/ProtectedRoutes'

import { AuthProvider, useAuth } from './context/AuthContext'


const route = createBrowserRouter([
  {   path: '/login',  element: <Login /> } ,
  {   path: '/register',  element: <Register /> } ,
  {
    path: '/',
    element: <ProtectedRoutes />, // Wrap with ProtectedRoutes
    children: [
      { path: '/', element: <Home />, errorElement: <NotFound /> },
      { path: '/todolist', element: <TodoPage /> },
    ],
  },


]);

const App = () =>  {

  // const {authUser,setAuthUser,isLoggedIn, setIsLoggedIn} = useAuth();

  return (
    <AuthProvider>
        <div className="flex flex-col h-[100vh] justify-between "> 
          <NavBar />
          <div className="container flex flex-col mb-5 justify-start  items-center">
            <RouterProvider router={route} />
          </div>
          <Footer /> 
        </div> 
    </AuthProvider>
  )
}

export default App
