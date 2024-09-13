import { Link } from "react-router-dom"
import TodoItems from "../components/TodoItems"
import { ArrowBack, ArrowForward, ChevronRight } from "@mui/icons-material"

const TodoPage = () => {
  return (
    <div className="w-full">
     <div className="text-sky-500 flex items-start justify-start">
        <Link to="/">Home</Link> <ChevronRight />
      </div>
      <div className="flex flex-col justify-start items-center">
          <h1 className="text-2xl mb-3">Todo List</h1>
      </div>
     
      <TodoItems />
    </div>

  )
}

export default TodoPage