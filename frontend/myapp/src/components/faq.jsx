import React, { useState } from 'react';
import './FaqStyle.css'; // You can place the CSS in a separate file and import it.
import { Link } from 'react-router-dom';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleItem = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container" style={{ color:'white'}} >
            <h1>FAQs</h1>

            <div className={`faq-item ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleItem(0)}>
                <div className="faq-question">
                    <span>1. Can I change my email-id or mobile number?</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                    Unfortunately, your Email ID or mobile number once registered cannot be changed. However, you can create a new account with your new contact number or Email ID.
                </div>
            </div>

            <div className={`faq-item ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleItem(1)}>
                <div className="faq-question">
                    <span>2. What payment methods do you accept?</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                    We accept Visa, MasterCard, American Express, and PayPal.
                </div>
            </div>

            <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleItem(2)}>
                <div className="faq-question">
                    <span>3. Can I return a product?</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                    Yes, you can return a product within 30 days of purchase. Please refer to our Return Policy for more details.
                </div>
            </div>

            <div className={`faq-item ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleItem(3)}>
                <div className="faq-question">
                    <span>4. Do you offer gift wrapping?</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                    Yes, we offer gift wrapping for an additional fee. You can select this option during checkout.
                </div>
            </div>

            <div className={`faq-item ${activeIndex === 4 ? 'active' : ''}`} onClick={() => toggleItem(4)}>
                <div className="faq-question">
                    <span>5. How can I contact customer service?</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                    You can contact our customer service team by phone at 1-800-123-4567 or by email at support@example.com.
                </div>
            </div>

            <div className={`faq-item ${activeIndex === 5 ? 'active' : ''}`} onClick={() => toggleItem(5)}>
                <div className="faq-question">
                    <span>6. Do you ship internationally?</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                    Yes, we ship internationally. Shipping costs and delivery times may vary depending on the destination.
                </div>
            </div>

            <div className={`faq-item ${activeIndex === 6 ? 'active' : ''}`} onClick={() => toggleItem(6)}>
                <div className="faq-question">
                    <span>7. Can I cancel my order?</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                    You can cancel your order within 24 hours of placing it. After that, please contact customer service for assistance.
                </div>
            </div>

            <div className={`faq-item ${activeIndex === 7 ? 'active' : ''}`} onClick={() => toggleItem(7)}>
                <div className="faq-question">
                    <span>8. Is my personal information secure?</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                    Yes, we take the security of your personal information seriously. We use encryption technology to protect your data.
                </div>
            </div>

            <div className={`faq-item ${activeIndex === 8 ? 'active' : ''}`} onClick={() => toggleItem(8)}>
                <div className="faq-question">
                    <span>9. Do you offer discounts for bulk purchases?</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                    Yes, we offer discounts for bulk purchases. Please contact our sales team for more information.
                </div>
            </div>

            <div className={`faq-item ${activeIndex === 9 ? 'active' : ''}`} onClick={() => toggleItem(9)}>
                <div className="faq-question">
                    <span>10. How do I change my account password?</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                    You can change your account password by logging into your account and visiting the Account Settings page.
                </div>
            </div>
            
        </div>
        
        

    );
};

export default Faq;
