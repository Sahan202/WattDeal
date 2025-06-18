import React from "react";

const HeroSection = () => (
  <section className="home-hero-section home-container">
    <div className="home-hero-text">
      <h1>"Discover top-quality electrical products at unbeatable prices with our factory outlet."
</h1>
      <h2>On all products</h2>
      <p className="home-savings-text">
        Save big and make a sustainable choice for the planet
      </p>
      <a href="/blog" button className="home-shop-button">Learn More</a>
    </div>
    <div className="home-hero-image">
      <img
        src="https://media.istockphoto.com/id/1211554164/photo/3d-render-of-home-appliances-collection-set.jpg?s=612x612&w=0&k=20&c=blm3IyPyZo5ElWLOjI-hFMG-NrKQ0G76JpWGyNttF8s="
        width="450px"
        height="400"
      />
    </div>
  </section>
);

const ProductCard = ({ imgSrc, brand, title, price }) => (
  <div className="home-product-card">
    <img src={imgSrc} alt={title} />
    <div className="home-brand">{brand}</div>
    <div className="home-product-title">{title}</div>
    <div className="home-rating">
      {[...Array(5)].map((_, i) => (
        <i key={i} className="fas fa-star"></i>
      ))}
    </div>
    <div className="home-price">${price}</div>
    <button className="home-cart-button">
      <i className="fas fa-shopping-cart"></i>
    </button>
  </div>
);

const ProductsGrid = () => {
  const products = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1721613877687-c9099b698faa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      brand: "Samsung",
      title: "Double Door Refrigerator",
      price: 78,
    },
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1705700604993-60c6c3ddd31b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxhbXB8ZW58MHx8MHx8fDA%3D",
      brand: "philips",
      title: "Yellow Lamp",
      price: 78,
    },
    {
        imgSrc:
          "https://media.istockphoto.com/id/1395191574/photo/black-led-tv-television-screen-blank-isolated.jpg?s=612x612&w=0&k=20&c=ps14JZJh0ebkINcbQyHFsR1J5EC7ozkj_WO7Fh_9IOI=",
        brand: "Sony",
        title: "Large LED TV",
        price: 78,
      },
      {
        imgSrc:
          "https://media.istockphoto.com/id/2082936498/photo/white-washing-machine-wooden-top-cabinet-cupboard-with-rattan-basket-in-laundry-room-in.jpg?s=2048x2048&w=is&k=20&c=ytAJ9N6AdR0_JiNzZHL2zgO2YZ75Rc0HFRKioF1oSNk=",
        brand: "haier",
        title: "washing machine",
        price: 78,
      },
    // Add more products as needed
  ];

  return (
    <section className="home-products-section home-container">
      <h1>Featured Products</h1>
      <p>Top Picks for Your Electrical Items</p>
      <div className="home-products-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

const NewsletterSection = () => (
  <section className="home-newsletter">
    
  </section>
);

const Banner = () => (
  <section className="home-banner">
    <div className="home-banner-content">
      <h4 className="home-banner-subtitle">Repair Services</h4>
      <h2 className="home-banner-title">
        Up to <span className="home-highlight">70% Off</span> on Electric Kettles, Blenders & More
      </h2>
      <button className="home-explore-button">Explore More</button>
    </div>
    <div className="home-banner-image">
      <img
        src="https://media.istockphoto.com/id/1127554046/photo/kitchen-appliances-on-a-neutral-background.jpg?s=612x612&w=0&k=20&c=Koo2UQAzCoN0VaLPXqidQEJAaaB1VprIDl-TNzJKaqo="
        alt="Banner Visual"
      />
    </div>
  </section>
);

const Home = () => (
  <main>
    <HeroSection />
    <ProductsGrid />
    <Banner />
    <NewsletterSection />
  </main>
);

// Styles combined directly
const styles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home-body {
  font-family: 'Roboto', sans-serif;
  background-color: #f3f4f6;
}

.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* Hero Section */
.home-hero-section {
  display: flex;
  align-items: center;
  padding: 4rem 0;
}

.home-hero-text {
  flex: 1;
}

.home-offer-text {
  color: #4b5563;
  margin-bottom: 0.5rem;
  margin-left: 2rem;
  font-size: 1.125rem;
}

.home-hero-text h1 {
  font-size: 2.25rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.5rem;
  

}

.home-hero-text h2 {
  font-size: 2.25rem;
  font-weight: bold;
  color: #14b8a6;
  margin-bottom: 1rem;
  margin-left: 2rem;
}

.home-savings-text {
  color: #4b5563;
  margin-bottom: 1.5rem;
  margin-left: 2rem;
}

.home-shop-button {
  padding: 0.75rem 1.5rem;
  background-color: #14b8a6;
  color: white;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 2rem;
}

.home-shop-button:hover {
  background-color: #0d9488;
}

.home-hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.home-hero-image img {
  max-width: 100%;
  height: 70%;
}

/* Products Section */
.home-products-section {
  text-align: center;
  margin: 2rem auto;
}

.home-products-section h1 {
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.home-products-section p {
  color: #6b7280;
  margin-bottom: 2rem;
}

.home-products-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .home-products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .home-products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .home-products-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Product Card */
.home-product-card {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.2s ease-in-out;
}

.home-product-card:hover {
  transform: translateY(-5px);
}

.home-product-card img {
  width: 100%;
  height: 16rem;
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
}

.home-brand {
  color: #6b7280;
  font-size: 0.875rem;
}

.home-product-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0.5rem 0;
}

/* Rating Stars */
.home-rating {
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
}

.home-rating i {
  color: #fbbf24;
}

/* Price */
.home-price {
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0.5rem 0;
}

/* Cart Button */
.home-cart-button {
  background-color: #dcfce7;
  color: #22c55e;
  padding: 0.5rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  margin-top: 0.5rem;
  float: right;
  transition: all 0.2s ease-in-out;
}

.home-cart-button:hover {
  background-color: #22c55e;
  color: white;
}

/* Banner Section */
.home-banner {
  margin: 2rem auto;
  background-color: black;
  color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
}

.home-banner-content {
  position: relative;
  z-index: 10;
}

.home-banner-subtitle {
  font-size: 0.875rem;
}

.home-banner-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-top: 0.5rem;
}

.home-highlight {
  color: #ef4444;
}

.home-explore-button {
  margin-top: 1rem;
  background-color: #22c55e;
  color: white;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.home-explore-button:hover {
  background-color: #16a34a;
}

.home-banner-image img {
  max-width: 200px;
  height: auto;
  object-fit: contain;
}

// /* Newsletter Section */
// .home-newsletter {
//   background-color: #1e3a8a;
//   color: white;
//   padding: 2rem 0;
//   text-align: center;
// }

.home-newsletter h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.home-newsletter .home-highlight {
  color: #fbbf24;
}

.home-newsletter-form {
  display: flex;
  margin: 1rem auto;
  max-width: 28rem;
}

.home-newsletter-form input {
  flex: 1;
  padding: 0.5rem;
  border: none;
  border-radius: 0.375rem 0 0 0.375rem;
}

.home-newsletter-form input:focus {
  outline: none;
  box-shadow: 0 0 0 2px #22c55e;
}

.home-newsletter-form button {
  background-color: #22c55e;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0 0.375rem 0.375rem 0;
  cursor: pointer;
  transition: background-color 0.2s;
}

.home-newsletter-form button:hover {
  background-color: #16a34a;
}

/* Responsive design */
@media (max-width: 768px) {
  .home-hero-section {
    flex-direction: column;
    text-align: center;
  }

  .home-hero-text {
    margin-bottom: 2rem;
  }

  .home-banner {
    flex-direction: column;
  }

  .home-banner-image {
    margin-top: 1rem;
    text-align: center;
  }

  .home-newsletter-form {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .home-newsletter-form input,
  .home-newsletter-form button {
    width: 100%;
    border-radius: 0.375rem;
  }
}
`;

const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

export default Home;