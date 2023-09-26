import React, { useEffect, useState } from 'react';
import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';
import Bar from '../assets/icons/bar.svg';
import Down from '../assets/icons/down.svg';
import Logo from '../assets/images/logo.png';
import Heart from '../assets/icons/heart1.png';
import Search from '../assets/icons/search.svg';
import Telegram from '../assets/icons/telegram.svg';
import Location from '../assets/icons/location.svg';
import Instagram from '../assets/icons/instagram.svg';
import { useSelector } from 'react-redux';

const Navbar = () => {

    // scroll options

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10 ? true : false);
        });
    }, [])

    // redux options

    let savedProducts = useSelector((state) => state.savedProducts.products);

    return (
        <div className={`Navbar ${scroll && "HideNavbar"}`}>
            <div className="top_navbar">
                <p className="text desc">Clean Market dan siz uchun maxsus - 10% Chegirma</p>
                <button className="bonus_btn round-05 text scale-05">Bonusni olish</button>
            </div>
            <div className="middle_navbar">
                <div className="left gap-05">
                    <img src={Location} alt="loc" className="loc" />
                    <p className="min-text" style={{ opacity: 0.5 }}>Lokatsiya:</p>
                    <a href="#" target={"_blank"} className="min-text">Toshkent</a>
                </div>
                <div className="right gap-2-5">
                    <a href='#' target={"_blank"} className="tool gap-05">
                        <img src={Instagram} alt="icn" className="icn" />
                        <p className="min-text">Cleanmarket_uz</p>
                    </a>
                    <a href='#' target={"_blank"} className="tool gap-05">
                        <img src={Telegram} alt="icn" className="icn" />
                        <p className="min-text">t.me/Clean_market</p>
                    </a>
                    <a href="tel:+998712007002" target={"_blank"} className="tel text">+998 71 200 70 02</a>
                    <div className="language">
                        <div className="lang_title">
                            <p className="min-text">Рус</p>
                            <img src={Down} alt="icn" className="icn" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_navbar gap-3">
                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="logo">
                    <img src={Logo} alt="logo" />
                </Link>
                <button className="catalog_btn round-05 gap-05 op-07"><img src={Bar} alt="icn" className='icn' /> <p className="text">Katalog</p></button>
                <Link to="/likes" className="link ver_1 gap-05">
                    <span>{savedProducts?.length}</span>
                    <img src={Heart} alt="icn" className="icn" />
                    <p className="min-text">Sevimlilar</p>
                </Link>
                <div className="searching">
                    <input type="text" id='search' className="input pd-07 min-text round-05" placeholder='Qidiruv...' />
                    <label htmlFor='search' className="icon round-05">
                        <img src={Search} alt="icn" className="icn" />
                    </label>
                </div>
                <Link to="/likes" className="link ver_2 gap-05">
                    <span>{savedProducts?.length}</span>
                    <img src={Heart} alt="icn" className="icn" />
                    <p className="min-text">Sevimlilar</p>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;