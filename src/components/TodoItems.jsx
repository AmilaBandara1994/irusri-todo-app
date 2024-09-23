import { Add, Delete, Description,  Done,  Pending,   Title, Update } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField } from '@mui/material'

import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const TodoItems = () => {
    const [todos, setTodos]  = useState(JSON.parse(localStorage.getItem('todos')|| "[]"));

    const formik = useFormik({
        initialValues: {
          id:0,
          title:"",
          description: "",
          isComplete:false,
        },
        validationSchema: Yup.object({
          title: Yup.string().required("Title is Required"),
          description: Yup.string().required("Description is Required")
        }),

        onSubmit: (values, {resetForm}) => {            
            if(values.id > 0){
                setTodos((prevTodos) =>
                    prevTodos.map((td) => (td.id === values.id ? {
                        id : values.id,
                        title: values.title,
                        description: values.description,
                        isComplete: values.isComplete,
                    } : td))
                  );
            
            }else{
                setTodos((prevTodos) => [...prevTodos, {
                    id : todos.length+1,
                    title: values.title,
                    description: values.description,
                    isComplete: false,
                }]);
        
            }
          resetForm({values:''})
        
        }
    
      });

      const deletes = (todo) => {        
        setTodos((prevTodos) =>
            prevTodos.filter((td) => (td.id !== todo.id))
          );
      };

      const update = (todo) => {
        formik.setValues(todo);
      };


      const isDone = (todo) => {
          todo.isComplete = !todo.isComplete;
        setTodos((prevTodos) =>
            prevTodos.map((td) => (td.id === todo.id ? todo : td))
          );
      };

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos])

  return (
    <div className=''>
        <div className="flex flex-col justify-center items-center"> 
            <form onSubmit={formik.handleSubmit}>
                <div className="flex max-md:flex-col  items-center justify-center gap-2 "> 
                    
                    
                    <TextField   name="title" type="text"
                        placeholder="Title" className="textField mb-3" 
                        slotProps={{
                        input: {
                            startAdornment: (
                            <InputAdornment position="start">
                                <IconButton edge="start">
                                <Title />
                                </IconButton>
                            </InputAdornment>
                            ),
                        },
                        }}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                    />
                    
                    <TextField  name="description" type="text"
                        placeholder="description" className="textField" 
                        slotProps={{
                        input: {
                            startAdornment: (
                            <InputAdornment position="start">
                                <IconButton edge="start">
                                <Description />
                                </IconButton>
                            </InputAdornment>
                            ),
                        },
                        }}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                    />

                    <button disabled={!formik.isValid || !formik.dirty} className={`pr-4 flex items-center justify-center pl-4 rounded-lg p-1 font-semibold text-lg ${
    formik.isValid && formik.dirty ? "bg-lime-500 text-white" : "bg-gray-300 text-gray-500"
  }  `} type='submit'> 
  <Add />
  Add</button>
                </div>

            </form>
            <div className="flex flex-col">
            {
                formik.touched.title && formik.errors.title ? <div className='text-red-800'>{formik.errors.title}</div> : null
            }
            {
                formik.touched.description && formik.errors.description ? <div className='text-red-800'>{formik.errors.description}</div> : null
            }
         
            </div>
        </div>
        <div className="mt-5"> 
                <h2 className='text-lg text-start mb-4 font-semibold text-gray-400'>Pending Tasks </h2>
            <div className="bg-slate-200 p-3 flex flex-col items-end rounded-lg max-h-[500px]">
                <table className="w-full">
                    <thead className='bg-gray-50 border-b-2 border-gray-100'>
                        <tr>
                            <th className='pl-3 text-lg font-semibold tracking-wide text-gray-400 text-left'>Title</th>
                            <th className='pl-3 text-lg font-semibold tracking-wide text-gray-400 text-left'>Description</th>
                            <th className='pl-3 text-lg font-semibold tracking-wide text-gray-400 text-left'>Actions</th>
                            <th className='pl-3 text-lg font-semibold tracking-wide text-gray-400 text-left'>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                 
                            {todos.map((todo) =>(
                                    <tr  className='text-lime-800' key={todo.id}>
                                            <td className='pl-3 text-base tracking-wide text-left'>{todo.title}</td>
                                            <td className='pl-3 text-base  tracking-wide text-left'>{todo.description}</td>
                                            <td className={`pl-3 text-base  tracking-wide text-left `} >
                                               <IconButton onClick={() => update(todo)}>
                                                    <Update  className="text-blue-700"/> 
                                                </IconButton>
                                               <IconButton onClick={() => deletes(todo)}>
                                                    <Delete className="text-red-600" /> 
                                                </IconButton>
                                              
                                            </td>
                                            <td className={`pl-3 text-lg  tracking-wide text-left `} >
                                              <IconButton  onClick={() => isDone(todo)}>
                                                   {
                                                    todo.isComplete ? <Done className="text-green-600" /> : 
                                                     <Pending  className="text-red-600"/>
                                                   } 
                                                </IconButton>
                                            </td>
                                    </tr>
                                ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default TodoItems