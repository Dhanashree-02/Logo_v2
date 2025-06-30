import products from '../data/products';
import ProductCard from '../components/productCard/ProductCard';

function Home({ addToCart }) {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Home;
