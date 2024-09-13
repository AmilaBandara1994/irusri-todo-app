import Profile from './Profile'
import logo from "../assets/todo1.jpg"
// import { useNavigate } from 'react-router-dom';

const NavBar = () => {
//  const navigate = useNavigate();
//  const goToHome = () => navigate('/');
  return (
    <div className=' bg-lime-500  '>
      <div className='flex justify-between items-center container  pt-2 pb-2 text-white'>
          <div className="flex items-center gap-3">
            <div className="flex  items-center justify-center gap-1" >
              <img src={logo} alt="logo" className='h-12' />
To-Dos
            </div>
          </div>
          <Profile />
      </div>
    </div>
  )
}

export default NavBar