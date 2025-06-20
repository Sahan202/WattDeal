import React from "react";

const HeroSection = () => {
    return (
        <section className="hero-blog">
            <img 
                src="https://storage.googleapis.com/a1aa/image/qKoFtqhYxfSP6CUjUAUoeEO_qXBMhnAPKNH2Z-yPuiQ.jpg" 
                alt="Showcase of electrical products" 
                className="hero-image-blog" 
            />
            <div className="hero-content-blog">
                <h1>#PowerUp</h1>
                <p>Explore innovative electrical solutions for your home and business!</p>
            </div>
        </section>
    );
};

const Article = ({ date, image, title, description, onReadMore }) => {
    return (
        <div className="article-blog">
            <div className="date">{date}</div>
            <div className="article-content-blog">
                <img 
                    src={image} 
                    alt="Article visual" 
                    className="article-image-blog" 
                />
                <div className="article-text-blog">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <button className="read-more" onClick={onReadMore}>
                        CONTINUE READING
                    </button>
                </div>
            </div>
        </div>
    );
};

const ContentSection = () => {
    const articles = [
        {
            date: "08/01",
            image: "https://plus.unsplash.com/premium_photo-1728831287366-54f08f8f9910?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFNtYXJ0JTIwSG9tZSUyMFN5c3RlbXN8ZW58MHx8MHx8fDA%3D",
            title: "Smart Home Systems",
            description: "Upgrade your living experience with cutting-edge smart home systems, offering convenience and energy efficiency.",
        },
        {
            date: "10/01",
            image: "https://images.unsplash.com/photo-1546827209-a218e99fdbe9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UG93ZXIlMjBUb29sc3xlbnwwfHwwfHx8MA%3D%3D",
            title: "Power Tools",
            description: "Discover our range of durable and reliable power tools for all your DIY and professional projects.",
        },
        {
            date: "12/01",
            image: "https://media.istockphoto.com/id/171311412/photo/womans-hand-turning-off-the-light.webp?a=1&b=1&s=612x612&w=0&k=20&c=u9f8Q0RQUGGQvYFR4u5Bsi4FbpTummiNw48F2ZtdBGs=",
            title: "Electrical Switches",
            description: "Browse our selection of stylish and functional electrical switches to enhance your home decor and utility.",
        },
        {
            date: "13/01",
            image: "https://media.istockphoto.com/id/1165563737/photo/electricity.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yjbu0OiOpQBKYK6K5gnv-IQ6lVKUh5Aw3Nxt2GmCOMk=",
            title: "Cables and Wires",
            description: "High-quality cables and wires for all your electrical needs, ensuring safety and performance.",
        },
        {
            date: "15/02",
            image: "https://media.istockphoto.com/id/896358708/photo/light-bulb-with-brain-inside-the-hands-of-the-businessman.webp?a=1&b=1&s=612x612&w=0&k=20&c=wSpGFelhc9uRMq6Kx_xmTk9bbZ1hJrUnii6CRXvqqY8=",
            title: "Lighting Solutions",
            description: "Illuminate your spaces with our energy-efficient and elegant lighting solutions.",
        },
        {
            date: "18/02",
            image: "https://images.unsplash.com/photo-1562408954-be39449c4962?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Electrical Panels",
            description: "Explore our reliable and robust electrical panels designed for residential and commercial use.",
        },
    ];

    const handleReadMore = (article) => {
        alert(Navigating to detailed page for: ${article.title});
    };

    return (
        <section className="content-blog">
            <div className="container-blog">
                {articles.map((article, index) => (
                    <Article 
                        key={index} 
                        date={article.date} 
                        image={article.image} 
                        title={article.title} 
                        description={article.description} 
                        onReadMore={() => handleReadMore(article)}
                    />
                ))}
            </div>
        </section>
    );
};

const App = () => {
    return (
        <div>
            <HeroSection />
            <ContentSection />
        </div>
    );
};


// Styles combined directly in the file
const styles = `
/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

blog-body {
    font-family: Arial, sans-serif;
    color: #333;
    line-height: 1.6;
    background-color: white;
}

/* Hero Section */
.hero-blog {
    position: relative;
    width: 100%;
    height: 24rem;
    overflow: hidden;
}

.hero-image-blog {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-content-blog {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    background: rgba(0, 0, 0, 0.5);
}

.hero-content-blog h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.hero-content-blog p {
    font-size: 1.25rem;
}

/* Content Section */
.content-blog {
    padding: 2rem 1rem;
    background-color: #ffffff;
}

.container-blog {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

/* Article */
.article-blog {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background: #f4f4f4;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.date {
    font-size: 2rem;
    font-weight: bold;
    color: #718096;
}

.article-content-blog {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.article-image-blog {
    width: 100%;
    max-width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
}

.article-text-blog h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2d3748;
}

.article-text-blog p {
    font-size: 1rem;
    color: #4a5568;
}

.read-more {
    display: inline-block;
    font-size: 1rem;
    color: #3182ce;
    text-decoration: none;
    font-weight: bold;
    margin-top: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
}

.read-more:hover {
    text-decoration: underline;
}

/* Responsive Styles */
@media (min-width: 768px) {
    .article-blog {
        flex-direction: row;
    }

    .date {
        width: 15%;
        text-align: center;
    }

    .article-content-blog {
        width: 85%;
        flex-direction: row;
        gap: 1.5rem;
    }

    .article-image-blog {
        width: 30%;
        height: auto;
    }

    .article-text-blog {
        width: 70%;
    }
}
`;

// Apply styles
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

export default App;