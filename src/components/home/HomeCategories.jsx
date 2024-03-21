import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import '../../styles/home/HomeCategories.scss';
import { useTranslation } from 'react-i18next';
import { getName } from '../../languages/language';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import { fetchCategories, fetchSubCategories } from '../../api/Api';

const HomeCategories = () => {

    // API options

    const dataCategories = useQuery('categories', fetchCategories);
    const dataSubCategories = useQuery('sub-categories', fetchSubCategories);

    // i18next

    const { t } = useTranslation();

    return (
        <div className='HomeCategories parent'>
            <div className="wrapper gap-2">
                <div className="head">
                    <h1 className="sub-title">{t("kategoriyalar")}</h1>
                    <Link to='/categories' className="text">{t("barchasi")}</Link>
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
                            slidesPerView: 3,
                            spaceBetween: 30,
                        }
                    }}
                >
                    {dataCategories?.data?.data?.map((item) => (
                        <SwiperSlide key={item?.id}>
                            <Link to={`/categories/${item?.id}`} className="product gap-1 pd-1 round-1">
                                <p className="text">{getName(item)}</p>
                                <img src={item?.image} alt="img" className="img" />
                                <p className="min-text">{dataSubCategories?.data?.data?.filter((c) => c?.category == item?.id)?.length} {t("pc")}</p>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* <Swiper
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
                    {dataCategories?.data?.data?.sort(function (a, b) {
                        return parseInt(b?.id) - parseInt(a?.id)
                    })?.map((item) => (
                        <SwiperSlide key={item?.id}>
                            <Link to={`/categories/${item?.id}`} className="product gap-1 pd-1 round-1">
                                <p className="text">{getName(item)}</p>
                                <img src={item?.image} alt="img" className="img" />
                                <p className="min-text">{dataSubCategories?.data?.data?.filter((c) => c?.category == item?.id)?.length} {t("pc")}</p>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper> */}
            </div>
        </div>
    );
};

export default HomeCategories;