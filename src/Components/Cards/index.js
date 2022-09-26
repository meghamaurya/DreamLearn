import React from 'react';
import card from './cards.json';
const Cards = () => {
    return (
        <>
            <div className='grid grid-cols-3 h-screen place-items-center'>
                {card.map((item) => {
                    return (
                        <div key={item.id} className='py-10'>
                            <div className='w-72 rounded-lg overflow-hidden shadow-lg  hover:shadow-purple-500'>
                                <img className='w-full h-3/4' src={item.image} alt={item.title} />
                                <div className='px-6 py-4 h-1/4'>
                                    <div className='font-bold text-xl text-gray-800 mb-2'>{item.title}</div>
                                    <p className='text-gray-700 text-base'>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* <div className='grid grid-cols-3 h-screen place-items-center'>
                <div className='py-10'>
                    <div className='w-72 rounded-lg overflow-hidden shadow-lg  hover:shadow-purple-500'>
                        <img className='w-full h-3/4' src='./images/online-class.jpg' alt='online-classes' />
                        <div className='px-6 py-4 h-1/4'>
                            <div className='font-bold text-xl text-gray-800 mb-2'>Online Classes</div>
                            <p className='text-gray-700 text-base'>Interact with your educator live</p>
                        </div>
                    </div>
                </div>
                <div className='py-10'>
                    <div className='w-72 rounded-lg overflow-hidden shadow-lg  hover:shadow-purple-500'>
                        <img className='w-full' src='./images/notations.jpg' alt='online-classes' />
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl text-gray-800 mb-2'>Notations and History</div>
                            <p className='text-gray-700 text-base'>Interact with your educator live</p>
                        </div>
                    </div>
                </div>
                <div className='py-10'>
                    <div className='w-72 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500'>
                        <img className='w-full h-3/4' src='./images/flute-practice.jpg' alt='online-classes' />
                        <div className='px-6 py-4 h-1/4'>
                            <div className='font-bold text-xl text-gray-800 mb-2'>Practice</div>
                            <p className='text-gray-700 text-base'>Interact with your educator live</p>
                        </div>
                    </div>
                </div>
                <div className='py-10'>
                    <div className='w-72 rounded-lg overflow-hidden shadow-lg  hover:shadow-purple-500'>
                        <img className='w-full h-3/4' src='https://ytimg.googleusercontent.com/vi/tb0gHAzpQPE/maxresdefault.jpg' alt='online-classes' />
                        <div className='px-6 py-4 h-1/4'>
                            <div className='font-bold text-xl text-gray-800 mb-2'>Fun Quiz</div>
                            <p className='text-gray-700 text-base'>Enjoy fun quiz with learning</p>
                        </div>
                    </div>
                </div>
                <div className='py-10'>
                    <div className='w-72 rounded-lg  shadow-lg  hover:shadow-purple-500'>
                        <img className='w-full h-3/4' src='https://i0.wp.com/asmusicworld.com/wp-content/uploads/2020/08/12-e1538115961516.jpg?w=644ssl=1' alt='online-classes' />
                        <div className='px-6 py-4 h-1/4'>
                            <div className='font-bold text-xl text-gray-800 mb-2'>Indian Instrument</div>
                            <p className='text-gray-700 text-base'>Enjoy fun quiz with learning</p>
                        </div>
                    </div>
                </div>
                <div className='py-10'>
                    <div className='w-72 rounded-lg  shadow-lg  hover:shadow-purple-500'>
                        <img className='w-full h-3/4' src='https://i0.wp.com/asmusicworld.com/wp-content/uploads/2020/08/12-e1538115961516.jpg?w=644ssl=1' alt='online-classes' />
                        <div className='px-6 py-4 h-1/4'>
                            <div className='font-bold text-xl text-gray-800 mb-2'>Indian Instrument</div>
                            <p className='text-gray-700 text-base'>Enjoy fun quiz with learning</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Cards;
