import React from "react";

function Nav() {
  return (
    <div className="Nav">
      <navbar>
        <div>
          <nav class="sticky top-0 flex px-6 py-4 bg-purple-900 text-white justify-end">
            <ul class=" flex  sm:mt-0">
              <li class="font-bold cursor-pointer mx-2 px-2  ">Home</li>
              <li class="font-bold px-2  cursor-pointer">Learn</li>
            </ul>
          </nav>
        </div>
      </navbar>
    </div>
  );
}

export default Nav;
