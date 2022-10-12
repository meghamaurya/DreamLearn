
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import LearnerService from "../Auth/learner.service";
// import Instrument from "../Instrument";

const instrumentTitle = [
    "tabla", "dholak", "flute", "veena", "harmonium", "piano", "guitar", "drums", "trumpet", "violin"
]
const LearnerDropdown = () => {
    const [instruments, setInstruments] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        console.log(instruments, 'learner')

        if (instruments !== '') {
            let instrument = {
                "instrument": instruments
            }
            LearnerService.instrumentDD(instrument).then(() => {
                navigate('/courses');
            });
        }
    }, [instruments])

    const handleClick = (title) => {
        setInstruments(title)

    }


    return (<>
        <div className='productList z-30'>

            <div className='z-10 pl-24 mt-8 text-xl  text-purple-900 shadow-md shadow-purple-300'>
                <ul className="flex ">
                    <li className="relative pr-2">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="inline-flex w-full justify-center bg-white px-4  text-lg font-medium text-purple-900 shadow-sm hover:bg-gray-50 ">
                                    Instruments

                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        {instrumentTitle.map((title, index) => {
                                            return (
                                                <Menu.Items key={index} className="hover:font-semibold cursor-pointer capitalize" onClick={() => handleClick(title)}>{title}</Menu.Items>
                                            )
                                        })}

                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>



                        {/* {instrumentList ?
                            <div className="absolute pr-6 pl-6 shadow-md shadow-purple-500 rounded-md bg-white p-4" onMouseEnter={showInstrumentList} onMouseLeave={hideInstrumentList} >
                                {instruments?.map((instrument) => {
                                    return (
                                        <div key={instrument.id} >
                                            <div className="hover:font-semibold p-0.5"><Link to={`/instruments/${instrument.id}`}>{instrument.price}</Link></div>
                                        </div>
                                    )
                                })}
                            </div>
                            : null} */}
                    </li>
                    <li >
                        <button className="font-medium pl-2 pr-2" onClick={() => navigate("/courses")}>My Courses</button>
                    </li>
                    <li >
                        <button className="font-medium pl-2 pr-2" onClick={() => navigate("/allschedule")}>Schedule</button>
                    </li>
                </ul>
            </div>
        </div>
    </>
    )
}

export default LearnerDropdown;


// <div className='z-10 pl-24 mt-8 text-lg  text-purple-900 shadow-md shadow-purple-300'>
//             <ul className="flex ">
//                 <li className="relative pr-4">
//                     <button onMouseEnter={showInstruments} onMouseLeave={hideInstruments} className="font-medium">Instruments</button>

//                     {instruments ?
//                         <div className="absolute shadow-md shadow-purple-500 rounded-md bg-white p-4" onMouseEnter={showInstruments} onMouseLeave={hideInstruments} >
//                             <table className="table-auto p-4">
//                                 <thead className="shadow-sm shadow-purple-300">
//                                     <tr >
//                                         <th >Indian</th>
//                                         <th className="p-1 ml-9">Western</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody >
//                                     <td className="p-3">
//                                         <tr className="hover:font-semibold"><Link to="/home">Tabla</Link></tr>
//                                         <tr className="hover:font-semibold"><Link to="">Dholak</Link></tr>
//                                         <tr className="hover:font-semibold"><Link to="">Flute</Link></tr>
//                                         <tr className="hover:font-semibold"><Link to="">Veena</Link></tr>
//                                         <tr className="hover:font-semibold "><Link to="">Harmonium</Link></tr>
//                                     </td>
//                                     <td className="pr-6 pl-6">
//                                         <tr className="hover:font-semibold"><Link to="">Piano</Link></tr>
//                                         <tr className="hover:font-semibold"><Link to="/home">Guitar</Link></tr>
//                                         <tr className="hover:font-semibold"><Link to="">Drums</Link></tr>
//                                         <tr className="hover:font-semibold"><Link to="">Trumpet</Link></tr>
//                                         <tr className="hover:font-semibold"><Link to="">Violin</Link></tr>
//                                     </td>
//                                 </tbody>
//                             </table>
//                         </div>
//                         : null}
//                 </li>
//                 <li >
//                     <button onMouseEnter={showCourses} onMouseLeave={hideCourses} className="font-medium pl-2">Courses</button>
//                     {courses ?
//                         <div className="absolute shadow-md shadow-purple-500 rounded-md bg-white p-4" onMouseEnter={showCourses} onMouseLeave={hideCourses} >
//                             <table className="table-auto">
//                                 <tbody>
//                                     <td className="pr-6 pl-6">
//                                         <tr className="hover:font-semibold"><Link to="/home">Tabla</Link></tr>
//                                         <tr className="hover:font-semibold"><Link to="">Dholak</Link></tr>
//                                         <tr className="hover:font-semibold"><Link to="">Flute</Link></tr>
//                                         <tr className="hover:font-semibold"><Link to="">Veena</Link></tr>
//                                         <tr className="hover:font-semibold"><Link to="">Harmonium</Link></tr>
//                                     </td>
//                                 </tbody>
//                             </table>
//                         </div>
//                         : null}
//                 </li>
//             </ul>
//         </div>