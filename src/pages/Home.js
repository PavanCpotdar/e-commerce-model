import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../component2/Product';

function Home() {
    const productList = useSelector(state => state.productList);
    return (
        <>
                <div className='homeCantainer'>
                {productList && productList.map((element) => <Product key={element.id} product={element} />)}
            </div>

        </>
    )
}

export default Home
