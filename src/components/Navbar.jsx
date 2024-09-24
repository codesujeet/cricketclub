import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/home";
import Container from "./Container";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = () => {
    alert("Team registration page Error Not responsing.");
  };
  return (
    <>
    <nav className="z-40 py-2">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <img className="h-[40px] w-[120px]" src={logo} alt="Workflow" />
            <div className="hidden md:block">
              <div className="flex items-baseline ml-10 space-x-4">
                <Link
                  to="/"
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-button-primary hover:text-white"
                >
                  Home
                </Link>
                <button  onClick={handleButtonClick} >
                <Link
                   to="/"
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-button-primary hover:text-white"
                >
                  Team Registration
                </Link>
                </button>
              </div>
            </div>
          </div>

          <Link to="/">
            <div className="hidden px-4 py-1 md:block hover:bg-button-primary rounded-xl">
              Log In
            </div>
          </Link>
          <div className="flex -mr-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </Container>
    </nav>
    </>
  );
}
export default Navbar;
