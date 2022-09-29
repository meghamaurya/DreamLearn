import React from 'react'
import Carousel from '../Hero Section/Carousel'

const Signin = () => {
  return (
    <div>
      <section className="h-screen ">
        <div className="px-4 h-full  text-gray-800">
          <div
            className=" flex xl:justify-center lg:justify-around justify-center items-center flex-wrap h-full w-full "
          >
            <div
              className=" grow-0 shrink-1 md:shrink-0 basis-auto 2xl:w-7/12 xl:w-8/12  lg:w-7/12 md:w-8/12 sm:w-11/12 mb-12 md:mb-0"
            >
              <Carousel className="w-full " />

            </div>
            <div className="2xl:w-4/12 xl:w-4/12 lg:w-4/12 md:w-8/12 sm:6/12 mt-5 sm:w-11/12 ">
              <form>
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="text-lg mb-0 mr-4">SignUp with Email</p>
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Enter Your Full Name"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2"
                    >Remember me</label
                    >
                  </div>
                  <a href="#!" className="text-gray-800">Forgot password?</a>
                </div>

                <div className="text-center lg:justify-center items-center">
                  <button
                    type="button"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Register
                  </button>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signin
