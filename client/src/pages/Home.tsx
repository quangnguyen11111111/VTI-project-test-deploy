import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const handlerClickBtDashBoard = () => {
        navigate("/dashboard")
    }
    return (
        <div className="min-h-screen flex items-center justify-center flex-col bg-gray-100">

            <h1 className="text-5xl font-bold text-orange-500">
                DeepCode React + Vite + TailwindCSS
            </h1>
            <h2 className="text-3xl text-blue-500 mt-5 ">Lorem ipsum dolor sit amet. </h2>
            <button onClick={handlerClickBtDashBoard} className="w-32 h-14 bg-blue-500 hover:bg-blue-400 rounded-2xl p-2 mt-5 hover:text-red-500 transition-colors duration-300 cursor-pointer">
                DashBroad
            </button>
        </div>
    )
}

export default Home;