import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../styles/home/Header.scss';
import Img from '../../assets/images/header.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Header = () => {
    return (
        <div className='Header parent'>
            <div className="wrapper">
                <Swiper
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="mySwiper">
                    <SwiperSlide className="lenta pd-3">
                        <img src={Img} alt="img" className="img" />
                        <p className="text desc">The industry's standard dummy text ever since the. The industry's standard dummy text ever since the </p>
                    </SwiperSlide>
                    <SwiperSlide className="lenta pd-3">
                        <img src={Img} alt="img" className="img" />
                        <p className="text desc">The industry's standard dummy text ever since the. The industry's standard dummy text ever since the </p>
                    </SwiperSlide>
                    <SwiperSlide className="lenta pd-3">
                        <img src={Img} alt="img" className="img" />
                        <p className="text desc">The industry's standard dummy text ever since the. The industry's standard dummy text ever since the </p>
                    </SwiperSlide>
                    <SwiperSlide className="lenta pd-3">
                        <img src={Img} alt="img" className="img" />
                        <p className="text desc">The industry's standard dummy text ever since the. The industry's standard dummy text ever since the </p>
                    </SwiperSlide>
                    <SwiperSlide className="lenta pd-3">
                        <img src={Img} alt="img" className="img" />
                        <p className="text desc">The industry's standard dummy text ever since the. The industry's standard dummy text ever since the </p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Header;