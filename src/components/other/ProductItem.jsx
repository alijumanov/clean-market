import React, { useMemo, useState } from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { useQuery } from 'react-query';
import { Navigation } from 'swiper/modules';
import '../../styles/other/ProductItem.scss';
import { useParams } from 'react-router-dom';
import TopProducts from '../home/TopProducts';
import { useTranslation } from 'react-i18next';
import { fetchProductItem } from '../../api/Api';
import { Swiper, SwiperSlide } from "swiper/react";
import { getName } from '../../languages/language';

const ProductItem = ({ changeProdValue }) => {

    // router options

    const { id } = useParams();

    // API options

    const dataProductItem = useQuery(['product-item', id], () => fetchProductItem(id));

    // i18next

    const { t } = useTranslation();
    let lang = localStorage.getItem('i18nextLng');

    // image options

    const [imageValue, setImageValue] = useState("");

    useMemo(() => {
        setImageValue(dataProductItem?.data?.data?.image1)
    }, [dataProductItem?.isLoading]);

    console.log(dataProductItem?.data?.data)

    return (
        <>
            <div className="ProductItem parent">
                <div key={dataProductItem?.data?.data?.id} className="wrapper gap-2">
                    <h1 className="name">{getName(dataProductItem?.data?.data)}</h1>
                    <div className="infos gap-3">
                        <div className="left gap-1">
                            <div className="main_img">
                                <img src={imageValue} alt="img" className='img round-1' />
                            </div>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={10}
                                loop={true}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper"
                                breakpoints={{
                                    768: {
                                        slidesPerView: 4,
                                        spaceBetween: 30,
                                    }
                                }}
                            >
                                <SwiperSlide className="img_card" onClick={() => setImageValue(dataProductItem?.data?.data?.image1)}>
                                    <img src={dataProductItem?.data?.data?.image1} alt="img" className="img round-07" />
                                </SwiperSlide>
                                <SwiperSlide className="img_card" onClick={() => setImageValue(dataProductItem?.data?.data?.image2)}>
                                    <img src={dataProductItem?.data?.data?.image2} alt="img" className="img round-07" />
                                </SwiperSlide>
                                <SwiperSlide className="img_card" onClick={() => setImageValue(dataProductItem?.data?.data?.image3)}>
                                    <img src={dataProductItem?.data?.data?.image3} alt="img" className="img round-07" />
                                </SwiperSlide>
                                <SwiperSlide className="img_card" onClick={() => setImageValue(dataProductItem?.data?.data?.image4)}>
                                    <img src={dataProductItem?.data?.data?.image4} alt="img" className="img round-07" />
                                </SwiperSlide>
                                <SwiperSlide className="img_card" onClick={() => setImageValue(dataProductItem?.data?.data?.image5)}>
                                    <img src={dataProductItem?.data?.data?.image5} alt="img" className="img round-07" />
                                </SwiperSlide>
                                <SwiperSlide className="img_card" onClick={() => setImageValue(dataProductItem?.data?.data?.image6)}>
                                    <img src={dataProductItem?.data?.data?.image6} alt="img" className="img round-07" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="middle gap-1">
                            <p className="text">{t("characters")}</p>
                            {/* <p className="desc desc_box pd-05 round-05 min-text">{lang == 'uz' ? dataProductItem?.data?.data?.text_uz : lang == 'ru' ? dataProductItem?.data?.data?.text_ru : dataProductItem?.data?.data?.text_en}</p> */}
                            <div className="lists gap-05">
                                {lang == "uz" && dataProductItem?.data?.data?.description_uz?.split("\r\n\r\n")?.map((c) => (
                                    <p key={c} className="desc desc_box min-text pd-05">{c}</p>
                                ))}
                                {lang == "ru" && dataProductItem?.data?.data?.description_ru?.split("\r\n\r\n")?.map((c) => (
                                    <p key={c} className="desc desc_box min-text pd-05">{c}</p>
                                ))}
                                {lang == "en" && dataProductItem?.data?.data?.description_en?.split("\r\n\r\n")?.map((c) => (
                                    <p key={c} className="desc desc_box min-text pd-05">{c}</p>
                                ))}
                            </div>
                        </div>
                        <div className="right gap-1">
                            <p className="big-text">{dataProductItem?.data?.data?.price} {t("sum")}</p>
                            <p className="text desc">{t("desc_buy")}</p>
                            <button className='buy_btn round-1 pd-1 text op-07 mtop-1-5' onClick={() => changeProdValue(dataProductItem?.data?.data?.name_uz)}>{t("buynow")}</button>
                        </div>
                    </div>
                    <p className="text">{t("description_product")}</p>
                    <p className="desc desc_box pd-05 round-05 min-text">{lang == 'uz' ? dataProductItem?.data?.data?.text_uz : lang == 'ru' ? dataProductItem?.data?.data?.text_ru : dataProductItem?.data?.data?.text_en}</p>
                    {/* <div className="lists gap-05">
                        {lang == "uz" && dataProductItem?.data?.data?.description_uz?.split("\r\n\r\n")?.map((c) => (
                            <p key={c} className="desc desc_box min-text pd-05">{c}</p>
                        ))}
                        {lang == "ru" && dataProductItem?.data?.data?.description_ru?.split("\r\n\r\n")?.map((c) => (
                            <p key={c} className="desc desc_box min-text pd-05">{c}</p>
                        ))}
                        {lang == "en" && dataProductItem?.data?.data?.description_en?.split("\r\n\r\n")?.map((c) => (
                            <p key={c} className="desc desc_box min-text pd-05">{c}</p>
                        ))}
                    </div> */}
                </div>
            </div>
            <TopProducts />
        </>
    );
};

export default ProductItem;