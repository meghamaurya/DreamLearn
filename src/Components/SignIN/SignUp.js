import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../Hero Section/Carousel"

function Signup() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled] = useState(false);

    const handleSubmission = () => {
        if (!values.name || !values.email || !values.pass) {
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");
        //max-h-screen  justify-center items-center

    };

    return (
        <div className="grid grid-cols-3  m-3 pl-10 pr-5 h-full bg-zinc-300">
            <div className="col-span-2 pt-2">
                <Carousel />
            </div>

            <div className="w-full max-w-xs pt-2">

                <div className="w-full max-w-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="flex text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Enter your name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="name" 
                            placeholder="Enter your name"
                            autoComplete="off"
                                onChange={(event) =>
                                    setValues((prev) => ({ ...prev, name: event.target.value }))
                                } />
                        </div>
                        <div className="mb-4">
                            <label className="flex text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Enter your email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" 
                            placeholder="Enter your email"
                            autoComplete="off"
                                onChange={(event) =>
                                    setValues((prev) => ({ ...prev, email: event.target.value }))
                                } />
                        </div>
                        <div className="mb-6">
                            <label className="flex text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" 
                            placeholder="Please choose a password"
                            autoComplete="off"
                                onChange={(event) =>
                                    setValues((prev) => ({ ...prev, pass: event.target.value }))
                                } />
                           
                        </div>
                        <div className=" items-start justify-around ">
                            <b className="">{errorMsg}</b>
                            <button className="bg-purple-900 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmission} disabled={submitButtonDisabled}>
                                Sign Up
                            </button>
                            <Link className="inline-block align-baseline  text-sm text-purple-400 hover:text-purple-900" to="/SignIn">
                                Already have an account? Login
                            </Link>
                        </div>
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                    &copy;2022 Dream Learn. All rights reserved.
                    </p>
                </div>
            </div>

        </div>


    );
}

export default Signup;
