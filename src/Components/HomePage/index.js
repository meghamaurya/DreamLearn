import React from 'react'
import Cards from '../Cards'
import card from '../Cards/cards.json';
const Home = () => {
    return (
        <div>
            <Cards cards={card} />
        </div>
    )
}

export default Home
