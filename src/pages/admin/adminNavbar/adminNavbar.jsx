import { useState } from "react";
import { Link } from "react-router-dom";
import baseUrl from "../../../core";
import axios from "axios";
import "./adminNavbar.css"
import * as Icon from "react-bootstrap-icons";

const AdminNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(`${baseUrl}/api/v1/logout`);
      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const styles = {
    link:
      "text-xl flex items-center transition-all duration-700 justify-center hover:bg-gray-600 hover:text-white h-16 mt-5 rounded-tl-none rounded-bl-none rounded-full font-semibold w-11/12 bg-white text-black",
    sidebar:
      "fixed h-screen w-64 bg-white border-r border-black/50 transition-transform duration-300 ease-in-out z-30 overflow-y-auto",
    sidebarHidden: "transform -translate-x-full",
    sidebarVisible: "transform translate-x-0",
    backdrop: "fixed inset-0 bg-black opacity-50 z-20",
  };

  return (
    <>
      <div className="div">
        <button
          className="fixed top-4 left-4 z-40 text-black"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <Icon.X size={27} /> : <Icon.List size={30} />}
        </button>
        {isSidebarOpen && (
          <div className={styles.backdrop} onClick={toggleSidebar}></div>
        )}
      </div>
      <div
        className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarVisible : styles.sidebarHidden
          }`}
      >
        <div className="sidebar w-full h-32 flex justify-center items-center relative bg-white z-30">
          <h1 className="font-semibold text-5xl">Invento</h1>
        </div>
        <div className="w-full flex justify-center items-start flex-col">
          <Link
            className="text-xl text-center flex transition-all duration-700 items-center justify-center hover:bg-gray-600 hover:text-white h-16 mt-5 rounded-tl-none rounded-bl-none rounded-full font-semibold w-11/12 bg-white text-black"
            to="/"
          >
            Dashboard
          </Link>
          <Link className={styles.link} to="/newproduct">
            Add Product
          </Link>
          <Link className={styles.link} to="/category">
            Category
          </Link>
          <Link className={styles.link} to="/adminProducts">
            View Products
          </Link>
          <Link className={styles.link} to="/allorders">
            All Orders
          </Link>
          <Link className={styles.link} to="/allusers">
            All Users
          </Link>
          <div
            onClick={handleLogout}
            className="text-xl flex items-center transition-all duration-700 justify-center hover:bg-gray-600 hover:text-white h-16 mt-5 rounded-tl-none rounded-bl-none rounded-full font-semibold w-11/12 bg-white text-black cursor-pointer"
          >
            Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;
