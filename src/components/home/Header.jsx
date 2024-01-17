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
        <div className='Header parent'>
            <div className="wrapper">
                <Swiper
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="mySwiper">
                    {dataSlider?.data?.data?.map((item) => (
                        <SwiperSlide key={item?.id} className="lenta pd-3">
                            <img src={item?.image} alt="img" className="img" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Header;