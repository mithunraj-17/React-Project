import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission or API call can be added here
    alert(`Thank you for contacting us, ${name}! We'll get back to you soon.`);
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us for any inquiries, feedback, or support. We’re here to help!</p>

      <div className="contact-details">
        <h2>Our Contact Information</h2>
        <p><strong>Email:</strong> support@toystore.com</p>
        <p><strong>Phone:</strong> +91-6382070147</p>
        <p><strong>Address:</strong> 123 Toy Street, Playtown, Funland 45678</p>
        <p>Our customer service team is available Monday to Friday, 9 AM to 5 PM.</p>
      </div>

      <div className="contact-form">
        <h2>Get in Touch with Us</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </label>
          <label>
            Email:
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </label>
          <label>
            Message:
            <textarea 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
            ></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
