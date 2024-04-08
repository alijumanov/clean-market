import React from 'react';
import { useQuery } from 'react-query';
import '../../styles/other/Products.scss';
import { DOMEN_URL } from '../../api/ApiUrl';
import { useTranslation } from 'react-i18next';
import Heart from '../../assets/icons/heart2.png';
import Heart1 from '../../assets/icons/heart2.svg';
import Icon from '../../assets/icons/category.svg';
import BottomPagination from '../BottomPagination';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Settings from '../../assets/images/settings.png';
import { fetchCategories, fetchProducts, fetchProductsAll, fetchSubCategories } from '../../api/Api';
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

    const dataCategories = useQuery('categories', fetchCategories);
    const dataSubCategories = useQuery('sub-categories', fetchSubCategories);
    const dataProducts = useQuery(['products-with', `?subcategory_id=${id}`], () => fetchProducts(`?subcategory_id=${id}`));
    const dataProductsAll = useQuery('products-with-1', fetchProductsAll);

    // i18next

    const { t } = useTranslation();
    let lang = localStorage.getItem('i18nextLng');

    return (
        <div className='Products parent'>
            <div className="wrapper">
                <div className="left gap-1">
                    {id ?
                        dataCategories?.data?.data?.filter((c) => c?.id == id)?.map((item) => (
                            <h1 key={item?.id} className="big-text">{lang == 'uz' ? item?.name_uz : lang == 'ru' ? item?.name_ru : item?.name_en}</h1>
                        ))
                        :
                        <h1 className="big-text">{t("productss")}</h1>
                    }
                    <p className="min-text"><b>{t("subs")}</b></p>
                    {dataCategories?.data?.data?.map((item) => (
                        <Link key={item?.id} to={`/categories/${item?.id}`} className={`link pd-05 round-05 ${item?.id == id && "active_link"}`}>
                            <p className="min-text">{lang == 'uz' ? item?.name_uz : lang == 'ru' ? item?.name_ru : item?.name_en}</p>
                            {item?.icon ?
                                <img src={item?.icon} alt="icn" className="icn" />
                                :
                                <img src={Icon} alt="icn" className="icn" />
                            }
                        </Link>
                    ))}
                    {/* <div className="settings round-1 pd-1-5 mtop-1 gap-1">
                        <p className="text">{t("name_ph")}</p>
                        <img src={Settings} alt="img" className="img" />
                        <p className="min-text">{t("desc_ph")}</p>
                    </div> */}
                </div>
                <div className="right gap-2">
                    <h1 className="name">{t("productss")}</h1>
                    {id ?
                        <div className="cards gap-1-5">
                            {dataProductsAll?.data?.data?.map((item) => (
                                item?.category == id &&
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
                                            <img src={`${item?.image1}`} alt="img" className="img" />
                                        </Link>
                                    </div>
                                    {/* <p className="min-text desc">{lang == 'uz' ? item?.name_uz : lang == 'ru' ? item?.name_ru : item?.name_en}</p> */}
                                    <p className="min-text desc">{item?.name_en}</p>
                                    <p className="text price">{item?.price}  {t("sum")}</p>
                                    <div className="btns gap-1">
                                        <button className="btn text round-05 op-07 pd-3" onClick={() => changeProdValue(item.name)}>{t("buy")}</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        :
                        <div className="cards gap-1-5">
                            {dataProductsAll?.data?.data?.map((item) => (
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
                                            <img src={`${item?.image1}`} alt="img" className="img" />
                                        </Link>
                                    </div>
                                    {/* <p className="min-text desc">{lang == 'uz' ? item?.name_uz : lang == 'ru' ? item?.name_ru : item?.name_en}</p> */}
                                    <p className="min-text desc">{item?.name_en}</p>
                                    <p className="text price">{item?.price}  {t("sum")}</p>
                                    <div className="btns gap-1">
                                        <button className="btn text round-05 op-07 pd-3" onClick={() => changeProdValue(item.name)}>{t("buy")}</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                    {dataProducts?.data?.data?.max_page > 1 &&
                        <BottomPagination dataLength={dataProducts?.data?.data?.max_page} />
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;