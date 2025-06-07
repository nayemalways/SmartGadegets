import  { useEffect, useRef, useState } from 'react';

const Searchbar = () => {
    const [toggle, setToggle] = useState(false);
      const smallSearchbar = useRef(null);
     
      const searchbarToggler = () => {
        setToggle(prev => !prev);
      };
    
    
       // Close dropdown when clicking outside
       useEffect(() => {
        const handleClickOutside = (event) => {
          if(smallSearchbar.current && !smallSearchbar.current.contains(event.target)) {
            setToggle(false);
          }
        }
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside)
        }
       }, []);
    
    return (
        <>
            <div ref={smallSearchbar}  className='relative py-1 space-x-0 max-md:mr-2.5 sm:space-x-3 px-0 sm:ps-3  rounded sm:bg-[#F5F5F5] '>
              <input className='border-none outline-none text-[12px] max-sm:hidden' id='search'  type="text" placeholder='What are you looking for?' />
              <button className='active:text-primary max-sm:align-middle' onClick={searchbarToggler} type='submit'>
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
              <div className={`w-70 h-20 bg-slate-gray rounded-md flex justify-center items-center shadow-md absolute -left-30 top-10 z-20 sm:hidden ${toggle ? "block":"hidden"}`}>
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