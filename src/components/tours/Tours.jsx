import React from 'react'
import Container from '../../shared/container'
import Categories from '../categories/Categories'

const Tours = () => {
  return (
    <div className='w-full'>
        <div className='bg-bg-bg_light h-[500px]'>
            <div className='xl:max-w-[1100px] md:max-w-[765px] md:px-[16px] max-w-[343px] px-[0px] xl:px-[0px] h-[300px] bg-bg-white mx-auto'>
                <h2 className='text-base20 font-medium leading-10 tracking-wider'>Tours</h2>

                <Categories></Categories>
            </div>
        </div>
    </div>
  )
}

export default Tours