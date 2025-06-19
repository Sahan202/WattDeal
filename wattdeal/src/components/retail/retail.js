import React from "react";
import { useNavigate } from "react-router-dom"; 


// Sample product data
const products = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/1211554164/photo/3d-render-of-home-appliances-collection-set.webp?a=1&b=1&s=612x612&w=0&k=20&c=eAClUK1d_8Qp8NkdaK4SYg8l0u1aByjOhl-nE-3cA_4=",
    name: "Home Electrical",
    rating: 5,
    price: 78,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1740803292822-a742c6a4fef0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2l0Y2hlbiUyMGVzc2VudGlhbHN8ZW58MHx8MHx8fDA%3D",
    name: "Kitchen Essentials",
    rating: 5,
    price: 78,
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/2162666018/photo/hand-tools-and-workbench-in-carpentry-workshop.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ek1Qw0yW_qr6SLFUFQ6RP8uTw_4XMk1breJNJIbpEzs=",
    name: "DIY & Tools",
    rating: 5,
    price: 78,
  },
  {
    id: 4,
    image:
      "https://plus.unsplash.com/premium_photo-1661922429968-b4794e688dc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxvdXQlMjBkb29yJTIwZWxlY3RyaWNhbCUyMGxhbXB8ZW58MHx8MHx8fDA%3D",
    name: "Outdoor Electrical",
    rating: 4,
    price: 65,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1504972090022-6edb81e4e534?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVsYnN8ZW58MHx8MHx8fDA%3D",
    name: "Computing Devices",
    rating: 5,
    price: 78,
  },
  {
    id: 6,
    image:
      "https://media.istockphoto.com/id/1213132431/photo/electrical-equipment.webp?a=1&b=1&s=612x612&w=0&k=20&c=PnapLTqog5I1uFWDZBU5sVlBRcrWO3M9pVzcva3DSko=",
name: "Accessories",
    rating: 4,
    price: 95,
  },
];

// Product Card Component
const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(/shop/${product.id});
  };
  return (
    <div className="product-card">
      <img src={product.image} alt={product.alt} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <button className="cart-button" onClick={handleNavigate}>Go to Shop</button>
    </div>
  );
};

// Main Category Component
const Category = () => {
  console.log("Category Component Rendered");
  return (
    <div className="app-container">
      <div className="content-wrapper">
        <h1 className="title">Featured Products</h1>
        <p className="subtitle">Shop the Latest Trends</p>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Styles combined directly in the file
const styles = `
/* Main container */
.app-container {
  min-height: 100vh;
  /* background: linear-gradient(135deg, #fdfbfb, #f2f7fa); */
  background-color: #edebe2; 
}

.content-wrapper {
  max-width: 1280px;
  margin: 50px auto;
  padding: 2rem 1rem;
}

.title {
  font-size: 3.25rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.5rem;
  text-align: center;
  color: #6b7280;
  margin-bottom: 2rem;
}

/* Products grid */
.products-grid {
  display: grid;
  cursor: pointer;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

/* Responsive grid */
@media (min-width: 640px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Product card */
.product-card {
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  background-color: #e2e8f0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 100%;
  height: 16rem;
  object-fit: cover;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
}

.product-name {
  font-size: 2rem;
  font-weight: bolder;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}
.cart-button {
  background-color: #28a745; /* Vibrant green */
  color: #ffffff;
  align-items: center;
  border-radius: 30px;
  padding: 0.55rem 1rem; /* Increased padding for a larger button */
  font-size: 1.125rem; 
  font-weight: bold; 
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
  text-align: center;
}

.cart-button:hover {
  background-color: #218838; 
  transform: scale(1.1); 
}
 `; 

const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

export default Category;