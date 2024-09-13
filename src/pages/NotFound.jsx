import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div  className="flex flex-col justify-center gap-5 items-center h-full w-full">
        <h1 className="text-6xl">404 Not Found</h1>
        <Link to="/">Home</Link>
    </div>
  )
}

export default NotFound