
// import React, { useEffect, useState } from 'react';
// import Cookies from 'js-cookie'; 
// import { useNavigate } from 'react-router-dom'; 

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
    
//     const loggedInUser = Cookies.get("username");

//     if (loggedInUser) {
      
//       const userCartKey = `cart_${loggedInUser}`;
//       const items = JSON.parse(localStorage.getItem(userCartKey)) || [];

      
//       const updatedItems = items.map(item => ({
//         ...item,
//         quantity: item.quantity || 1 
//       }));
//       setCartItems(updatedItems);

  
//       const initialTotalPrice = calculateTotalPrice(updatedItems);
//       setTotalPrice(initialTotalPrice);
//     }
//   }, []);

//   const calculateTotalPrice = (items) => {
//     return items.reduce((total, item) => total + (item.price * item.quantity), 0);
//   };

//   const handleRemoveFromCart = (index) => {
//     const loggedInUser = Cookies.get("username");
//     const userCartKey = `cart_${loggedInUser}`;
//     const updatedCart = cartItems.filter((_, i) => i !== index);
    
    
//     localStorage.setItem(userCartKey, JSON.stringify(updatedCart));
//     setCartItems(updatedCart);
//     setTotalPrice(calculateTotalPrice(updatedCart));
//   };

//   const handleQuantityChange = (index, newQuantity) => {
//     const loggedInUser = Cookies.get("username");
//     const userCartKey = `cart_${loggedInUser}`;

//     const updatedCart = cartItems.map((item, i) =>
//       i === index ? { ...item, quantity: parseInt(newQuantity) } : item
//     );


//     setCartItems(updatedCart);
//     localStorage.setItem(userCartKey, JSON.stringify(updatedCart));


//     setTotalPrice(calculateTotalPrice(updatedCart));
//   };

//   const handleBuyNow = () => {
//     const loggedInUser = Cookies.get("username");
//     const userCartKey = `cart_${loggedInUser}`;


//     setCartItems([]);
//     setTotalPrice(0);

//     localStorage.removeItem(userCartKey);


//     navigate('/');
//   };

//   if (cartItems.length === 0) {
//     return (
//       <div style={{ marginTop: '5rem', textAlign: 'center', color: '#fff' }}>
//         <h2>Your Cart is Empty</h2>
//         <p>Please add some items to your cart.</p>
//       </div>
//     );
//   }

//   return (
//     <div style={{  padding: '0 150px', backgroundColor: '#1b1b1b', minHeight: '100vh' }}>
//       <h2 style={{ color: '#f8f9fa', marginBottom: '2rem',textAlign:'center' }}>Your Cart</h2>
//       <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//         {cartItems.map((item, index) => (
//           <div key={index} style={{
//             display: 'flex',
//             border: '1px solid #444',
//             borderRadius: '10px',
//             overflow: 'hidden',
//             boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
//             transition: 'transform 0.3s, box-shadow 0.3s',
//             padding: '10px',
//             backgroundColor: '#282828',
//             color: '#f8f9fa'
//           }}>
//             {/* Image Section (4 columns) */}
//             <div style={{ flex: '0 0 33.33%', padding: '10px', backgroundColor: '#333' }}>
//               <img 
//                 src={item.image || 'placeholder.jpg'} 
//                 alt={item.name} 
//                 style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
//               />
//             </div>
            
            
//             <div style={{ flex: '0 0 66.67%', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//               <div>
//                 <h5 style={{ marginBottom: '10px', fontSize: '1.5rem', color: '#f8f9fa' }}>{item.name}</h5>
//                 <p style={{ fontSize: "1.8rem", color: "#4caf50", margin: 0 }}>
//                   <sup>₹</sup>{item.price}
//                 </p>
//                 <p style={{ color: "gray", textDecoration: "line-through", marginBottom: "5px" }}>M.R.P: ₹{item.original_price}</p>
//                 <p style={{ color: "#f44336", fontSize: "1.2rem", margin: 0 }}>({item.discount}% off)</p>
//               </div>
              
//               {/* Quantity Dropdown */}
//               <div style={{ marginTop: '10px' }}>
//                 <label htmlFor={`quantity_${index}`} style={{ marginRight: '10px' }}>Quantity:</label>
//                 <select
//                   id={`quantity_${index}`}
//                   value={item.quantity || 1}
//                   onChange={(e) => handleQuantityChange(index, e.target.value)}
//                   style={{
//                     padding: '5px',
//                     backgroundColor: '#444',
//                     color: '#fff',
//                     border: '1px solid #555',
//                     borderRadius: '5px'
//                   }}
//                 >
//                   {[1, 2, 3, 4, 5].map((qty) => (
//                     <option key={qty} value={qty}>{qty}</option>
//                   ))}
//                 </select>
//               </div>
              
//               {/* Remove Button */}
//               <button
//                 style={{
//                   backgroundColor: '#e50914',
//                   color: '#fff',
//                   border: 'none',
//                   padding: '10px 20px',
//                   borderRadius: '5px',
//                   cursor: 'pointer',
//                   transition: 'background-color 0.3s, box-shadow 0.3s',
//                   alignSelf: 'flex-start',
//                   marginTop: '10px'
//                 }}
//                 onClick={() => handleRemoveFromCart(index)}
//                 onMouseOver={(e) => e.target.style.boxShadow = '0 4px 8px rgba(229, 9, 20, 0.5)'}
//                 onMouseOut={(e) => e.target.style.boxShadow = 'none'}
//               >
//                 Remove from Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Total Price Section */}
//       <div style={{
//         marginTop: '20px',
//         padding: '20px',
//         backgroundColor: '#333',
//         borderRadius: '10px',
//         textAlign: 'right',
//         color: '#fff'
//       }}>
//         <h3>Grand Total: ₹{totalPrice}</h3>
//       </div>

//       {/* Buy Now Button */}
//       <div style={{ textAlign: 'right', marginTop: '20px' }}>
//         <button
//           style={{
//             backgroundColor: '#4caf50',
//             color: '#fff',
//             border: 'none',
//             padding: '15px 30px',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             fontSize: '1.2rem',
//             transition: 'background-color 0.3s'
//           }}
//           onClick={handleBuyNow}
//         >
//           Buy Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = Cookies.get("username");

    if (loggedInUser) {
      const userCartKey = `cart_${loggedInUser}`;
      const items = JSON.parse(localStorage.getItem(userCartKey)) || [];

      const updatedItems = items.map(item => ({
        ...item,
        quantity: item.quantity || 1 
      }));
      setCartItems(updatedItems);
      setTotalPrice(calculateTotalPrice(updatedItems));
    }
  }, []);

  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleRemoveFromCart = (index) => {
    const loggedInUser = Cookies.get("username");
    const userCartKey = `cart_${loggedInUser}`;
    const updatedCart = cartItems.filter((_, i) => i !== index);

    localStorage.setItem(userCartKey, JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    setTotalPrice(calculateTotalPrice(updatedCart));
  };

  const handleQuantityChange = (index, newQuantity) => {
    const loggedInUser = Cookies.get("username");
    const userCartKey = `cart_${loggedInUser}`;

    const updatedCart = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: parseInt(newQuantity) } : item
    );

    setCartItems(updatedCart);
    localStorage.setItem(userCartKey, JSON.stringify(updatedCart));
    setTotalPrice(calculateTotalPrice(updatedCart));
  };

  const handleBuyNow = async () => {
    const loggedInUser = Cookies.get("username");
  
    if (!loggedInUser) {
      alert('Please log in to place an order.');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8000/order/create_order/', {
        username: loggedInUser,
        cartItems: cartItems,  // Send cart items
        totalPrice: totalPrice  // Send total price
      });
  
      console.log(response);  // Log the successful response
  
      if (response.status === 201) {
        alert('Order placed successfully!');
        const userCartKey = `cart_${loggedInUser}`;
        setCartItems([]);
        setTotalPrice(0);
        localStorage.removeItem(userCartKey);
        navigate('/');
      }
    } catch (error) {
      console.error('Error placing order:', error.response || error.message);  // Log the actual error message
      alert('Error placing order. Please check the console for more details.');
    }
  };
  

  if (cartItems.length === 0) {
    return (
      <div style={{ marginTop: '5rem', textAlign: 'center', color: '#fff' }}>
        <h2>Your Cart is Empty</h2>
        <p>Please add some items to your cart.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '0 150px', backgroundColor: '#1b1b1b', minHeight : '100vh' }}>
      <h2 style={{ color: '#f8f9fa', marginBottom: '2rem', textAlign: 'center' }}>Your Cart</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {cartItems.map((item, index) => (
          <div key={index} style={{
            display: 'flex',
            border: '1px solid #444',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            padding: '10px',
            backgroundColor: '#282828',
            color: '#f8f9fa'
          }}>
            {/* Image Section */}
            <div style={{ flex: '0 0 33.33%', padding: '10px', backgroundColor: '#333' }}>
              <img 
                src={item.image || 'placeholder.jpg'} 
                alt={item.name} 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
              />
            </div>

            {/* Product Details */}
            <div style={{ flex: '0 0 66.67%', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h5 style={{ marginBottom: '10px', fontSize: '1.5rem', color: '#f8f9fa' }}>{item.name}</h5>
                <p style={{ fontSize: "1.8rem", color: "#4caf50", margin: 0 }}>
                  <sup>₹</sup>{item.price}
                </p>
                <p style={{ color: "gray", textDecoration: "line-through", marginBottom: "5px" }}>M.R.P: ₹{item.original_price}</p>
                <p style={{ color: "#f44336", fontSize: "1.2rem", margin: 0 }}>({item.discount}% off)</p>
              </div>

              {/* Quantity Dropdown */}
              <div style={{ marginTop: '10px' }}>
                <label htmlFor={`quantity_${index}`} style={{ marginRight: '10px' }}>Quantity:</label>
                <select
                  id={`quantity_${index}`}
                  value={item.quantity || 1}
                  onChange={(e) => handleQuantityChange(index, e.target.value)}
                  style={{
                    padding: '5px',
                    backgroundColor: '#444',
                    color: '#fff',
                    border: '1px solid #555',
                    borderRadius: '5px'
                  }}
                >
                  {[1, 2, 3, 4, 5].map((qty) => (
                    <option key={qty} value={qty}>{qty}</option>
                  ))}
                </select>
              </div>

              {/* Remove Button */}
              <button
                style={{
                  backgroundColor: '#e50914',
                  color: '#fff',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s, box-shadow 0.3s',
                  alignSelf: 'flex-start',
                  marginTop: '10px'
                }}
                onClick={() => handleRemoveFromCart(index)}
                onMouseOver={(e) => e.target.style.boxShadow = '0 4px 8px rgba(229, 9, 20, 0.5)'}
                onMouseOut={(e) => e.target.style.boxShadow = 'none'}
              >
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total Price Section */}
      <div style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#333',
        borderRadius: '10px',
        textAlign: 'right',
        color: '#fff'
      }}>
        <h3>Grand Total: ₹{totalPrice}</h3>
      </div>

      {/* Buy Now Button */}
      <div style={{ textAlign: 'right', marginTop: '20px' }}>
        <button
          style={{
            backgroundColor: '#4caf50',
            color: '#fff',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1.2rem',
            transition: 'background-color 0.3s'
          }}
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CartPage;
