import { useState } from "react";
import "./App.css";

const initialProducts = [
  { id: 1, name: "Product A", price: 120, featured: false },
  { id: 2, name: "Product B", price: 220, featured: true },
  { id: 3, name: "Product C", price: 180, featured: false },
  { id: 4, name: "Product D", price: 90, featured: false },
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const toggleFeatured = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, featured: !p.featured } : p
      )
    );
  };

  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Nova</h2>
        <ul>
          <li>Dashboard</li>
          <li>Products</li>
          <li>Analytics</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main">
        <h1 className="title">Product Dashboard</h1>

        {/* Top Card */}
        <div className="top-card">
          <span className="badge">TOP PRIORITY</span>
          <h2>Nova Chrono</h2>
          <p>Priority product in your catalog</p>
          <h3>$299</h3>
          <button className="primary-btn">Manage Product</button>
        </div>

        {/* All Products */}
        <div className="card">
          <h2>All Products</h2>
          {products.map((p) => (
            <div className="product-row" key={p.id}>
              <div>
                <h3>{p.name}</h3>
                <p>${p.price}</p>
              </div>

              <div className="actions">
                <button
                  className="feature-btn"
                  onClick={() => toggleFeatured(p.id)}
                >
                  ⭐ {p.featured ? "Remove" : "Feature"}
                </button>
                <button className="edit-btn">Edit</button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured */}
        <div className="card">
          <h2>⭐ Featured Products</h2>

          {featuredProducts.length === 0 && (
            <p>No featured products yet</p>
          )}

          {featuredProducts.map((p) => (
            <div className="product-row" key={p.id}>
              <div>
                <h3>{p.name}</h3>
                <p>${p.price}</p>
              </div>

              <button
                className="remove-btn"
                onClick={() => toggleFeatured(p.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;