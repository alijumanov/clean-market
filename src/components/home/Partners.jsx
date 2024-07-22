import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { useQuery } from 'react-query';
import '../../styles/home/Partners.scss';
import { fetchPartner } from '../../api/Api';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import Img1 from '../../assets/images/part1.png';
import Img2 from '../../assets/images/part2.png';
import Img3 from '../../assets/images/part3.png';
import Img4 from '../../assets/images/part4.png';
import Img5 from '../../assets/images/part5.png';
import Img6 from '../../assets/images/part6.png';
import Img7 from '../../assets/images/part7.png';
import Img10 from '../../assets/images/part10.png';
import Img11 from '../../assets/images/part11.png';

const Partners = () => {

    // API options

    const dataPartners = useQuery('partners', fetchPartner);

    const dataImages = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img10, Img11];

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
                    {/* {dataPartners?.data?.data?.map((item) => (
                        <SwiperSlide key={item?.id} className="partner round-1-5 pd-2">
                            <img src={item?.image} alt="img" className="img" />
                        </SwiperSlide>
                    ))} */}
                    {dataImages?.map((item, index) => (
                        <SwiperSlide key={index} className="partner round-1-5 pd-2">
                            <img src={item} alt="img" className="img" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Partners;