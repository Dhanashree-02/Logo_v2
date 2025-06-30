import { useParams } from 'react-router-dom';
import products from '../data/products';

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
