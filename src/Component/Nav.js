import React from "react";

function Nav() {
  return (
    <div className="sticky top-0 ">
      <div className="container-fluid">
        <nav className="flex items-center py-2 bg-purple-900 text-white justify-between ">
          <div className="flex px-0 -space-x-0.5 container-fluid ">
            <img
              src="./MusicL.png"
              className="h-14 rounded-lg cursor-pointer mx-2  px-4 pr-0  hover:shadow-purple-100 shadow-lg inline-block"
              alt="Dream Learn Logo"
            ></img>
            <span className="font-extrabold flex items-center justify-start text-3xl cursor-pointer mt-4">
              Dream Learn
            </span>
          </div>
          {/* <div className=" flex  flex-col justify-center overflow-hidden bg-gradient-to-br from-lime-300 to-green-500 sm:py-12"> */}
  {/* <div className="relative rounded-2xl bg-black px-6 pt-2 pb-2 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:px-10"> */}
    <div className="mx-auto max-w-md sm:mx-auto sm:max-w-lg sm:px-10 mt-4 ">


      <form action="" className="relative mx-auto w-max text-white">
        <input type="search" 
              className="peer cursor-pointer relative z-10 h-8 w-12 rounded-full bg-transparent pl-8 outline-none focus:w-full focus:cursor-text focus:border-white border-2 focus:pl-16 focus:pr-4 " />
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-white px-3.5 peer-focus:border-white peer-focus:stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </form>


    {/* </div> */}
  {/* </div> */}
</div>

          <div>
            <ul className=" flex  sm:mt-0 items-center py-2  space-x-10 px-20 text-xl ">
              <li className="font-bold cursor-pointer mt-5 hover:rounded-lg hover:shadow-purple-100 shadow-lg">Home</li>
              <li className="font-bold cursor-pointer mt-5 hover:shadow-purple-100 hover:rounded-lg shadow-lg">Learn</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
