import React from 'react';
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

    return (
        <>
            <div className="ProductItem parent">
                <div key={dataProductItem?.data?.data?.id} className="wrapper gap-2">
                    <h1 className="name">{lang == 'uz' ? dataProductItem?.data?.data?.name_uz : lang == 'ru' ? dataProductItem?.data?.data?.name_ru : dataProductItem?.data?.data?.name_en}</h1>
                    <div className="infos gap-3">
                        <div className="left gap-1">
                            <div className="main_img">
                                <img src={dataProductItem?.data?.data?.image1} alt="img" className='img round-1' />
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
                                <SwiperSlide className="img_card">
                                    <img src={dataProductItem?.data?.data?.image1} alt="img" className="img round-07" />
                                </SwiperSlide>
                                <SwiperSlide className="img_card">
                                    <img src={dataProductItem?.data?.data?.image2} alt="img" className="img round-07" />
                                </SwiperSlide>
                                <SwiperSlide className="img_card">
                                    <img src={dataProductItem?.data?.data?.image3} alt="img" className="img round-07" />
                                </SwiperSlide>
                                <SwiperSlide className="img_card">
                                    <img src={dataProductItem?.data?.data?.image4} alt="img" className="img round-07" />
                                </SwiperSlide>
                                <SwiperSlide className="img_card">
                                    <img src={dataProductItem?.data?.data?.image5} alt="img" className="img round-07" />
                                </SwiperSlide>
                                <SwiperSlide className="img_card">
                                    <img src={dataProductItem?.data?.data?.image6} alt="img" className="img round-07" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="middle gap-1">
                            <p className="text">MAXSULOT XARAKTERISTIKASI</p>
                            <p className="desc min-text">{lang == 'uz' ? dataProductItem?.data?.data?.description_uz : lang == 'ru' ? dataProductItem?.data?.data?.description_ru : dataProductItem?.data?.data?.description_en}</p>
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
                    <p className="desc min-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <TopProducts />
        </>
    );
};

export default ProductItem;