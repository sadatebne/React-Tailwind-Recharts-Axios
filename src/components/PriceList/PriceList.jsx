import React, { useState } from 'react';
import { useEffect } from 'react';
import PriceCart from '../PriceCart/PriceCart';

const PriceList = () => {
    const [prices, setPrices] = useState([])
    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])
    return (
        <div className='mx-12'>
            <h1 className='text-7xl text-white font-bold bg-emerald-500 text-center py-4'>Price List</h1>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    prices.map(price => <PriceCart key={price.id} price={price}></PriceCart>)
                }
            </div>


        </div>
    );
};

export default PriceList;