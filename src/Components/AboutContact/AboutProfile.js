import React from 'react';
import ContactData from "./Contact.json";

const AboutProfile = () => {
    return (


        <div className='grid grid-cols-3 rounded  gap-5 mx-10 mt-10' >


            {
                ContactData.map((curElem) => {
                    const { profileImage, aboutMe, id, github, name, role } = curElem;
                    return (
                        <a href={github} target="_blank" rel="noreferrer">
                            <div className='grid h-full  m-auto  text-lg text-purple-900 border-2 rounded-md shadow-md overflow-auto pt-2 hover:shadow-lg hover:shadow-purple-400' key={id}>
                                <div className=' m-auto  '>
                                    <figure >
                                        <img className='w-32 h-fit rounded-xl '
                                            src={profileImage} alt="Megha Maurya " />
                                    </figure>
                                </div>
                                <div className='grid p-2 m-auto rounded-xl '>
                                    {/* <p>{name}</p> */}
                                    <p className='text-justify text-base px-2'>{aboutMe}</p>
                                </div>
                                <div className='flex flex-col mb-2'>
                                    <span className='text-left pl-4 font-semibold'>{name}</span>
                                    <span className='text-left pl-4 text-sm'>{role}</span>
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </div>

    )
}

export default AboutProfile
