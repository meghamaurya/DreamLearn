import React from 'react'
import Cards from '../Cards'
import card from '../Cards/cards.json';
import SignUp from '../SignIN/SignUp';
const Home = () => {
    return (
        <div>
            <SignUp />
            <Cards cards={card} />
        </div>
    )
}

export default Home
