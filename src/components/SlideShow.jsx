import React from 'react'
import './SlideShow.css'

function SlideShow() {
    const articles = [
        {
            id: 1,
            category: 'ÉQUIPE PREMIÈRE',
            date: 'March 5th 2025',
            title: 'Bernard Lama and Raí look back on their clash with Liverpool!',
            image: '/f (1).jpg',  // Use absolute path
        },
        {
            id: 2,
            category: 'ÉQUIPE PREMIÈRE',
            date: 'March 5th 2025',
            title: 'Raí: "It\'ll get pretty emotional watching this match"',
            image: '/f (6).jpg',
        },
        {
            id: 3,
            category: 'ÉQUIPE PREMIÈRE',
            date: 'March 5th 2025',
            title: 'Bernard Lama: "A very high-intensity match"',
            image: '/f (4).jpg',
        },
    ];

    return (
        <div className="grid-section-slide">
            {articles.map((article) => (
                <div key={article.id} className="grid-item">
                    <img src={article.image} className="article-image-slide" alt={article.title} />
                    <p className="category">
                        <span className="category-text">{article.category}</span>
                        <span className="separator"> | </span>
                        <span className="date">{article.date}</span>
                    </p>
                    <h3 className="article-title">{article.title}</h3>
                </div>
            ))}
        </div>
    );
}

export default SlideShow;

