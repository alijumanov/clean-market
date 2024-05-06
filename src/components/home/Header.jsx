import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../styles/home/Header.scss';
import { useQuery } from 'react-query';
import { fetchSliders } from '../../api/Api';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Header = () => {

    // API options

    const dataSlider = useQuery('sliders', fetchSliders);

    return (
        <div className='HomeHeader parent'>
            <div className="wrapper gap-2">                
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={true}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="mySwiper">
                    {dataSlider?.data?.data?.map((item) => (
                        <SwiperSlide key={item?.id} className="lenta round-05">
                            <div><img src={item?.image} alt="img" className="img round-05" /></div>
                        </SwiperSlide>
                    ))}
                    {dataSlider?.data?.data?.map((item) => (
                        <SwiperSlide key={item?.id} className="lenta round-05">
                            <div><img src={item?.image} alt="img" className="img round-05" /></div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Header;