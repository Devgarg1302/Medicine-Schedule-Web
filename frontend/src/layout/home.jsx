import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import doctor_helping from '../assets/images/doctor_helping.jpg';
import doctor_image from '../assets/images/doctor_image.jpg';
import trustworthy from '../assets/images/trustworthy.jpg';

const Home = () => {
    return (
        <div>

            <div className="notification">
                <p style={{ color: 'red', fontWeight: 'bold' }}>Warning: The server is currently not working. Please try again later.</p>
            </div>

            <div className="notification">
                <p>
                    You can view the backend code on our GitHub repository: 
                    <a style={{ color: 'blue', fontWeight: 'bold' }} href="https://github.com/Devgarg1302/Medicine-Schedule-web/tree/main/mongo" target="_blank" rel="noopener noreferrer">
                        GitHub Repository
                    </a>
                </p>
            </div>
            
            
            <main>
                <div className="intro">
                    <div className="intro-content">
                        <h1>Welcome to Our Medicine Management System</h1>
                        <p>
                            We help you manage your medication schedules for your loved ones with ease. Our system offers a
                            user-friendly interface to schedule and track medications, ensuring timely doses and a healthy
                            routine. Stay organized and keep your healthcare in check with our innovative solutions.
                        </p>
                    </div>
                    <div className="intro-image">
                        <img src={doctor_helping} alt="Medicine Management" width="500px" />
                    </div>
                </div>

                <div className="about">
                    <div className="about-image">
                        <img src={doctor_image} alt="Healthcare" width="500px" />
                    </div>
                    <div className="about-content">
                        <h2>About Our Service</h2>
                        <p>
                            Our mission is to provide a comprehensive platform for managing medication schedules. We offer
                            various features including customizable schedules, reminders, and tracking to ensure that your loved
                            ones never miss a dose. Our system is designed with your needs in mind, providing a seamless and
                            efficient solution for medication management.
                        </p>
                    </div>
                </div>


                {/* 
                <div className="cta">
                    <h2>Get Started Today</h2>
                    <p>
                        Join our community and start managing your medication schedules effectively. Sign up now and take control
                        of your healthcare with our easy-to-use platform.
                    </p>
                    <Link to="/layout/register" className="cta-button">Sign Up</Link>
                </div> */}

                <div className="why-choose-us">
                    <div className="content-text">
                        <h2>Why Choose Us?</h2>
                        <p>Our system offers several benefits that make it the best choice for managing medications:</p>
                        <ul>
                            <li><strong>Reliable:</strong> Our platform ensures timely reminders and accurate scheduling.</li>
                            <li><strong>Easy to Use:</strong> With a simple and intuitive interface, scheduling and managing medication is straightforward.</li>
                            <li><strong>Accessible Anywhere:</strong> Access your medication schedule from any device, anywhere, anytime.</li>
                            <li><strong>Secure:</strong> Your data is protected with advanced security measures, ensuring privacy and confidentiality.</li>
                        </ul>
                        <p>Choose us to experience a seamless, secure, and supportive approach to medication management. Your family’s health deserves the best, and we’re here to deliver it.</p>
                    </div>
                    <div className="content-image">
                        <img src={trustworthy} alt="Trustworthy Service" width="500px" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;