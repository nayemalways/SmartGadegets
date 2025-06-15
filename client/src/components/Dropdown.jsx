import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useClickOutside from '../hooks/useClickOutside';


const Dropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  

  // Dropdown Handler
  const dropdownHandler = () => {
    setDropdownOpen(prev => !prev)
  }

  // Close dropdown when clicking outside
  useClickOutside(dropdownRef, () => setDropdownOpen(false));
 
   
    return (
         
            <div className='z-50'>
              <div ref={dropdownRef} className='w-7 md:w-10 md:h-10 border rounded-full flex justify-center items-center overflow-hidden cursor-pointer relative' onClick={dropdownHandler}>
                <img className='w-full' src="https://i.pravatar.cc/30" alt="Profile_Icon" />
              </div>
               <ul className={`w-56 absolute mt-1 right-1 md:right-15 lg:right-10 xl:right-25 overflow-hidden rounded-lg bg-gray-900/90 backdrop-blur-xl shadow-lg duration-400 ${dropdownOpen ? "opacity-100":"opacity-0 -translate-x-4 "}`}>
                  <li className='hover:bg-gray-800 px-4 py-3 space-x-3 border-b border-gray-800'>
                    <svg
                      className="inline w-5 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <Link to='/' className='text-gray-200'>Manage My Account</Link>
                  </li>
                  <li className='hover:bg-gray-800 px-4 py-3 space-x-3 border-b border-gray-800'>
                    <svg
                      className="inline w-5 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    <Link to='/' className='text-gray-200'>My Order</Link>
                  </li>
                  <li className='hover:bg-gray-800 px-4 py-3 space-x-3 border-b border-gray-800'>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-x-icon lucide-circle-x inline w-5 text-gray-300"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <path d="M15 9l-6 6M9 9l6 6" />
                      </svg>
                    <Link to='/' className='text-gray-200'>My Cancellations</Link>
                  </li>
                  <li className='hover:bg-gray-800 px-4 py-3 space-x-3 border-b border-gray-800'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star-icon lucide-star inline w-5 text-gray-300"
                    >
                    <path d="M11.525 2.295a.53.53 0 01.95 0l2.31 4.679a2.123 2.123 0 001.595 1.16l5.166.756a.53.53 0 01.294.904l-3.736 3.638a2.123 2.123 0 00-.611 1.878l.882 5.14a.53.53 0 01-.771.56l-4.618-2.428a2.122 2.122 0 00-1.973 0L6.396 21.01a.53.53 0 01-.77-.56l.881-5.139a2.122 2.122 0 00-.611-1.879L2.16 9.795a.53.53 0 01.294-.906l5.165-.755a2.122 2.122 0 001.597-1.16z" />
                  </svg>
                    <Link to='/' className='text-gray-200'>My Reviews</Link>
                  </li>
                  <li className='hover:bg-gray-800 px-4 py-3 space-x-3'>
                    <svg
                      className="inline w-5 text-gray-300 rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                      <polyline points="16 17 21 12 16 7" />
                      <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                    <Link to='/' className='text-gray-200'>Logout</Link>
                  </li>
                </ul>
            </div>
         
    );
};

export default Dropdown;