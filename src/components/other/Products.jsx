import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/other/Products.scss';
import Img from '../../assets/images/prod.png';
import { dataTopProducts } from '../../api/Api';
import Heart from '../../assets/icons/heart2.png';
import Heart1 from '../../assets/icons/heart2.svg';
import Icon from '../../assets/icons/category.svg';
import Exchange from '../../assets/icons/exchange.svg';
import { useDispatch, useSelector } from 'react-redux';
import Settings from '../../assets/images/settings.png';
import { addProductsSaved } from '../../redux/actions/planActions';

const Products = ({ changeProdValue }) => {

    // redux options

    const dispatch = useDispatch();
    let savedProducts = useSelector((state) => state.savedProducts.products);

    function saveProduct(item) {
        dispatch(addProductsSaved(savedProducts?.includes(item) ? [...savedProducts?.filter((c) => c != item)] : [...savedProducts?.filter((c) => c != item), item]));
    };

    return (
        <div className='Products parent'>
            <div className="wrapper">
                <div className="left gap-1">
                    <h1 className="name">Поломоичные машины</h1>
                    <p className="min-text"><b>под категории</b></p>
                    <Link className='link'>
                        <p className="min-text">поломоичные машины</p>
                        <img src={Icon} alt="icn" className="icn" />
                    </Link>
                    <Link className='link'>
                        <p className="min-text">поломоичные машины</p>
                        <img src={Icon} alt="icn" className="icn" />
                    </Link>
                    <Link className='link'>
                        <p className="min-text">поломоичные машины</p>
                        <img src={Icon} alt="icn" className="icn" />
                    </Link>
                    <Link className='link'>
                        <p className="min-text">поломоичные машины</p>
                        <img src={Icon} alt="icn" className="icn" />
                    </Link>
                    <Link className='link'>
                        <p className="min-text">поломоичные машины</p>
                        <img src={Icon} alt="icn" className="icn" />
                    </Link>
                    <Link className='link'>
                        <p className="min-text">поломоичные машины</p>
                        <img src={Icon} alt="icn" className="icn" />
                    </Link>
                    <Link className='link'>
                        <p className="min-text">поломоичные машины</p>
                        <img src={Icon} alt="icn" className="icn" />
                    </Link>
                    <div className="settings round-1 pd-1-5 mtop-1 gap-1">
                        <p className="text">Kale bepul service va kafolat xizmati</p>
                        <img src={Settings} alt="img" className="img" />
                        <p className="min-text">simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>
                    </div>
                </div>
                <div className="right gap-2">
                    <h1 className="name">Mahsulotlar</h1>
                    <div className="cards gap-1-5">
                        {dataTopProducts?.map((item) => (
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
                                    <img src={Img} alt="img" className="img" />
                                </div>
                                <p className="min-text desc">Строительный пылесос INGCO VC14122, Строительный пылесос INGCO VC14122</p>
                                <p className="text price">13 503 500  сум</p>
                                <div className="btns gap-1">
                                    <button className="btn text round-05 op-07 pd-3" onClick={() => changeProdValue(item.name)}>Xarid qilish</button>
                                    <Link to={`/products/${item?.id}`} className="btn text round-05 op-07 pd-07"><img src={Exchange} alt="icn" className="icn" /></Link>
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