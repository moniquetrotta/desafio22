import React, {useState, useEffect} from 'react';
import { Container } from './style';
import api from '../../services/api';

interface IProduct {
id: number;
photo: string;
name: string;
description: string;
price: number;
}

const Home: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data)
      }
    )
  }, [])

  const handleCart = (index: number) => {
   let push: any = [...cart, cart.push(data[index])]
   setCart(push)
   const productStore = JSON.stringify(cart);
   localStorage.setItem(`@cart`, productStore)
   
  }

  return (
<Container>
  <div className="nav">
    <div className="logoApple">
      <img src="https://pngpress.com/wp-content/uploads/2020/04/Apple-logo.png" alt="vtex" width="100px" height="auto"/>
    </div>
    <div className="cart1">
     <img src="https://i.pinimg.com/564x/15/bb/55/15bb559cdd28f56d7c17b00498b4a946.jpg" alt="cart" width="50px" height="auto"/>
     <p> <span>({cart.length})</span></p>
    </div>
  </div>
 <section>
   {data.map((prod ,index) => (
   <div className="product-content" key={prod.id}>
     <img src={prod.photo} alt="iphone" width="200" height="auto"/>
     <h4>{prod.name}</h4>
     {/* <span>{prod.description}</span>  */}
     <h5>R$ {prod.price},00</h5>
     <button onClick={() => handleCart(index)}>Carrinho</button>
   </div>
   ))}
 </section>
</Container>
  );
}

export default Home;