import React from 'react';
import '../../styles/other/News.scss';
import "swiper/css";
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import Img from '../../assets/images/new.png';
import NewsImg from '../../assets/images/news.png';
import { Swiper, SwiperSlide } from "swiper/react";

const News = () => {
    return (
        <div className='News parent'>
            <div className="wrapper gap-2">
                <h1 className="sub-title">Yangilik nomi zagolovka</h1>
                <img src={NewsImg} alt="news_img" className="img round-1-5" />
                <p className="text desc">Yangilik chiqqan vaqti:</p>
                <p className="big-text"><b>21.05.2023</b></p>
                <p className="text desc">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.simply dummy text of the printing and typesetting industry. </p>
                <p className="big-text"><b>Boshqa yangiliklar</b></p>
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
                        <Link className="link min-text">Read more</Link>
                    </SwiperSlide>
                    <SwiperSlide className="new_card gap-1 pd-05 round-1">
                        <img src={Img} alt="img" className="img round-07" />
                        <p className="name min-text">What should be the arrangement of furniture in the bathroom?</p>
                        <p className="desc min-text">As an effort to keep polishing our services for a more satisfactory customer experience, we </p>
                        <Link className="link min-text">Read more</Link>
                    </SwiperSlide>
                    <SwiperSlide className="new_card gap-1 pd-05 round-1">
                        <img src={Img} alt="img" className="img round-07" />
                        <p className="name min-text">What should be the arrangement of furniture in the bathroom?</p>
                        <p className="desc min-text">As an effort to keep polishing our services for a more satisfactory customer experience, we </p>
                        <Link className="link min-text">Read more</Link>
                    </SwiperSlide>
                    <SwiperSlide className="new_card gap-1 pd-05 round-1">
                        <img src={Img} alt="img" className="img round-07" />
                        <p className="name min-text">What should be the arrangement of furniture in the bathroom?</p>
                        <p className="desc min-text">As an effort to keep polishing our services for a more satisfactory customer experience, we </p>
                        <Link className="link min-text">Read more</Link>
                    </SwiperSlide>
                    <SwiperSlide className="new_card gap-1 pd-05 round-1">
                        <img src={Img} alt="img" className="img round-07" />
                        <p className="name min-text">What should be the arrangement of furniture in the bathroom?</p>
                        <p className="desc min-text">As an effort to keep polishing our services for a more satisfactory customer experience, we </p>
                        <Link className="link min-text">Read more</Link>
                    </SwiperSlide>
                    <SwiperSlide className="new_card gap-1 pd-05 round-1">
                        <img src={Img} alt="img" className="img round-07" />
                        <p className="name min-text">What should be the arrangement of furniture in the bathroom?</p>
                        <p className="desc min-text">As an effort to keep polishing our services for a more satisfactory customer experience, we </p>
                        <Link className="link min-text">Read more</Link>
                    </SwiperSlide>
                    <SwiperSlide className="new_card gap-1 pd-05 round-1">
                        <img src={Img} alt="img" className="img round-07" />
                        <p className="name min-text">What should be the arrangement of furniture in the bathroom?</p>
                        <p className="desc min-text">As an effort to keep polishing our services for a more satisfactory customer experience, we </p>
                        <Link className="link min-text">Read more</Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default News;