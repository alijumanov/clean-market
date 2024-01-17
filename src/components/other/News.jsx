import React from 'react';
import "swiper/css";
import '../../styles/other/News.scss';
import { useQuery } from 'react-query';
import { Autoplay } from 'swiper/modules';
import { fetchNews } from '../../api/Api';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams } from 'react-router-dom';

const News = () => {

    // router options

    const { id } = useParams();

    // API options

    const dataNews = useQuery('news', fetchNews);

    // i18next

    const { t } = useTranslation();
    let lang = localStorage.getItem('i18nextLng');

    return (
        <div className='News parent'>
            {dataNews?.data?.data?.filter((c) => c?.id == id)?.map((item) => (
                <div key={item?.id} className="wrapper gap-2">
                    <h1 className="sub-title">{lang == 'uz' ? item?.name_uz : lang == 'ru' ? item?.name_ru : item?.name_en}</h1>
                    <img src={item?.image1} alt="news_img" className="img round-1-5" />
                    <p className="text desc">{lang == 'uz' ? item?.description_uz : lang == 'ru' ? item?.description_ru : item?.description_en}</p>
                    {dataNews?.data?.data?.filter((k) => k?.id != id)?.length > 0 &&
                        <p className="big-text"><b>{t("other_news")}</b></p>
                    }
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
                        {dataNews?.data?.data?.filter((k) => k?.id != id)?.map((j) => (
                            <SwiperSlide key={j?.id} className="new_card gap-1 pd-05 round-1">
                                <img src={j?.image1} alt="img" className="img round-07" />
                                <p className="name min-text">{lang == 'uz' ? j?.name_uz : lang == 'ru' ? j?.name_ru : j?.name_en}</p>
                                <p className="desc min-text">{lang == 'uz' ? j?.description_uz : lang == 'ru' ? j?.description_ru : j?.description_en}</p>
                                <Link to={`/news/${j?.id}`} className="link min-text">Read more</Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ))}
        </div>
    );
};

export default News;