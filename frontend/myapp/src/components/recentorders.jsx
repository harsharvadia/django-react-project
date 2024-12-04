import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie'; 
import './recent.css'; 

const RecentOrders = () => {
    const [orders, setOrders] = useState([]);
    const loggedInUser = Cookies.get('username'); 

    useEffect(() => {
        axios.get('http://localhost:8000/order/recent_orders/')
            .then(response => {
                console.log('Orders:', response.data); 
                setOrders(response.data); 
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
            });
    }, []);

    // Filter orders to show only those belonging to the logged-in user
    const userOrders = orders.filter(order => order.username === loggedInUser);

    return (
        <div className="orders-container">
            <h1 className="title">All Orders</h1>
            {userOrders.length > 0 ? (
                userOrders.map((order, index) => (
                    <div key={index} className="order-card">
                        <h3>Order by {order.username}</h3>
                        <p>Order Date: {new Date(order.created_at).toLocaleDateString()}</p>
                        <p>Total Price: ₹{order.total_price}</p>

                        <h4>Items:</h4>
                        {order.items.length > 0 ? (
                            order.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="item-card">
                                    <p>Product Name: {item.product_name}</p>
                                    <p>Price: ₹{item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                            ))
                        ) : (
                            <p>No items found for this order</p>
                        )}
                    </div>
                ))
            ) : (
                <p>No orders found</p>
            )}
        </div>
    );
};

export default RecentOrders;
