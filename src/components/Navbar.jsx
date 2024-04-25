import React, { useEffect, useMemo, useState } from 'react';
import '../styles/Navbar.scss';
import { useQuery } from 'react-query';
import Bar from '../assets/icons/bar.svg';
import { useSelector } from 'react-redux';
import Down from '../assets/icons/down.svg';
import Logo from '../assets/images/logo.png';
import Close from '../assets/icons/close.svg';
import Heart from '../assets/icons/heart1.png';
import { useTranslation } from 'react-i18next';
import DownIcon from '../assets/icons/down.svg';
import Search from '../assets/icons/search.svg';
import Telegram from '../assets/icons/telegram.svg';
import Location from '../assets/icons/location.svg';
import Instagram from '../assets/icons/instagram.svg';
import { changeLang, getName } from '../languages/language';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { fetchCategories, fetchProducts, fetchProductsAll, fetchSubCategories } from '../api/Api';

const Navbar = ({ changeProdValue }) => {

    // router options

    const path = useLocation();
    const navigate = useNavigate();

    // language options

    const { i18n, t } = useTranslation();
    let langTitle = localStorage.getItem('i18nextLng');
    const [showLanguage, setShowLanguage] = useState(false);

    function changeLangValue(item) {
        changeLang(item);
        setShowLanguage(false);
        i18n.changeLanguage(item);
    };

    // catalog options

    const [showCatalog, setShowCatalog] = useState(false);

    // search options

    const [showSearch, setShowSearch] = useState(false);

    // scroll options

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setShowSearch(false);
            setShowCatalog(false);
            setShowLanguage(false);
            setScroll(window.scrollY > 10 ? true : false);
        });
    }, [])

    // redux options

    let savedProducts = useSelector((state) => state.savedProducts.products);

    // API options

    const [inputValue, setInputValue] = useState(path.search.slice(8));

    function handleSearch(item) {
        setInputValue(item);
        navigate(`?search=${item}`);
    };

    const dataCategories = useQuery('categories', fetchCategories);
    const dataSubCategories = useQuery('sub-categories', fetchSubCategories);
    const dataProducts = useQuery(['products', path.search], () => fetchProducts(path.search));

    // catalog options

    const [activeCatalog, setActiveCatalog] = useState(null);

    // catalog bar options

    const [category, setCategory] = useState("")

    useMemo(() => {
        setCategory(dataCategories?.data?.data[0]?.id);
    }, [dataCategories?.isLoading]);

    const dataProductsWith = useQuery('products-with-1', fetchProductsAll);

    return (
        <div className={`Navbar ${scroll && "HideNavbar"}`}>
            <div className="top_navbar">
                <p className="text desc">{t("h1")}</p>
                <button className="bonus_btn round-05 text scale-05" onClick={() => changeProdValue("1")}>{t("hbutton")}</button>
            </div>
            <div className="middle_navbar gap-2">
                <div className="left gap-05">
                    <img src={Location} alt="loc" className="loc" />
                    <p className="min-text" style={{ opacity: 0.5 }}>{t("h2button")}:</p>
                    <a href="https://yandex.ru/navi/?ll=69.220719,41.290161&panorama%5Bpoint%5D=69.220719,41.290161&panorama%5Bdirection%5D=227.914276,-0.865454&panorama%5Bspan%5D=90.000000,90.000000&panorama%5Bid%5D=1486659497_804360267_23_1571374783" target={"_blank"} className="min-text">{t("tosh")}</a>
                </div>
                <div className="right gap-2-5">
                    <a href='#' target={"_blank"} className="tool gap-05">
                        <img src={Instagram} alt="icn" className="icn" />
                        <p className="min-text">{t("insta")}</p>
                    </a>
                    <a href='#' target={"_blank"} className="tool gap-05">
                        <img src={Telegram} alt="icn" className="icn" />
                        <p className="min-text">{t("tele")}</p>
                    </a>
                    <a href="tel:+998712007002" target={"_blank"} className="tel text">+998 71 200 70 02</a>
                    <div className="language">
                        <div className="lang_title" onClick={() => setShowLanguage(true)}>
                            <p className="min-text">{langTitle == "uz" ? "O'z" : langTitle == "ru" ? "Рус" : "Eng"}</p>
                            <img src={Down} alt="icn" className="icn" />
                        </div>
                        {showLanguage &&
                            <div className="lang_menu round-05">
                                <div className="min-text" onClick={() => changeLangValue("ru")}>Рус</div>
                                <div className="min-text" onClick={() => changeLangValue("en")}>Eng</div>
                                <div className="min-text" onClick={() => changeLangValue("uz")}>O'z</div>
                            </div>
                        }
                        {showLanguage &&
                            <div className="contrast-0" onClick={() => setShowLanguage(false)}></div>
                        }
                    </div>
                </div>
            </div>
            <div className="bottom_navbar gap-2">
                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="logo">
                    <img src={Logo} alt="logo" />
                </Link>
                <div className="catalog">
                    <button className="catalog_btn round-05 gap-05 op-07" onClick={() => setShowCatalog(true)}><img src={Bar} alt="icn" className='icn' /> <p className="text">{t("cat")}</p></button>
                    {showCatalog &&
                        <div className="category_bar">
                            {dataCategories?.data?.data?.map((item) => (
                                <div key={item?.id} className="single_category pd-1" onPointerEnter={() => setCategory(item?.id)}>
                                    <div className="category_title">
                                        <Link to={`/categories/${item?.id}`} className="left text gap-1">
                                            <img src={item?.icon} alt="icn1" className="icn1" />
                                            {getName(item)}
                                        </Link>
                                        <img src={DownIcon} alt="icn2" className="icn2" />
                                    </div>
                                    <div className="childs">
                                        {dataProductsWith?.data?.data?.map((c) => (
                                            c?.category == item?.id &&
                                            <Link key={c?.id} to={`/products/${c?.slug}`} className="child min-text" onClick={() => [setShowCatalog(false), setCategory("")]}>{getName(c)}</Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                    {showCatalog &&
                        <div className="contrast-0" onClick={() => [setShowCatalog(false), setCategory("")]}></div>
                    }
                </div>
                <Link to="/about" className="link ver_1 gap-05">
                    <p className="min-text"><b>{t("about")}</b></p>
                </Link>
                <div className="searching">
                    <input type="text" id='search' className="input pd-07 min-text round-05" placeholder={`${t("cat")}`} onClick={() => setShowSearch(true)} value={inputValue} onChange={(e) => handleSearch(e.target.value)} />
                    <label htmlFor='search' className="icon round-05">
                        <img src={Search} alt="icn" className="icn" />
                    </label>
                    {showSearch &&
                        <div className="search_bar round-07">
                            {dataProducts?.data?.data?.results?.map((item) => (
                                <Link key={item?.id} to={`/products/${item?.slug}`} className="bar_link text" onClick={() => setShowSearch(false)}>{getName(item)}</Link>
                            ))}
                        </div>
                    }
                    {showSearch &&
                        <div className="contrast-0" onClick={() => setShowSearch(false)}></div>
                    }
                </div>
                <Link to="/likes" className="link ver_1 gap-05">
                    <span>{savedProducts?.length}</span>
                    <img src={Heart} alt="icn" className="icn" />
                    <p className="min-text"><b>{t("yurakcha")}</b></p>
                </Link>
                <Link to="/about" className="link ver_2 gap-05">
                    <p className="min-text"><b>{t("about")}</b></p>
                </Link>
                <Link to="/likes" className="link ver_2 gap-05">
                    <span>{savedProducts?.length}</span>
                    <img src={Heart} alt="icn" className="icn" />
                    <p className="min-text"><b>{t("yurakcha")}</b></p>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;