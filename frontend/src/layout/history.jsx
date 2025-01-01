import React, { useEffect,useState } from 'react';
import './history.css';

const History = () => {
    const [unreadNumber, setUnreadNumber] = useState(3);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('http://localhost:3000/notifications');
          const result = await response.json();
          setNotifications(result);
        };
    
        fetchData();
        const interval = setInterval(fetchData, 1000);
    
        return () => clearInterval(interval);
    }, []);

    const markAsRead = (id) => {
        setNotifications(notifications.map(notification => 
            notification.id === id ? { ...notification, read: true } : notification
        ));
        setUnreadNumber(unreadNumber - 1);
    };

    const markAllAsRead = () => {
        setNotifications(notifications.map(notification => 
            ({ ...notification, read: true })
        ));
        setUnreadNumber(0);
    };

    useEffect(() => {
        const sampleData = [
            { id: 1, message: 'Notification 1', date: '2023-10-01', time: '10:00 AM', read: false },
            { id: 2, message: 'Notification 2', date: '2023-10-02', time: '11:00 AM', read: false },
            { id: 3, message: 'Notification 3', date: '2023-10-03', time: '12:00 PM', read: false },
        ];
        setNotifications(sampleData);
    }, []);

    return (
        <div className="container">
            <div className="app">
                <div className="header">
                    <h2>
                        <span className="title">Notifications</span> 
                        <span className="unread-notification-number">{unreadNumber}</span>
                    </h2>
                    <p onClick={markAllAsRead}>Mark all as read</p>
                </div>
                <div className="body">
                    {notifications.map(notification => (
                        <div 
                            key={notification._id} 
                            className={`notification ${notification.read ? 'readed' : 'unreaded'}`} 
                            onClick={() => markAsRead(notification.id)}
                        >
                            <div className="text">
                                <div className="text-top">
                                    <p>{notification.message}</p>
                                </div>
                                <div className="text-bottom">{notification.date} {notification.time}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default History;