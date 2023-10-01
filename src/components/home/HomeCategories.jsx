import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import '../../styles/home/HomeCategories.scss';
import { fetchCategories } from '../../api/Api';
import { getName } from '../../languages/language';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';

const HomeCategories = () => {

    // API options

    const dataCategories = useQuery('categories', fetchCategories);

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
                    {dataCategories?.data?.data?.map((item) => (
                        <SwiperSlide key={item?.id}>
                            <Link to={`/categories/${item?.id}`} className="product gap-1 pd-1 round-1">
                                <p className="text">{getName(item)}</p>
                                <img src={item?.image} alt="img" className="img" />
                                <p className="min-text">12 ta mahsulot</p>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default HomeCategories;