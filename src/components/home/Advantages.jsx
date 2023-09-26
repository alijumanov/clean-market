import React from 'react';
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import '../../styles/home/Advantages.scss';
import Img from '../../assets/images/adv.png';
import { Swiper, SwiperSlide } from "swiper/react";

const Advantages = () => {
    return (
        <div className='Advantages parent'>
            <div className="wrapper">
                <h1 className="sub-title">Nega bizni tanlashadi?</h1>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper mtop-3 mbot-2"
                breakpoints={{
                    768: {
                        slidesPerView: 1.8,
                        spaceBetween: 30,
                    }
                }}
            >
                <SwiperSlide className="card round-1-5 pd-2-5">
                    {/* <h1 className="title">Bepul yetkazib berish</h1> */}
                    <img src={Img} alt="img" className="img" />
                </SwiperSlide>
                <SwiperSlide className="card round-1-5 pd-2-5">
                    {/* <h1 className="title">Bepul yetkazib berish</h1> */}
                    <img src={Img} alt="img" className="img" />
                </SwiperSlide>
                <SwiperSlide className="card round-1-5 pd-2-5">
                    {/* <h1 className="title">Bepul yetkazib berish</h1> */}
                    <img src={Img} alt="img" className="img" />
                </SwiperSlide>
                <SwiperSlide className="card round-1-5 pd-2-5">
                    {/* <h1 className="title">Bepul yetkazib berish</h1> */}
                    <img src={Img} alt="img" className="img" />
                </SwiperSlide>
                <SwiperSlide className="card round-1-5 pd-2-5">
                    {/* <h1 className="title">Bepul yetkazib berish</h1> */}
                    <img src={Img} alt="img" className="img" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Advantages;