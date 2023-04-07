import React from 'react';
import Feature from '../Feature/Feature';


const PriceCart = ({ price }) => {
    return (
        <div className='bg-yellow-200 mt-4 p-4 rounded-md flex flex-col'>
            <h1 className='text-center'> 
                <span className='text-7xl font-extrabold text-purple-700'>{price.price}</span>
                <span className='text-4xl font-semibold text-black'>/mon </span>
                
            </h1>
            <h2 className='text-5xl text-center font-bold text-black p-4'>{price.name} </h2>
            <p className='underline font-bold'>Features:</p>
            {
                price.features.map((feature, idx)=><Feature feature={feature} key={idx}></Feature>)
            }
            <button className='w-full mt-auto bg-green-500 rounded-md text-white font-bold p-2 hover:bg-green-800'>Buy Now</button>
        </div>
    );
};

export default PriceCart;