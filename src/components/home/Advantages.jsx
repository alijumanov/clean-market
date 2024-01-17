import React from 'react';
import "swiper/css";
import { useQuery } from 'react-query';
import { Autoplay } from 'swiper/modules';
import '../../styles/home/Advantages.scss';
import { fetchWhyUs } from '../../api/Api';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from "swiper/react";

const Advantages = () => {

    // API options

    const dataWhyUs = useQuery('why-us', fetchWhyUs);

    // i18next

    const { t } = useTranslation();

    return (
        <div className='Advantages parent'>
            <div className="wrapper">
                <h1 className="sub-title">{t("negabiz")}</h1>
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
                {dataWhyUs?.data?.data?.map((item) => (
                    <SwiperSlide key={item?.id} className="card round-1-5 pd-2-5">
                        <img src={item?.image} alt="img" className="img" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Advantages;