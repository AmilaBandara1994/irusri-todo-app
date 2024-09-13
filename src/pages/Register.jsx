import {  Email, Lock, Person } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useFormik } from  'formik';
import * as Yup from 'yup';
import { useAuth } from '../context/AuthContext';


const Register = () => {
  const navigate = useNavigate();
  const {users, setUsers, authUser, setAuthUser, isLoggedIn, setIsLoggedIn} = useAuth()

  const formik = useFormik({
    initialValues: {
      name: "",
      email:"",
      password:""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is Required"),
      email: Yup.string().email("Invalid Email Address").required("Email is Required"),
      password: Yup.string().required("Password is Required"),
    }),
    onSubmit: (values, {resetForm}) => {      
      setUsers((prevAuthUser)=> [...prevAuthUser ,{
        name: values.name,
        email: values.email,
        password: values.password
      }]);
      localStorage.setItem('users', JSON.stringify(users));
      
      resetForm({values:''})
      navigate('/login');
    
    }

  });
  return (
    <div className="flex items-center justify-center mt-20">
    <div className='bg-lime-50 w-[500px] p-10 rounded-xl'>
      <div className="">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col items-center justify-center gap-2 ">
            <h2 className='mb-3 text-2xl font-semibold'>Register Form</h2>


            <TextField   name="name" type="text"
              placeholder="name" className="textField mb-3" 
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton edge="start">
                        <Person />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {
              formik.touched.name && formik.errors.name ? <div className='text-red-800'>{formik.errors.name}</div> : null
            }
            <TextField   name="email" type="text"
              placeholder="Email" className="textField mb-3" 
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton edge="start">
                        <Email />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {
              formik.touched.email && formik.errors.email ? <div className='text-red-800'>{formik.errors.email}</div> : null
            }
            <TextField  name="password" type="password"
              placeholder="Password" className="textField" 
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton edge="start">
                        <Lock />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />

            {
              formik.touched.password && formik.errors.password ? <div className='text-red-800'>{formik.errors.password}</div> : null
            }
                   
            <button disabled={!formik.isValid || !formik.dirty} className={`pr-4 flex items-center justify-center pl-4 rounded-lg p-1 font-semibold text-lg ${
    formik.isValid && formik.dirty ? "bg-lime-500 text-white" : "bg-gray-300 text-gray-500"
  }  `} type='submit'>
    {/* < />   */}
  Register</button>
            <p>Already have an Account? <Link className='text-zinc-300' to="/login">Sign in</Link></p>
        </div>
      </form>
      </div>
    </div>
    
  </div>
  )
}

export default Register