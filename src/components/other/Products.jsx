import React from 'react';
import { useQuery } from 'react-query';
import '../../styles/other/Products.scss';
import Heart from '../../assets/icons/heart2.png';
import Heart1 from '../../assets/icons/heart2.svg';
import Icon from '../../assets/icons/category.svg';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Settings from '../../assets/images/settings.png';
import { fetchProducts, fetchSubCategories } from '../../api/Api';
import { addProductsSaved } from '../../redux/actions/planActions';

const Products = ({ changeProdValue }) => {

    // router options

    const { id } = useParams();

    // redux options

    const dispatch = useDispatch();
    let savedProducts = useSelector((state) => state.savedProducts.products);

    function saveProduct(item) {
        dispatch(addProductsSaved(savedProducts?.includes(item) ? [...savedProducts?.filter((c) => c != item)] : [...savedProducts?.filter((c) => c != item), item]));
    };

    // API options

    const dataProducts = useQuery('products', fetchProducts);
    const dataSubCategories = useQuery('sub-categories', fetchSubCategories);

    // i18next

    let lang = localStorage.getItem('i18nextLng');

    return (
        <div className='Products parent'>
            <div className="wrapper">
                <div className="left gap-1">
                    {id ?
                        dataSubCategories?.data?.data?.filter((c) => c?.id == id)?.map((item) => (
                            <h1 className="name">{lang == 'uz' ? item?.name_uz : lang == 'ru' ? item?.name_ru : item?.name_en}</h1>
                        ))
                        :
                        <h1 className="name">Barcha Mahsulotlar</h1>
                    }
                    <p className="min-text"><b>под категории</b></p>
                    {dataSubCategories?.data?.data?.map((item) => (
                        <Link key={item?.id} to={`/sub-categories/${item?.id}`} className='link'>
                            <p className="min-text">{lang == 'uz' ? item?.name_uz : lang == 'ru' ? item?.name_ru : item?.name_en}</p>
                            <img src={Icon} alt="icn" className="icn" />
                        </Link>
                    ))}
                    <div className="settings round-1 pd-1-5 mtop-1 gap-1">
                        <p className="text">Kale bepul service va kafolat xizmati</p>
                        <img src={Settings} alt="img" className="img" />
                        <p className="min-text">simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>
                    </div>
                </div>
                <div className="right gap-2">
                    <h1 className="name">Mahsulotlar</h1>
                    <div className="cards gap-1-5">
                        {dataProducts?.data?.data?.filter((c) => c.sub_category == id)?.map((item) => (
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
                                        <img src={item?.image1} alt="img" className="img" />
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
        </div>
    );
};

export default Products;