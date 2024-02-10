import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here, you can integrate your API call to send formData to your backend
    const url = 'https://izhhs24rz8.execute-api.us-east-1.amazonaws.com/v1'
            try {
              const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                
                headers: {
                  'Content-Type': 'application/json'
                  
                },
               
                body: JSON.stringify(formData) // body data type must match "Content-Type" header
              });
            if(response.ok){
                alert("message sent succesfully");
            }
              if (!response.ok) {
                alert("message sending failed");
              }
          
              return response.json(); // parses JSON response into native JavaScript objects
            } catch (error) {
              console.error('Error during fetch operation:', error);
              alert("message sending failed"); // Rethrow to ensure calling code can handle the error
            }
          
          
        console.log(formData);
        // Reset form or show a success message
    };

    return (
        <div className="contact-form-container">
            <style>{`
                .contact-form-container {
                    max-width: 800px; /* Increased width */
                    margin: auto;
                    padding: 20px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }

                .contact-form h2 {
                    text-align: center;
                    margin-bottom: 20px;
                }

                .contact-form label {
                    display: block;
                    margin-bottom: 5px;
                    color: #333;
                }

                .contact-form input[type="text"],
                .contact-form input[type="email"],
                .contact-form textarea {
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 20px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    box-sizing: border-box;
                }

                .contact-form textarea {
                    resize: vertical;
                    height: 150px;
                }

                .contact-form button[type="submit"] {
                    width: 100%;
                    padding: 10px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                }

                .contact-form button[type="submit"]:hover {
                    background-color: #0056b3;
                }
            `}</style>
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Contact Us</h2>
                <div>
                    <label htmlFor="fullName">Full Name:</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;
