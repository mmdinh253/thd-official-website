import React from "react";

const newsData = [
    {
        title: "Community Picnic This Sunday!",
        date: "February 10, 2025",
        description: "Join us for a fun-filled community picnic at Central Park. Bring your family and friends!"
    },
    {
        title: "Youth Group Meeting",
        date: "February 15, 2025",
        description: "All high schoolers are invited to the youth group meeting. Games, discussions, and snacks will be provided."
    },
    {
        title: "Lenten Retreat for Families",
        date: "March 1, 2025",
        description: "A day of prayer and reflection for families. Register now to secure your spot!"
    }
];

const News = () => {
    return (
        <div className="page-container">
            <h1 className="subtitle">News</h1>
            <div className="description">
                {newsData.map((item, index) => (
                    <div key={index} className="news-item">
                        <h2 className="news-title">{item.title}</h2>
                        <p className="news-date">{item.date}</p>
                        <p className="news-description">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
