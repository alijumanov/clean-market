import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import '../../styles/other/ProductItem.scss';
import { useParams } from 'react-router-dom';
import TopProducts from '../home/TopProducts';
import Img2 from '../../assets/images/prod.png';
import { dataTopProducts } from '../../api/Api';
import Img1 from '../../assets/images/prod1.png';
import { Swiper, SwiperSlide } from "swiper/react";

const ProductItem = ({ changeProdValue }) => {

    // router options

    const { id } = useParams();

    return (
        <>
            <div className="ProductItem parent">
                {dataTopProducts?.filter((c) => c?.id == id)?.map((item) => (
                    <div key={item?.id} className="wrapper gap-2">
                        <h1 className="name">Профессиональная ковромоечная машина Santoemma Sabrina HOT</h1>
                        <div className="infos gap-3">
                            <div className="left gap-1">
                                <div className="main_img">
                                    <img src={Img1} alt="img" className='img round-1' />
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
                                        <img src={Img2} alt="img" className="img round-07" />
                                    </SwiperSlide>
                                    <SwiperSlide className="img_card">
                                        <img src={Img1} alt="img" className="img round-07" />
                                    </SwiperSlide>
                                    <SwiperSlide className="img_card">
                                        <img src={Img2} alt="img" className="img round-07" />
                                    </SwiperSlide>
                                    <SwiperSlide className="img_card">
                                        <img src={Img1} alt="img" className="img round-07" />
                                    </SwiperSlide>
                                    <SwiperSlide className="img_card">
                                        <img src={Img2} alt="img" className="img round-07" />
                                    </SwiperSlide>
                                    <SwiperSlide className="img_card">
                                        <img src={Img1} alt="img" className="img round-07" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="middle gap-1">
                                <p className="text">MAXSULOT XARAKTERISTIKASI</p>
                                <p className="desc min-text">Характеристики: Емкость баков: 14/14 лВакуумный мотор: 2-х стадийный, 1500 Вт, 3000 мм H2O, 50 л/секВодяной насос с байпасом: вибрационный, 70 Вт, 4 бар, 1,5 л/минШирина уборки: 100 ммКоличество форсунок: 1Нагреватель воды: 180 ВтПроизводительность: 60 м кв./часДлина кабеля: 10 мДлина шланга: 2,5 мМасса нетто/брутто: 12/15 кгГабариты/Габариты упаковки: 30х42х53 / 34х53х70 смКомплект поставки: шланги H10-RAGNO-M + ручная пластмассовая насадка NS10PN-M</p>
                            </div>
                            <div className="right gap-1">
                                <p className="big-text">8 568 000 So’m</p>
                                <p className="text desc">O’rnatib berish</p>
                                <p className="text desc">Yetkazib  berish</p>
                                <p className="text desc">Service xizmati</p>
                                <button className='buy_btn round-1 pd-1 text op-07 mtop-1-5' onClick={() => changeProdValue(item.name)}>Hoziroq xarid qilish</button>
                            </div>
                        </div>
                        <p className="text">Mahsulot haqida batafsil</p>
                        <p className="desc min-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                ))}
            </div>
            <TopProducts />
        </>
    );
};

export default ProductItem;