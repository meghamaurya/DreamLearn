import React from 'react';
// import card from './cards.json'
const Cards = (props) => {
    const card = props.cards;
    // console.log(props)
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-screen mt-10 pl-5 pr-5 place-items-center max-w-[1250px] mx-auto'>
                {card.map((item) => {
                    return (
                        <div key={item.id} className="py-6  " >
                            <div className='w-72 h-72  object-cover rounded-lg overflow-hidden select-none shadow-lg shadow-purple-500 '>
                                <img className='w-full h-52 rounded-sm' src={item.image} alt={item.title} />
                                <div className='px-1 py-1 '>
                                    <div className='font-bold text-l text-purple-900 mb-2'>{item.title}</div>
                                    <p className=' text-sm text-purple-700'>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Cards;
