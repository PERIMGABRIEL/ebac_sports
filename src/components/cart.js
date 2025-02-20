// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, clearCart } from '../store/cartSlice';
import { useGetProductsQuery } from '../store/api';

const Cart = () => {
  const dispatch = useDispatch();
  const { data: products, error } = useGetProductsQuery(); // Requisição para pegar produtos
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeItem(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1>Carrinho de Compras</h1>
      <button onClick={handleClearCart}>Limpar Carrinho</button>
      
      <h2>Produtos:</h2>
      {products ? (
        products.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <button onClick={() => handleAddToCart(product)}>Adicionar ao Carrinho</button>
          </div>
        ))
      ) : (
        <p>Carregando produtos...</p>
      )}

      <h2>Itens no Carrinho:</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleRemoveFromCart(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
