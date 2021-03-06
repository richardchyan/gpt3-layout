import React from 'react'
import people from '../assets/people.png';
import ai from '../assets/ai.png';

const Header = () => {
   return (
      // main header container
      <div className="flex flex-col lg:flex-row items-center m-auto max-w-screen-lg">
         {/* sub-container 1 */}
         <div className="flex flex-col items-start justify-center space-y-4 lg:space-y-12 m-auto w-4/5">
            {/* main title */}
            <h1 className="text-5xl bg-gradient-to-r from-red-300 via-indigo-600 to-blue-400 text-transparent
            bg-clip-text text-left">Let’s Build Something amazing with     GPT-3 OpenAI</h1>
            <p className="text-lg text-white font-medium text-left">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            {/* email input */}
            <div className="flex flex-col sm:flex-row m-auto">
               <input type="email" placeholder="your e-mail address" className="p-2 sm:rounded-l-md outline-none focus:ring-2 ring-blue-400 ring-inset w-full" />
               <button className="p-2 sm:rounded-r-md bg-yellow-600">Get Started Now!</button>
            </div>
            {/* User content */}
            <div className="flex flex-col items-center space-x-4 m-auto">
               <img src={people} alt="users" />
               <p className="text-white">1,600 people requested access a visit in last 24 hours</p>
            </div>
         </div>
         {/* sub container 2 */}
         <div className="mt-4">
         {/* large AI head image */}
            <img src={ai} alt="ai" className="w-4/5 lg:w-full m-auto " />
         </div>
       </div>
   )
}

export default Header
