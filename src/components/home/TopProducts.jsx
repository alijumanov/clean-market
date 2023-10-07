import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import '../../styles/home/TopProducts.scss';
import { fetchTopProducts } from '../../api/Api';
import Heart from '../../assets/icons/heart2.png';
import Heart1 from '../../assets/icons/heart2.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import { getName } from '../../languages/language';
import { Autoplay, Navigation } from 'swiper/modules';
import Exchange from '../../assets/icons/exchange.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addProductsSaved } from '../../redux/actions/planActions';

const TopProducts = ({ changeProdValue }) => {

    // redux options

    const dispatch = useDispatch();
    let savedProducts = useSelector((state) => state.savedProducts.products);

    function saveProduct(item) {
        dispatch(addProductsSaved(savedProducts?.includes(item) ? [...savedProducts?.filter((c) => c != item)] : [...savedProducts?.filter((c) => c != item), item]));
    };

    // API options

    const dataTopProducts = useQuery('products', fetchTopProducts);

    return (
        <div className='TopProducts parent'>
            <div className="wrapper gap-2">
                <div className="head">
                    <h1 className="sub-title">Top tovarlar</h1>
                    <Link to='/products' className="text">Barchasi</Link>
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
                    {dataTopProducts?.data?.data?.map((item) => (
                        <SwiperSlide key={item?.id} className="product gap-1 pd-05 round-1">
                            <div className="imgs round-07 pd-1 gap-05">
                                {item?.new &&
                                    <div className="badge round-07 text">Yangilik</div>
                                }
                                {item?.percent &&
                                    <div className="badge round-07 text">{item?.percent}</div>
                                }
                                {item?.recommend &&
                                    <div className="badge round-07 text">Siz uchun</div>
                                }
                                <button className='heart_btn pd-05 round-05' onClick={() => saveProduct(item?.id)}>
                                    {savedProducts?.includes(item?.id) ?
                                        <img src={Heart1} alt="icn" className='icn' />
                                        :
                                        <img src={Heart} alt="icn" className='icn' />
                                    }
                                </button>
                                <Link to={`/products/${item?.id}`}>
                                    <img src={item?.image1} alt="img" className="img" />
                                </Link>
                            </div>
                            <p className="min-text desc">{getName(item)}</p>
                            <p className="text price">{item?.price}  сум</p>
                            <div className="btns gap-1">
                                <button className="btn text round-05 op-07 pd-3" onClick={() => changeProdValue(item?.name_uz)}>Xarid qilish</button>
                                <Link to={`/products/${item?.id}`} className="btn text round-05 op-07 pd-07"><img src={Exchange} alt="icn" className="icn" /></Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TopProducts;