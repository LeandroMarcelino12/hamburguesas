import React, { useState } from 'react';
import Header from './componentes/header';
import BurgerCard from './componentes/BurgerCard';
import Cart from './componentes/Cart';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  const [cart, setCart] = useState([]);

  const burgers = [
    { name: 'Hamburguesa Clásica', image: '/images/clasica.jpg' , price: 500 },
    { name: 'Hamburguesa Especial', image: '/images/special.jpg', price: 650 },
    { name: 'Hamburguesa Vegetariana', image: '/images/vegan.jpg', price: 550 },
  ];

  const addToCart = (burger) => {
    setCart([...cart, burger]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <div>
      <Header />
      <Container>
        <Row>
          {burgers.map((burger, index) => (
            <Col key={index} md={4}>
              <BurgerCard burger={burger} addToCart={addToCart} />
            </Col>
          ))}
        </Row>
        <Cart cartItems={cart} removeFromCart={removeFromCart} />
      </Container>
    </div>
  );
};

export default App;
