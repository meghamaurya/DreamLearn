import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import LearnerService from "../Auth/learner.service";
// import Instrument from "../Instrument";
const instrumentTitle = [
    "tabla", "dholak", "flute", "veena", "harmonium", "piano", "guitar", "drums", "trumpet", "violin"
]
const LearnerDropdown = () => {
    const [instrumentList, setInstrumentList] = useState(false);

    const showInstrumentList = () => {
        setInstrumentList(true);
    }
    const hideInstrumentList = () => {
        setInstrumentList(false);
    }

    return (<>
        <div className='productList'>

            <div className='z-20 pl-24 mt-8 text-xl  text-purple-900 shadow-md shadow-purple-300'>
                <ul className="flex ">
                    <li className="relative pr-2">
                        <button onMouseEnter={showInstrumentList} onMouseLeave={hideInstrumentList} className="font-medium">Instruments</button>

                        {instrumentList ?
                            <div className="absolute pr-6 pl-6 shadow-md shadow-purple-500 rounded-md bg-white p-4" onMouseEnter={showInstrumentList} onMouseLeave={hideInstrumentList} >
                                {instrumentTitle?.map((instrument, index) => {
                                    return (
                                        <div key={index} >
                                            <div className="hover:font-semibold p-0.5"><Link to={`/instruments/${instrument}`}>{instrument}</Link></div>
                                        </div>
                                    )
                                })}
                            </div>
                            : null}
                    </li>
                    <li >
                        <Link to={'/courses'} className="font-medium pl-2 pr-2" >Courses</Link>
                    </li>
                    {/* <li >
                        <Link to={'/allschedule'} className="font-medium pl-2 pr-2" >Schedule</Link>
                    </li> */}
                </ul>
            </div>
        </div>
    </>
    )
}

export default LearnerDropdown;
