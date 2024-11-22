import { Navbar, TextInput, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  return (
    <Navbar className="border-b-2">
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
      <div className="flex items-center gap-2 md:order-2">
        <TextInput
          type="text"
          placeholder="Search..."
          className="hidden lg:block"
        />
        <Button className="hidden sm:inline w-12 h-10" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue">Sign In</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/projects">Projects</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
