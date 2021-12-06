import React, {useState, useEffect} from 'react'
import "../App.css"
import logo from "../images/logo.png";
import manlogo from "../images/manlogo.gif";

const Rightsidebar = () => {
  return ( 
   <>
   
      <td class="px-6 py-4 whitespace-nowrap">
                
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-black-900 text-white-800">
                <h2>#Categoies</h2>
                </span>
                </td>

                <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-black-800">
                #eduction
                </span>
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-black-800">
                  #Science
                </span>
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-black-800">
                #money
                </span>
                
               </td>

         
              <div class="px-6 py-4 whitespace-nowrap">
              <p class="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">quolity used by many people</p>
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-black-900 text-white-800">
            
              <div class="flex -space-x-2 overflow-hidden">
              
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
             <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
              </div>
                </span>
                </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 sm:px-4 sm:py-12 sm:gap-x-4 md:py-10">
          <div class="relative z-10 col-start-1 row-start-1 px-4 pt-30 pb-3 bg-gradient-to-t from-black sm:bg-none">
          <p class="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">today quote</p>
          <h3 class="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">It’s not about ideas It’s about making ideas happen.</h3>
               </div>
  
</div>

   </>
  )

}
export default Rightsidebar