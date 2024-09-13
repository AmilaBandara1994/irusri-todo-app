import { ArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Home = () => {
    var todos = JSON.parse(localStorage.getItem('todos')|| "[]");
  return (
    <div className="mt-5 w-full"> 
    <div className="text-sky-500">
        <Link to="/todolist">Todo List</Link> <ArrowRight />
      </div>
      <h2 className='text-lg text-start mb-4 font-semibold text-gray-400'>All Tasks  </h2>
    <div className="bg-slate-200 p-3 rounded-lg">
        <table className="w-full">
            <thead className='bg-gray-50 border-b-2 border-gray-100'>
                <tr>
                    <th className='pl-3 text-lg font-semibold tracking-wide text-left'>Title</th>
                    <th className='pl-3 text-lg font-semibold tracking-wide text-left'>Description</th>
                    {/* <th className='pl-3 text-lg font-semibold tracking-wide text-left'>Date</th> */}
                    <th className='pl-3 text-lg font-semibold tracking-wide text-left'>Status</th>
                </tr>
            </thead>
            <tbody>
                    {todos.map((todo) =>(
                             <tr  key={todo.title}>
                                    <td className='pl-3 text-lg tracking-wide text-left'>{todo.title}</td>
                                    <td className='pl-3 text-lg  tracking-wide text-left'>{todo.description}</td>
                                    <td className={`pl-3 text-lg  tracking-wide text-left ${todo.isComplete ? "text-green-600":"text-red-600" }`} >{todo.isComplete ? "Completed": "Pending"}</td>
                            </tr>
                        ))}
            </tbody>
        </table>
    </div>
</div>
  )
}

export default Home