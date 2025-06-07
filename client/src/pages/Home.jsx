import React from 'react';
import Layout from '../layout/Layout';

const Home = () => {
    return (
        <Layout>
             <div className='border w-60 h-20 flex justify-center items-center'>
               <input className='border-l-1 border-t-1 border-b-1 border-primary outline-none text-[12px] px-2 py-1 rounded-l-sm' id='phone_search'  type="text" placeholder='What are you looking for?' />
               <button className='bg-primary text-text-color px-2 py-1 rounded-r-sm cursor-pointer text-sm active:bg-red-900' type='submit'>
                     Search
                </button>
            </div>
        </Layout>
    );
};

export default Home;