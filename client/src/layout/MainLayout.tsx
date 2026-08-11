import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
            <header className="w-full h-16 flex items-center justify-between px-4 bg-blue-500"  >
                <nav>
                    <ul className="flex items-center justify-between px-4">
                        <li className="hover:text-red-500 cursor-pointer ">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="ml-4 hover:text-red-500 cursor-pointer">
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="ml-4 hover:text-red-500 cursor-pointer">
                            <Link to="/login">Login</Link>
                        </li>
                        <li className="ml-4 hover:text-red-500 cursor-pointer">
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </nav>
            </header>
      <main>
        <Outlet />
      </main>

      <footer>
        Footer
      </footer>
    </div>
  );
}