import React from 'react';
import '../styles/Footer.scss';
import { Link } from 'react-router-dom';
import Youtube from '../assets/icons/youtube.svg';
import EmailIcon from '../assets/icons/email.svg';
import LocIcon from '../assets/icons/location1.svg';
import Facebook from '../assets/icons/facebook2.svg';
import Telegram from '../assets/icons/telegram1.svg';
import Instagram from '../assets/icons/instagram2.svg';

const Footer = () => {
    return (
        <div className='Footer parent'>
            <div className="wrapper gap-4">
                <div className="tool gap-1">
                    <div className="big-text">Cleanmarket - Siz va yaqinlaringiz uchun!</div>
                    <p className="min-text mtop-05">Aloqa uchun</p>
                    <a href="tel:+998998606060" className="text">+998 99 860 60 60</a>
                    <a href='#' target={"_blank"} className="location gap-05 mtop-05">
                        <img src={LocIcon} alt="icn" className="icn" />
                        <p className="min-text">Bizning do'konlar</p>
                    </a>
                    <a href='mailto:Info@cleanmarket.uz' className="location gap-05 mtop-05">
                        <img src={EmailIcon} alt="icn" className="icn" />
                        <p className="min-text">Info@cleanmarket.uz</p>
                    </a>
                    <div className="socials gap-1-5 mtop-1">
                        <a href="#" target={"_blank"} className="icon scale-1">
                            <img src={Instagram} alt="icn" className="icn" />
                        </a>
                        <a href="#" target={"_blank"} className="icon scale-1">
                            <img src={Facebook} alt="icn" className="icn" />
                        </a>
                        <a href="#" target={"_blank"} className="icon scale-1">
                            <img src={Youtube} alt="icn" className="icn" />
                        </a>
                        <a href="#" target={"_blank"} className="icon scale-1">
                            <img src={Telegram} alt="icn" className="icn" />
                        </a>
                    </div>
                </div>
                <div className="tool gap-1 mbot-2">
                    <Link className='text'>Maxsulotlar</Link>
                    <Link className="min-text">Dush va dush sistemalari</Link>
                    <Link className="min-text">Vanna va keramika</Link>
                    <Link className="min-text">Smestitel</Link>
                </div>
                <div className="tool gap-1 mbot-2">
                    <Link className='text'>Malumotlar</Link>
                    <Link className="min-text">Yetkazib berish</Link>
                    <Link className="min-text">Bizning loyihalar</Link>
                    <Link className="min-text">Kompaniya haqida</Link>
                </div>
            </div>
            <div className="wrapper copyright gap-4">
                <p className="text mtop-1 mbot-1">2023 © Barcha huquqlar ximoyalangan</p>
                <a href="#" target={"_blank"} className="text mtop-1 mbot-1">Ommaviy taklif</a>
                <a href="#" target={"_blank"} className="text mtop-1 mbot-1">Melizz</a>
            </div>
        </div>
    );
};

export default Footer;