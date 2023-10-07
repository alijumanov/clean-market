import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../api/Api';
import Heart from '../../assets/icons/heart2.png';
import Heart1 from '../../assets/icons/heart2.svg';
import '../../styles/other/FavouriteProducts.scss';
import Exchange from '../../assets/icons/exchange.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addProductsSaved } from '../../redux/actions/planActions';

const FavouriteProducts = ({ changeProdValue }) => {

    // redux options

    const dispatch = useDispatch();
    let savedProducts = useSelector((state) => state.savedProducts.products);

    function saveProduct(item) {
        dispatch(addProductsSaved(savedProducts?.includes(item) ? [...savedProducts?.filter((c) => c != item)] : [...savedProducts?.filter((c) => c != item), item]));
    };

    // API options

    const dataProducts = useQuery('products', fetchProducts);

    // i18next

    let lang = localStorage.getItem('i18nextLng');

    return (
        <div className='FavouriteProducts parent'>
            <div className="wrapper">
                <h1 className="sub-title">Sevimli mahsulotlar</h1>
                <div className="cards gap-1-5">
                    {dataProducts?.data?.data?.map((item) => (
                        savedProducts?.includes(item.id) &&
                        <div key={item?.id} className="product gap-1 pd-05 round-1">
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
                                    {savedProducts?.includes(item.id) ?
                                        <img src={Heart1} alt="icn" className='icn' />
                                        :
                                        <img src={Heart} alt="icn" className='icn' />
                                    }
                                </button>
                                <Link to={`/products/${item?.id}`}>
                                    <img src={item?.image1} alt="img" className="img" />
                                </Link>
                            </div>
                            <p className="min-text desc">{lang == 'uz' ? item?.name_uz : lang == 'ru' ? item?.name_ru : item?.name_en}</p>
                            <p className="text price">{item?.price}  сум</p>
                            <div className="btns gap-1">
                                <button className="btn text round-05 op-07 pd-3" onClick={() => changeProdValue(item.name)}>Xarid qilish</button>
                                <Link to={`/products/${item?.id}`} className="btn text round-05 op-07 pd-07"><img src={Exchange} alt="icn" className="icn" /></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FavouriteProducts;