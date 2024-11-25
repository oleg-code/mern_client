import { Navbar, Button } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation(); // Получение текущего пути

  return (
    <Navbar className="border-b-2">
      {/* Логотип */}
      <Navbar.Brand>
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            V-World
          </span>
          Booking System
        </Link>
      </Navbar.Brand>

      {/* Кнопки в правой части */}
      <div className="ml-auto flex items-center gap-4">
        <Link to="/">
          <Button
            size="sm"
            color={location.pathname === "/" ? "purple" : "gray"}
            outline={location.pathname !== "/"}
            className="transition-none"
          >
            Home
          </Button>
        </Link>
        <Link to="/about">
          <Button
            size="sm"
            color={location.pathname === "/about" ? "purple" : "gray"}
            outline={location.pathname !== "/about"}
            className="transition-none"
          >
            About
          </Button>
        </Link>
        <Link to="/projects">
          <Button
            size="sm"
            color={location.pathname === "/projects" ? "purple" : "gray"}
            outline={location.pathname !== "/projects"}
            className="transition-none"
          >
            Projects
          </Button>
        </Link>
      </div>
    </Navbar>
  );
}




