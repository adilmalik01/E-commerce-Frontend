import { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import io from "socket.io-client";
import { Link } from "react-router-dom";
import baseUrl from "../../../core";

// Initialize socket connection
const socket = io(baseUrl, {
  transports: ['websocket']
});

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [category, setCategorys] = useState([]);
  const [admin, setAdmins] = useState([]);

  useEffect(() => {
    // Setup socket listener for new orders
    socket.on("newOrder", (order) => {
      setNotifications((prevNotifications) => [...prevNotifications, order]);
    });

    // Cleanup socket listener on component unmount
    return () => {
      socket.off("newOrder");
    };
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/allproducts`);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/all-orders`);
      setOrders(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/allusers`);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAdmins = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/admins`);
      setAdmins(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategory = async (e) => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/all-category`);
      setCategorys(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchProducts();
    fetchOrders();
    fetchCategory();
    fetchAdmins();

    AOS.init({
      duration: 1000,
    });
  }, []);

  const removeNotification = (NId) => {
    notifications.splice(NId, 1);
  };
  const style = {
    container: "w-full flex justify-center min-h-screen overflow-hidden",
    statsContainer:
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center w-9/12 min-h-screen",
    statBox:
      "flex flex-col justify-center items-center w-full h-36 rounded-xl text-white font-bold p-5",
    statTitle: "text-2xl",
    statValue: "text-3xl",
    notificationsContainer: "notifications flex flex-col min-h-52 absolute right-4 top-6",
    notificationBox: "bg-yellow-500 p-4 rounded-md mb-2",
    notificationText: "text-black",
  };

  return (
    <div className={`${style.container} `}>
      <div className={style.statsContainer}>
        <div className={`${style.statBox} bg-blue-500`}>
          <h1 className={style.statTitle}>Total Products</h1>
          <h1 className={style.statValue}>{products.length}</h1>
        </div>
        <div className={`${style.statBox} bg-orange-500`}>
          <h1 className={style.statTitle}>Total Users</h1>
          <h1 className={style.statValue}>{users.length}</h1>
        </div>
        <div className={`${style.statBox} bg-green-500`}>
          <h1 className={style.statTitle}>Total Orders</h1>
          <h1 className={style.statValue}>{orders.length}</h1>
        </div>
        <div className={`${style.statBox} bg-red-500`}>
          <h1 className={style.statTitle}>Total Categorys</h1>
          <h1 className={style.statValue}>{category.length}</h1>
        </div>
        <div className={`${style.statBox} bg-purple-500`}>
          <h1 className={style.statTitle}>Total Admins</h1>
          <h1 className={style.statValue}>{admin.length}</h1>
        </div>
      </div>
      <div className="overflow-hidden">

        {notifications.length > 0 && (
          <div className="notifications flex flex-col min-h-52 absolute right-4">
           {notifications.map((notification, index) => (
          <div
            key={index}
            data-aos="fade-top"
            className={style.notificationBox}
          >
            <Link to={`/order/${notification._id}`}>
              <p className={style.notificationText}>
                New order from {notification.userName}
              </p>
            </Link>
          </div>
        ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
