import React from 'react'
import Cards from '../Cards'
import card from '../Cards/cards.json';
import Signup from '../Auth/Signup';
import Signin from '../SignIN/index'
const Home = () => {
    return (
        <div>
            <Signup />
            <Signin />
            <Cards cards={card} />
        </div>
    )
}

export default Home
