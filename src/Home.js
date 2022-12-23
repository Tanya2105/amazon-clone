import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
  return (
    <div className="home">
        <div className="home__container"> 
            <img 
            className='home__image'
            src=" https://t2.tudocdn.net/604342?w=1200&h=1200" alt=""/>
        <div className='home__row'>
            <Product title='Harry Potter Book' price={29.99} image='https://static.dezeen.com/uploads/2021/04/harry-potter-michele-de-lucchi-covers_dezeen_2364_hero3-1-852x479.jpg' 
            rating={5}/>
            <Product
            title="kenwood kMix Stand Mixer for Baking,Stylish Kitchen Mixer,5 Litre Glass Bowl"
            price={240.9}
            rating ={4}
            image=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIMxR8yb5nhljIhqo45W_uuDHO9k6Yb0DTaw&usqp=CAU " />
        </div>
        <div className='home__row'>
            <Product
            title="iphone 13 newly launched gold"
            price={1440.9}
            rating ={4}
            image=" https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg " />
            <Product
            title="Alexa Amazon original "
            price={640.9}
            rating ={4}
            image=" https://i.guim.co.uk/img/media/f183d9937a705b78a19c48d286edd2031e262242/149_311_5091_3054/master/5091.jpg?width=465&quality=85&dpr=1&s=none " />
            <Product
            title=" Smart watch Samsung Pro Max"
            price={440.9}
            rating ={4}
            image="https://m.media-amazon.com/images/I/51G9tNXzs1L._SY355_.jpg " />
            
            </div>   
        <div className='home__row'>
            <Product
            title=" Samsung LC4SUNEX '49 Curved Monitor"
            price={1040.9}
            rating ={4}
            image="https://image-us.samsung.com/SamsungUS/home/92621/C49HG90DMR_005_L-Perspective_Black.jpg?$product-details-jpg$ " />
            
            
            </div> 
        </div>

      
    </div>
  );
}

export default Home;
