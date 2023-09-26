import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';
import '../../styles/home/HomeCategories.scss';
import Img from '../../assets/images/category.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';

const HomeCategories = () => {
    return (
        <div className='HomeCategories parent'>
            <div className="wrapper gap-2">
                <div className="head">
                    <h1 className="sub-title">Kategoriyalar</h1>
                    <Link to='/categories' className="text">Barchasi</Link>
                </div>
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
                    <SwiperSlide>
                        <Link to={`/`} className="product gap-1 pd-1 round-1">
                            <p className="text">Поломоичные Машины</p>
                            <img src={Img} alt="img" className="img" />
                            <p className="min-text">12 ta mahsulot</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/`} className="product gap-1 pd-1 round-1">
                            <p className="text">Поломоичные Машины</p>
                            <img src={Img} alt="img" className="img" />
                            <p className="min-text">12 ta mahsulot</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/`} className="product gap-1 pd-1 round-1">
                            <p className="text">Поломоичные Машины</p>
                            <img src={Img} alt="img" className="img" />
                            <p className="min-text">12 ta mahsulot</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/`} className="product gap-1 pd-1 round-1">
                            <p className="text">Поломоичные Машины</p>
                            <img src={Img} alt="img" className="img" />
                            <p className="min-text">12 ta mahsulot</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/`} className="product gap-1 pd-1 round-1">
                            <p className="text">Поломоичные Машины</p>
                            <img src={Img} alt="img" className="img" />
                            <p className="min-text">12 ta mahsulot</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to={`/`} className="product gap-1 pd-1 round-1">
                            <p className="text">Поломоичные Машины</p>
                            <img src={Img} alt="img" className="img" />
                            <p className="min-text">12 ta mahsulot</p>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default HomeCategories;