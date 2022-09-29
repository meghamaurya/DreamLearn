import React, { useState } from 'react'
import { useEffect } from "react"
import axios from 'axios'
import ReactPlayer from 'react-player';
const Learn = () => {
    const [demoClass, setDemoClass] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('https://ms-instagram-stories.herokuapp.com/api/instaStories/')
            .then((res) => {
                console.log('res', res);
                setDemoClass(res.data);
                setLoading(false);
            })
    }, [])
    return (
        <div className="max-w-[1250px] mx-auto">
            <h3 className='text-center mt-8 text-3xl  text-purple-900 shadow-md shadow-purple-300'>Demo Classes</h3>
            {demoClass.length === 0 && loading ? (
                <h1 className='text-2xl text-center mt-6 text-purple-900'>loading...</h1>) :
                (demoClass.map((data) => {
                    const { id, userName, bio, video } = data;
                    return (
                        <div key={id} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-4 mt-16'>
                            <div className="inline-block w-80 h-56 overflow-hidden object-cover rounded-lg shadow-lg shadow-purple-500 mb-10" >
                                <ReactPlayer controls url={video} width="100%" height="85%" />
                                <div className='flex place-content-between text-gray-800 text-md items-center  m-1'>
                                    <h2>{userName}</h2>
                                    <p >{bio}</p>
                                </div>
                            </div>
                        </div>
                    )
                }))}
        </div>
    )
}

export default Learn
