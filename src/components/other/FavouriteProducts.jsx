import React from 'react';
import { useQuery } from 'react-query';
import { DOMEN_URL } from '../../api/ApiUrl';
import { fetchProducts } from '../../api/Api';
import Heart from '../../assets/icons/heart2.png';
import Heart1 from '../../assets/icons/heart2.svg';
import '../../styles/other/FavouriteProducts.scss';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProductsSaved } from '../../redux/actions/planActions';

const FavouriteProducts = ({ changeProdValue }) => {

    // router options

    const path = useLocation();

    // redux options

    const dispatch = useDispatch();
    let savedProducts = useSelector((state) => state.savedProducts.products);

    function saveProduct(item) {
        dispatch(addProductsSaved(savedProducts?.includes(item) ? [...savedProducts?.filter((c) => c != item)] : [...savedProducts?.filter((c) => c != item), item]));
    };

    // API options

    const dataProducts = useQuery(['products', path.search], () => fetchProducts(path.search));

    // i18next

    let lang = localStorage.getItem('i18nextLng');

    return (
        <div className='FavouriteProducts parent'>
            <div className="wrapper">
                <h1 className="sub-title">Sevimli mahsulotlar</h1>
                <div className="cards gap-1-5">
                    {dataProducts?.data?.data?.results?.map((item) => (
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
                                <Link to={`/products/${item?.slug}`}>
                                    <img src={`${DOMEN_URL}${item?.image1}`} alt="img" className="img" />
                                </Link>
                            </div>
                            <p className="min-text desc">{lang == 'uz' ? item?.name_uz : lang == 'ru' ? item?.name_ru : item?.name_en}</p>
                            <p className="text price">{item?.price}  сум</p>
                            <div className="btns gap-1">
                                <button className="btn text round-05 op-07 pd-3" onClick={() => changeProdValue(item.name)}>Xarid qilish</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FavouriteProducts;