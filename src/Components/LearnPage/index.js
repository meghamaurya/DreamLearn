import React, { useState } from 'react'
import { useEffect } from "react"
import axios from 'axios'
import ReactPlayer from 'react-player';
const Learn = () => {
    const [demoClass, setDemoClass] = useState([]);
    useEffect(() => {
        axios.get('https://ms-instagram-stories.herokuapp.com/api/instaStories/')
            .then((res) => {
                console.log('res', res);
                setDemoClass(res.data);
            })
    }, [])
    return (
        <div className="max-w-[1250px] mx-auto">
            <h3 className='text-center mt-8 text-3xl'>Demo Classes</h3>
            <div className=' grid grid-cols-3 m-4 mt-16'>
                {demoClass.map((data) => {
                    const { id, userName, bio, video } = data;
                    return (
                        <div key={id} className="inline-block w-80 h-56 overflow-hidden object-cover rounded-lg shadow-lg shadow-purple-500 mb-10" >
                            <ReactPlayer controls url={video} width="100%" height="85%" />
                            <div className='flex place-content-between text-gray-800 text-md items-center  m-1'>
                                <h2>{userName}</h2>
                                <p className=''>{bio}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Learn
