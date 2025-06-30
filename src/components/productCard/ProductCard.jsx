import { Link } from 'react-router-dom';

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>{product.category}</p>
      <div className="btns">
        <Link to={`/product/${product.id}`}>
          <button>View</button>
        </Link>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
