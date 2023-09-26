import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import '../../styles/home/Partners.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import Img1 from '../../assets/images/partner1.png';
import Img2 from '../../assets/images/partner2.png';
import Img3 from '../../assets/images/partner3.png';
import { Autoplay, Navigation } from 'swiper/modules';

const Partners = () => {
    return (
        <div className='Partners parent'>
            <div className="wrapper gap-2">
                <h1 className="sub-title">Bizga ishonch bildirgan kompaniyalar</h1>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    loop={true}
                    navigation={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        }
                    }}
                >
                    <SwiperSlide className="partner round-1-5 pd-2">
                        <img src={Img1} alt="img" className="img" />
                    </SwiperSlide>
                    <SwiperSlide className="partner round-1-5 pd-2">
                        <img src={Img2} alt="img" className="img" />
                    </SwiperSlide>
                    <SwiperSlide className="partner round-1-5 pd-2">
                        <img src={Img3} alt="img" className="img" />
                    </SwiperSlide>
                    <SwiperSlide className="partner round-1-5 pd-2">
                        <img src={Img1} alt="img" className="img" />
                    </SwiperSlide>
                    <SwiperSlide className="partner round-1-5 pd-2">
                        <img src={Img2} alt="img" className="img" />
                    </SwiperSlide>
                    <SwiperSlide className="partner round-1-5 pd-2">
                        <img src={Img3} alt="img" className="img" />
                    </SwiperSlide>
                    <SwiperSlide className="partner round-1-5 pd-2">
                        <img src={Img1} alt="img" className="img" />
                    </SwiperSlide>
                    <SwiperSlide className="partner round-1-5 pd-2">
                        <img src={Img2} alt="img" className="img" />
                    </SwiperSlide>
                    <SwiperSlide className="partner round-1-5 pd-2">
                        <img src={Img3} alt="img" className="img" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Partners;