import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate=useNavigate()
    return (
        <div className="min-h-screen flex items-center justify-center flex-col">
            <h1 className="text-5xl font-bold text-orange-500">Login</h1>
            <input type="text" placeholder="Username" className="border border-gray-300 rounded-2xl px-4 py-2 mt-5 max-w-lg w-full" />
            <input type="password" placeholder="Password" className="border border-gray-300 rounded-2xl px-4 py-2 mt-5 max-w-lg w-full" />
            <div className="flex gap-4"><button className="w-32 h-10 bg-blue-500 hover:bg-blue-400 rounded-2xl p-2 mt-5 hover:text-red-500 transition-colors duration-300 cursor-pointer">Login</button>
            <button onClick={()=>navigate("/register")} className="w-32 h-10 bg-gray-600 text-white hover:bg-gray-500 rounded-2xl p-2 mt-5 hover:text-red-500 transition-colors duration-300 cursor-pointer">Register</button></div>
        </div>
    )
}

export default Login