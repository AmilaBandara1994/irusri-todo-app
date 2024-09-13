import { People, Person } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const {users, setUsers, authUser, setAuthUser, isLoggedIn, setIsLoggedIn} = useAuth()
  return (
    <div className='flex gap-2 items-center justify-center'>
      <Person />
      <p>{ authUser ? authUser?.name:"User" }</p>
      </div>
  )
}

export default Profile