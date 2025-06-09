import  { useRef, useState } from 'react';
import useClickOutside from '../hooks/useClickOutside';

const Searchbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const searchRef = useRef(null);
    // Custom Hook: Handle Outside click handler
    useClickOutside(searchRef, () => setIsOpen(false))
    
       
    return (
        <>
            <div ref={searchRef}  className='relative py-1 space-x-0 max-md:mr-2.5 sm:space-x-3 px-0 sm:ps-3  rounded md:bg-[#F5F5F5] '>
              <input className='border-none outline-none text-[12px] max-md:hidden' id='search'  type="text" placeholder='What are you looking for?' />
              <button className='active:text-primary max-sm:align-middle' onClick={() => setIsOpen(prev => !prev)} type='submit'>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="size-6 cursor-pointer focus:bg-sky-400 block sm:inline-block" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>

              {/* Small devices pop-up searchbar  */}
              <div className={`w-70 h-20 bg-slate-gray rounded-md flex justify-center items-center shadow-md absolute -left-30 top-10 z-20 md:hidden ${isOpen ? "block":"hidden"}`}>
                <input className='w-[70%] border-l-1 border-t-1 border-b-1 border-primary outline-none text-[12px] px-2 py-1 rounded-l-sm' id='phone_search'  type="text" placeholder='What are you looking for?' />
                <button className='bg-primary text-text-color px-2 py-1 rounded-r-sm cursor-pointer text-sm active:bg-red-900' type='submit'>
                      Search
                  </button>
              </div>
            
          </div>
        </>
    );
};

export default Searchbar;