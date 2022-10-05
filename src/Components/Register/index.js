import axios from "axios";
import { useState, useEffect } from "react";

// import { useParams } from "react-router-dom";
const Register = () => {
    const [courseDetail, setCourseDetail] = useState([]);
    // const params = useParams();
    // const { register } = params;
    // const { instrument, register } = params;

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products?limit=1`)
            .then((res) => {
                console.log("responseDetail", res.data);
                setCourseDetail(res.data);
            })
    }, [])
    //     axios.get(`https://fakestoreapi.com/products/${instrument}/${register}`)
    //         .then((response) => {
    //             console.log("registerDetail", response.data);
    //             setCourseDetail(response.data)
    //         })
    // }, [instrument, register])
    return (
        <div>
            <h3 className='text-center mt-10 text-4xl font-semibold text-purple-900'>{courseDetail.title}Register Courses</h3>
            {courseDetail?.map((course) => {
                return (
                    <div key={course.id} className="flex w-8/12 ml-56 mt-14 text-purple-900 shadow-lg shadow-purple-900">
                        <div key={course.id} className="w-full p-4 shadow-sm shadow-purple-900 inline-block pl-10">
                            <img className="w-50 h-56 pl-36 " src={course.image} alt={course.title} />
                            <h2 className="float-left pt-6 text-lg font-semibold">{course.category}</h2>
                            <p className="float-left -pl-0 pt-2 ">{course.title}</p>
                        </div>
                        <div className="shadow-sm shadow-purple-900 p-6">
                            <h2 className="text-2xl font-semibold mb-2">Description</h2>
                            <p className="p-4">{course.description}</p>
                            <button className="p-2 mt-8 border bg-purple-900 text-white rounded-md text-lg">Register Now</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Register;