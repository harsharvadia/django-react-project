
// import React, { useState } from 'react';
// import axios from 'axios';
// import './chatbot.css'; // Import your CSS file

// const Chatbot = ({ onClose }) => {
//     const [message, setMessage] = useState('');
//     const [chatHistory, setChatHistory] = useState([]);

//     const sendMessage = async () => {
//         try {
//             const response = await axios.post('http://localhost:8000/chatbot/chat/', {
//                 message: message,
//             });
//             const botResponse = response.data.response;
//             setChatHistory([...chatHistory, { user: message, bot: botResponse }]);
//             setMessage('');
//         } catch (error) {
//             console.error('Error sending message:', error);
//         }
//     };

//     return (
//         <div className="chat-modal-content">
//             <div className="modal-header">
//                 <h2 className="modal-title">Chatbot</h2>
//                 <span className="close" onClick={onClose}>&times;</span>
//             </div>
//             <div className="chat-messages" style={{ maxHeight: '300px', overflowY: 'auto' }}>
//                 {chatHistory.map((chat, index) => (
//                     <div key={index}>
//                         <p><strong>User:</strong> {chat.user}</p>
//                         <p><strong>Bot:</strong> {chat.bot}</p>
//                     </div>
//                 ))}
//             </div>
//             <div className="chat-input">
//                 <input
//                     type="text"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     placeholder="Type your message..."
//                     style={{ width: '80%', marginRight: '5px' }} // Add style to input
//                 />
//                 <button onClick={sendMessage}>Send</button>
//             </div>
//         </div>
//     );
// };

// export default Chatbot;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './chatbot.css'; // Import your CSS file

const Chatbot = ({ onClose }) => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    // Initial message to display when the chatbot opens
    useEffect(() => {
        const initialMessage = `
            Hello! Press the query number according to your query:
            1. What items does the website have?
            2. Do you accept return/replacement in orders?
            3. How to see my recent orders?
            4. Does the website have any bonus points system after purchase?
            5. Do you have any subscriptions policy
            6. Do you have any outlet.
        `;
        setChatHistory([{ bot: initialMessage.trim() }]); // Set initial message directly to the state
    }, []); // Empty dependency array ensures this runs only once

    const sendMessage = async () => {
        try {
            const response = await axios.post('http://localhost:8000/chatbot/chat/', {
                message: message,
            });
            const botResponse = response.data.response;
            setChatHistory((prevHistory) => [
                ...prevHistory,
                { user: message },
                { bot: botResponse },
            ]);
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="chat-modal-content">
            <div className="modal-header">
                <h2 className="modal-title">Chatbot</h2>
                <span className="close" onClick={onClose}>&times;</span>
            </div>
            <div className="chat-messages" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {chatHistory.map((chat, index) => (
                    <div key={index}>
                        {chat.user && <p><strong>User:</strong> {chat.user}</p>}
                        {chat.bot && (
                            <p>
                                <strong>Bot:</strong><br />
                                {chat.bot.split('\n').map((line, i) => (
                                    <span key={i}>{line}<br /></span> // Split lines and add a line break
                                ))}
                            </p>
                        )}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    style={{ width: '80%', marginRight: '5px' }} // Add style to input
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;
