import React from 'react'

const CategoryBox = ({label, iconUrl, isActive, onClick}) => {
  return (
    <div className='flex flex-col text-txt-primary_light  items-center justify-center h-full'>
        <img className='w-5 h-5 text-txt-primary_light' src={iconUrl} alt="" />
        <div className='text-center text-txt-primary_light'>{label}</div>
    </div>
  )
}

export default CategoryBox