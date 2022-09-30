import React from 'react'
import Cards from '../Cards'
import card from '../Cards/cards.json';
import Signin from '../SignIN/index'
const Home = () => {
    return (
        <div>
            <Signin />
            <Cards cards={card} />
        </div>
    )
}

export default Home
