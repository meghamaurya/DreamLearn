import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "../Hero Section/Carousel"


function SignIn() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    navigate("/");
  };
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-3 pl-10 pr-5 h-fit bg-zinc-300 ">
      <div className="col-span-2 pt-2   ">
        <Carousel />
      </div>

      <div className="w-full max-w-xs flex justify-center items-center pt-2">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-3">
            <div className="flex flex-row items-center justify-center lg:justify-start">
              <p className=" text-gray-700 text-sm font-bold mb-2 mr-4">Sign in with</p>

              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block p-3 bg-purple-900 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-400 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
              >
                <img className="w-4 h-4" src="https://ragsdalemartin.com/wp-content/uploads/2020/07/white-google-logo.png" alt="" />
              </button>

              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block p-3 bg-purple-900 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-400 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">

                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  />
                </svg>
              </button>

              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block p-3 bg-purple-900 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-400 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">

                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  />
                </svg>
              </button>

            </div>

            <div
              className="flex items-center my-3 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
            >
              <p className="text-center font-semibold mx-4 mb-0">Or</p>
            </div>


            <div className="mb-4">
              <label className="flex text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Enter your email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email"
              autoComplete="off"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
              />
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
            <div className="flex items-center justify-between">
              <b className="">{errorMsg}</b>
              <button className="bg-purple-900 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmission}>
                Sign In
              </button>
              <Link className="inline-block align-baseline font-bold text-sm text-purple-400 hover:text-purple-900" to="#">
                Forgot Password?
              </Link>
            </div>
            <Link className="inline-block align-baseline text-sm text-purple-400 hover:text-purple-900" to="/SignUp">
              You don't have an account?{" "}Sign up
            </Link>
          </form>

          <p className="text-center text-gray-500 text-xs">
            &copy;2022 Dream Learn. All rights reserved.
          </p>

        </div>
      </div>

    </div>

  );
}

export default SignIn;
