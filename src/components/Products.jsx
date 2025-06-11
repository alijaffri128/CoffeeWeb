import React from 'react';
import { useCart } from './CartContext';

const products = [
  {
    id: 1,
    name: 'Arabica Coffee',
    price: '$30',
    image: 'https://i.postimg.cc/BbxCdKCB/p1.png',
  },
  {
    id: 2,
    name: 'Cafe Botero',
    price: '$35',
    image: 'https://i.postimg.cc/cCMQDNsD/p2.png',
  },
  {
    id: 3,
    name: 'Patch Roast',
    price: '$10',
    image: 'https://i.postimg.cc/sfp9f5pp/p3.png',
  },
  {
    id: 4,
    name: 'Road Coffee Bag',
    price: '$10',
    image: 'https://i.postimg.cc/YqMNvj3T/p4.png',
  },
  {
    id: 5,
    name: 'Sacred Grounds',
    price: '$25',
    image: 'https://i.postimg.cc/8zChb3xH/p5.png',
  },
  {
    id: 6,
    name: 'Presto Coffee',
    price: '$50',
    image: 'https://i.postimg.cc/Bnw27p0G/p6.png',
  },
];

const Products = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <section id="products" className="px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold uppercase">Our popular products</h2>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-md shadow-md border-2 border-gray-200 flex flex-col justify-center items-center transition hover:shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[250px] object-contain object-center p-5 bg-[var(--bg-color-alt)] rounded-md"
            />
            <h3 className="text-lg font-semibold uppercase my-2">{product.name}</h3>
            <div className="flex items-center justify-around w-full mt-2">
              <span className="px-4 py-1 bg-[var(--main-color)] text-[var(--bg-color)] rounded text-sm font-medium">
                {product.price}
              </span>
              <button
                onClick={() => handleAddToCart(product)}
                className="px-4 py-1 border-2 border-[var(--main-color)] text-[var(--text-color)] rounded text-sm uppercase hover:bg-[var(--main-color)] hover:text-[var(--bg-color)] transition-all duration-400"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
