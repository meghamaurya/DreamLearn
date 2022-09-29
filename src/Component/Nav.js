import React from "react";

function Nav() {
  return (
    <div className="sticky top-0 ">
      <div className="container-fluid">
        <nav className="flex  py-1 bg-purple-900 text-white justify-between">
          <div className="flex px-0 -space-x-0.5 container-fluid">
            <img
              src="./MusicL.png"
              className="h-16 rounded-lg cursor-pointer mx-2  px-8"
              alt="Dream Learn Logo"
            ></img>
            <span className="font-extrabold flex items-center justify-start text-3xl cursor-pointer">
              Dream Learn
            </span>
          </div>
          <div>
            <ul className=" flex  sm:mt-0 items-center py-4 space-x-10 px-20 text-3xl ">
              <li className="font-bold cursor-pointer hover:text-purple-400">Home</li>
              <li className="font-bold cursor-pointer ">Learn</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
