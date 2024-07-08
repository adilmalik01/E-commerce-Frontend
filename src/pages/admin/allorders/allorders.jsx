import { useEffect, useState } from "react";
import baseUrl from "../../../core";
import axios from "axios";
import OrderItem from "../orderItem/orderItem";

const AllOrders = () => {
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        try {
            const response = await axios.get(`${baseUrl}/api/v1/all-orders`);
            setOrders(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="min-h-screen w-full py-10 overflow-hidden ">
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-semibold mb-4">Orders</h1>
                {orders?.map(orderData => (
                    <OrderItem key={orderData._id} order={orderData} />
                ))}
            </div>
        </div>
    );
};

export default AllOrders;
