import React, { useMemo, useState } from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { useQuery } from 'react-query';
import { Navigation } from 'swiper/modules';
import '../../styles/other/ProductItem.scss';
import { useParams } from 'react-router-dom';
import TopProducts from '../home/TopProducts';
import { fetchProductItem } from '../../api/Api';
import { Swiper, SwiperSlide } from "swiper/react";

const ProductItem = ({ changeProdValue }) => {

    // router options

    const { id } = useParams();

    // API options

    const dataProductItem = useQuery(['product-item', id], () => fetchProductItem(id));

    // i18next

    let lang = localStorage.getItem('i18nextLng');

    // image options

    const [imageValue, setImageValue] = useState("");

    useMemo(() => {
        setImageValue(dataProductItem?.data?.data?.image1)
    }, [dataProductItem?.isLoading]);

    return (
        <>
            <div className="ProductItem parent">
                <div key={dataProductItem?.data?.data?.id} className="wrapper gap-2">
                    <h1 className="name">{lang == 'uz' ? dataProductItem?.data?.data?.name_uz : lang == 'ru' ? dataProductItem?.data?.data?.name_ru : dataProductItem?.data?.data?.name_en}</h1>
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
                            <p className="text">MAXSULOT XARAKTERISTIKASI</p>
                            {dataProductItem?.data?.data?.description_uz?.split(";")?.map((c) => (
                                <p key={c} className="desc desc_box min-text round-05 pd-05">{c}</p>
                            ))}
                        </div>
                        <div className="right gap-1">
                            <p className="big-text">{dataProductItem?.data?.data?.price} So’m</p>
                            <p className="text desc">O’rnatib berish</p>
                            <p className="text desc">Yetkazib  berish</p>
                            <p className="text desc">Service xizmati</p>
                            <button className='buy_btn round-1 pd-1 text op-07 mtop-1-5' onClick={() => changeProdValue(dataProductItem?.data?.data?.name_uz)}>Hoziroq xarid qilish</button>
                        </div>
                    </div>
                    <p className="text">Mahsulot haqida batafsil</p>
                    <p className="desc min-text">{lang == 'uz' ? dataProductItem?.data?.data?.text_uz : lang == 'ru' ? dataProductItem?.data?.data?.text_ru : dataProductItem?.data?.data?.text_en}</p>
                </div>
            </div>
            <TopProducts />
        </>
    );
};

export default ProductItem;