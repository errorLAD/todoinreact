import React, {useState, useEffect} from 'react'
import "../App.css"


const Sidebar = () => {
  return ( 
   <>

<div class="min-h-screen  bg-gray-70 py-6">
		<div class="flex w-full max-w-xs p-4 bg-white-800">
			<ul class="flex flex-col w-full">
				<li class="my-px">
					<a href="#"
					   class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 bg-gray-100">
					    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
						<span class="ml-3">Home</span>
					
					</a>
				</li>
				<li class="my-px">
					<span class="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">Feature</span>
				</li>
				<li class="my-px">
					<a href="#"
					   class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
						<svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
						<span class="ml-3">Products</span>
					</a>
				</li>
             
                <li class="my-px">
					<a href="#"
					   class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
						<span class="ml-3">Pricing</span>
					</a>
				</li>
                <li class="my-px">
					<a href="#"
					   class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
					<svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
                   </svg>
						<span class="ml-3">Blog </span>
					</a>
				</li>
                <li class="my-px">
				    <a href="#"
					   class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
					       <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
						<span class="ml-3">Book a Demo </span></a>
				
				</li>
                <li class="my-px">
					<a href="#"
					   class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
					           <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                            </svg>
						<span class="ml-3">About Us</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
  
   </>
  )

}
export default Sidebar