import React from 'react';
import "swiper/css";
import { Link } from 'react-router-dom';
import '../../styles/home/HomeNews.scss';
import { Autoplay } from 'swiper/modules';
import Img from '../../assets/images/new.png';
import EyeIcon from '../../assets/icons/eye.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import CalendarIcon from '../../assets/icons/calendar.svg';

const HomeNews = () => {
    return (
        <div className='HomeNews parent'>
            <div className="wrapper gap-2">
                <div className="head">
                    <h1 className="sub-title">Clean market yangiliklari</h1>
                    <Link to='/news/1' className="text">Barcha yangiliklar</Link>
                </div>
                <div className="main_card round-1">
                    <div className="left">
                        <img src={Img} alt="img" className="img round-1" />
                    </div>
                    <div className="right pd-1 gap-1">
                        <div className="top gap-2">
                            <div className="actual min-text pd-05">Actual new</div>
                            <div className="view gap-05">
                                <img src={EyeIcon} alt="icn" className="icn" />
                                <p className="min-text">16.5k views</p>
                            </div>
                            <div className="view gap-05">
                                <img src={CalendarIcon} alt="icn" className="icn" />
                                <p className="min-text">05.11.2022</p>
                            </div>
                        </div>
                        <p className="text name">Latest news</p>
                        <p className="desc min-text">As an effort to keep polishing our services for a more satisfactory customer experience, we are very happy to announce the establishment of our new SamAutoTrans warehouse! This stands as an embodiment of our striving for ever-improving professionalism and quality customer service.As an effort to keep polishing our services for a more satisfactory customer experience, we are very happy </p>
                        <Link to={`/news/1`} className="link text">Read more</Link>
                    </div>
                </div>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        }
                    }}
                >
                    <SwiperSlide className="new_card gap-1 pd-05 round-1">
                        <img src={Img} alt="img" className="img round-07" />
                        <p className="name min-text">What should be the arrangement of furniture in the bathroom?</p>
                        <p className="desc min-text">As an effort to keep polishing our services for a more satisfactory customer experience, we </p>
                        <Link to={`/news/1`} className="link min-text">Read more</Link>
                    </SwiperSlide>
                    <SwiperSlide className="new_card gap-1 pd-05 round-1">
                        <img src={Img} alt="img" className="img round-07" />
                        <p className="name min-text">What should be the arrangement of furniture in the bathroom?</p>
                        <p className="desc min-text">As an effort to keep polishing our services for a more satisfactory customer experience, we </p>
                        <Link to={`/news/1`} className="link min-text">Read more</Link>
                    </SwiperSlide>
                    <SwiperSlide className="new_card gap-1 pd-05 round-1">
                        <img src={Img} alt="img" className="img round-07" />
                        <p className="name min-text">What should be the arrangement of furniture in the bathroom?</p>
                        <p className="desc min-text">As an effort to keep polishing our services for a more satisfactory customer experience, we </p>
                        <Link to={`/news/1`} className="link min-text">Read more</Link>
                    </SwiperSlide>
                    <SwiperSlide className="new_card gap-1 pd-05 round-1">
                        <img src={Img} alt="img" className="img round-07" />
                        <p className="name min-text">What should be the arrangement of furniture in the bathroom?</p>
                        <p className="desc min-text">As an effort to keep polishing our services for a more satisfactory customer experience, we </p>
                        <Link to={`/news/1`} className="link min-text">Read more</Link>
                    </SwiperSlide>
                    <SwiperSlide className="new_card gap-1 pd-05 round-1">
                        <img src={Img} alt="img" className="img round-07" />
                        <p className="name min-text">What should be the arrangement of furniture in the bathroom?</p>
                        <p className="desc min-text">As an effort to keep polishing our services for a more satisfactory customer experience, we </p>
                        <Link to={`/news/1`} className="link min-text">Read more</Link>
                    </SwiperSlide>
                    <SwiperSlide className="new_card gap-1 pd-05 round-1">
                        <img src={Img} alt="img" className="img round-07" />
                        <p className="name min-text">What should be the arrangement of furniture in the bathroom?</p>
                        <p className="desc min-text">As an effort to keep polishing our services for a more satisfactory customer experience, we </p>
                        <Link to={`/news/1`} className="link min-text">Read more</Link>
                    </SwiperSlide>
                    <SwiperSlide className="new_card gap-1 pd-05 round-1">
                        <img src={Img} alt="img" className="img round-07" />
                        <p className="name min-text">What should be the arrangement of furniture in the bathroom?</p>
                        <p className="desc min-text">As an effort to keep polishing our services for a more satisfactory customer experience, we </p>
                        <Link to={`/news/1`} className="link min-text">Read more</Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default HomeNews;