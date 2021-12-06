import React, {useState, useEffect} from 'react'
import "../App.css"
import logo from "../images/logo.png";
import manlogo from "../images/manlogo.gif";

const Todo = () => {
  return ( 
   <>
<nav class="bg-white-800 shadow-2xl bg-white rounded-lg h-18">
          <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
          <img class="block  h-28 w-auto" src={logo} alt="Workflow" />

      
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div class="ml-3 relative">
          <div>
            <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <img class="h-9 w-9 rounded-full" src={manlogo} alt="" />
            </button>
          </div>

        </div>
      </div>
      </div>
     </div>

</nav>
   </>
  )

}
export default Todo