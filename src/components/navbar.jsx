import { useContext, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/context";

const Navbar = () => {
  const { state } = useContext(GlobalContext);
  const parseing = JSON.parse(localStorage.getItem("cart")) || [];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="w-full fixed top-0 h-24 bg-white flex z-[99] justify-between items-center px-4 md:px-8 ">
        <div className="flex justify-between  items-center w-full md:w-auto">
          <img
            src="https://codsoft-landing-page-adil.netlify.app/images/uniqlo_medium.png"
            alt=""
            className="h-10"
          />
          <button
            className="md:hidden text-gray-500  mr-5 z-20"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <Icon.X size={32} /> : <Icon.List size={27} />}
          </button>
        </div>
        <nav className={`fixed md:static top-0 left-0 w-full h-full md:h-auto bg-white md:bg-transparent transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'} md:transform-none flex flex-col md:flex-row justify-center items-center md:w-auto md:flex md:items-center z-10`}>
          <ul className="list-none flex flex-col md:flex-row justify-center items-center w-full md:w-auto">
            <li className="m-4 text-gray-500 cursor-pointer text-lg font-semibold">
              <Link to={"/"} onClick={closeMenu}>Home</Link>
            </li>
            <li className="m-4 text-gray-500 cursor-pointer text-lg font-semibold">
              <Link to={"/products"} onClick={closeMenu}>Product</Link>
            </li>
            <li className="m-4 cursor-pointer text-gray-500 text-lg font-semibold">
              <Link to={"/about"} onClick={closeMenu}>About</Link>
            </li>
            <li className="m-4 cursor-pointer text-gray-500 text-lg font-semibold">
              <Link to={"/contact"} onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          {/* <button className="text-gray-500 md:hidden mr-4">
            <Icon.Search color="black" size={20} />
          </button> */}
          <Link className="flex items-center text-gray-500" to={"/cart"}>
            <button
              type="button"
              className="relative inline-flex items-center p-1 text-sm font-medium focus:ring-4 focus:outline-none"
            >
              <Icon.Cart size={20} />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2">
                {`${parseing.length}`}
              </div>
            </button>
          </Link>
          {state.isLogin ? (
            <div className="circle cursor-pointer rounded-full h-10 w-10 ml-4">
              <Link
                className="circle cursor-pointer bg-black rounded-full"
                to={"/profile"}
              >
                <img
                  className="rounded-full h-full w-full object-cover"
                  src={state.user.avatar}
                  alt=""
                />
              </Link>
            </div>
          ) : (
            <button className="text-gray-500 ml-4">
              <Link to={"/login"}>
                <Icon.Person color="black" size={20} />
              </Link>
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
