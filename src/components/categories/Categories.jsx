import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../providers/AuthProvider';
import Container from '../../shared/container';
import './Categories.css'
import CategoryBox from './CategoryBox';

import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';



const Categories = () => {
    const [categoriesData, setCategoriesData] = useState([]);
    const { activeCategory, handleCategoryClick } =
      useContext(AuthContext);

      useEffect(() => {
        fetch("propertyType.json")
        .then((res) => res.json())
        .then((data) => setCategoriesData(data))
        .catch((error)=> console.log(error))
    }, [])

  return (
    <div>
        <Container>
        <div className="pt-4 bg-bg-warning">
        <Swiper
          slidesPerView={"auto"}
                        centeredSlides={false}
                         spaceBetween={0}
                        freeMode={true}
                        grabCursor={true}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"

                        breakpoints={{
                          // when window width is >= 640px
                          200: {
                            width: 200,
                            slidesPerView: 3,
                          },
                          375: {
                            width: 375,
                            slidesPerView: 5,
                          },
                          480: {
                            width: 480,
                            slidesPerView: 7,
                          },
                          
                        }}
          
        >
          {categoriesData.map((item) => (
            <SwiperSlide key={item.label} className="swiper-slide-margin">
              <CategoryBox
                label={item.label}
                iconUrl={item.iconUrl}
                value={item.value}
                isActive={activeCategory === item.label}
                onClick={() => handleCategoryClick(item.label)}
              ></CategoryBox>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
        </Container>
    </div>
  )
}

export default Categories