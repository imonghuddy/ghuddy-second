import React from 'react'
import Header from '../header/Header'
import Banner from '../header/Banner'
import SearchingSection from '../header/SearchingSection'
import Tours from '../tours/Tours'

const Navbar = () => {
  return (
    <>
    <div className='w-full fixed'>
    <div className='bg-bg-primary '>
            <div className='xl:max-w-[1100px] md:max-w-[765px] md:px-[16px] max-w-[343px] px-[0px] xl:px-[0px]  py-6 mx-auto'>
                <div className='flex  justify-between items-center text-txt-primary_light text-small10 font-normal z-20'>
                    <div>
                        <h2>Ghuddy</h2>
                    </div>
                    <div className='flex flex-row items-center gap-8'>
                         <p>Find Lodging</p>
                         <p>My Favourites</p>
                         <p>Get Help</p>
                         <button className='bg-btn-secondary text-bg-white px-6 text-[14px]  py-2 rounded-full'>Log In</button> 
                         <button className='text-btn-secondary bg-bg-white text-[14px] px-6 py-2 rounded-full border-[1px] border-btn-secondary'>Register</button>    
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Banner></Banner>
    <SearchingSection></SearchingSection>
    <Tours></Tours>
    {/* <Header></Header> */}
    </>
    
  )
}

export default Navbar