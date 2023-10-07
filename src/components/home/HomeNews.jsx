import React from 'react';
import "swiper/css";
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import '../../styles/home/HomeNews.scss';
import { Autoplay } from 'swiper/modules';
import { fetchNews } from '../../api/Api';
import EyeIcon from '../../assets/icons/eye.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import CalendarIcon from '../../assets/icons/calendar.svg';

const HomeNews = () => {

    // API options

    const dataNews = useQuery('news', fetchNews);

    console.log(dataNews?.data?.data)

    // i18next

    let lang = localStorage.getItem('i18nextLng');

    return (
        <div className='HomeNews parent'>
            <div className="wrapper gap-2">
                <div className="head">
                    <h1 className="sub-title">Clean market yangiliklari</h1>
                    <Link to='/news/1' className="text">Barcha yangiliklar</Link>
                </div>
                {dataNews?.data?.data?.slice(0, 1)?.map((item) => (
                    <div key={item?.id} className="main_card round-1">
                        <div className="left">
                            <img src={item?.image1} alt="img" className="img round-1" />
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
                            <p className="text name">{lang == 'uz' ? item?.name_uz : lang == 'ru' ? item?.name_ru : item?.name_en}</p>
                            <p className="desc min-text">{lang == 'uz' ? item?.description_uz : lang == 'ru' ? item?.description_ru : item?.description_en}</p>
                            <Link to={`/news/${item?.id}`} className="link text">Read more</Link>
                        </div>
                    </div>
                ))}
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
                    {dataNews?.data?.data?.slice(1)?.map((item) => (
                        <SwiperSlide key={item?.id} className="new_card gap-1 pd-05 round-1">
                            <img src={item?.image1} alt="img" className="img round-07" />
                            <p className="name min-text">{lang == 'uz' ? item?.name_uz : lang == 'ru' ? item?.name_ru : item?.name_en}</p>
                            <p className="desc min-text">{lang == 'uz' ? item?.description_uz : lang == 'ru' ? item?.description_ru : item?.description_en}</p>
                            <Link to={`/news/${item?.id}`} className="link min-text">Read more</Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default HomeNews;