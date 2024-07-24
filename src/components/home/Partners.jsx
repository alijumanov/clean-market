import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { useQuery } from 'react-query';
import '../../styles/home/Partners.scss';
import { fetchPartner } from '../../api/Api';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';

const Partners = () => {

    // API options

    const dataPartners = useQuery('partners', fetchPartner);

    // i18next

    const { t } = useTranslation();

    return (
        <div className='Partners parent'>
            <div className="wrapper gap-2">
                <h1 className="sub-title">{t("logos")}</h1>
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
                    {dataPartners?.data?.data?.map((item) => (
                        <SwiperSlide key={item?.id} className="partner round-1-5 pd-2">
                            <img src={item?.image} alt="img" className="img" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Partners;