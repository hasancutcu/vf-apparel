import { useEffect, useState } from 'react'
import Agent from '../api/agent'

function App() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const data = await Agent.Product.getProdcutsAsIs();
    setProducts(data)
  }

  useEffect(() => { fetchProducts() }, []);

  return (
    <div >
      <h1>Products</h1>
      {products.map(product => <div key={product.id}>{product.title}</div>)}
    </div>
  );
}

export default App;
