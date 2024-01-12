import React from 'react';
import '../styles/Footer.scss';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../api/Api';
import { useTranslation } from 'react-i18next';
import Youtube from '../assets/icons/youtube.svg';
import EmailIcon from '../assets/icons/email.svg';
import LocIcon from '../assets/icons/location1.svg';
import Facebook from '../assets/icons/facebook2.svg';
import Telegram from '../assets/icons/telegram1.svg';
import Instagram from '../assets/icons/instagram2.svg';
import { getName } from '../languages/language';

const Footer = () => {

    // i18next

    const { t } = useTranslation();

    // API options

    const dataCategories = useQuery('categories', fetchCategories);

    return (
        <div className='Footer parent'>
            <div className="wrapper gap-4">
                <div className="tool gap-1">
                    <div className="big-text">{t("Clemar")}</div>
                    <p className="min-text mtop-05">{t("contacts")}</p>
                    <a href="tel:+998998606060" className="text">+998 99 860 60 60</a>
                    <a href='#' target={"_blank"} className="location gap-05 mtop-05">
                        <img src={LocIcon} alt="icn" className="icn" />
                        <p className="min-text">{t("dokon")}</p>
                    </a>
                    <a href='mailto:Info@cleanmarket.uz' className="location gap-05 mtop-05">
                        <img src={EmailIcon} alt="icn" className="icn" />
                        <p className="min-text">{t("mail")}</p>
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
                    <Link className='text'>{t("products")}</Link>
                    {dataCategories?.data?.data?.slice(0, 4)?.map((item) => (
                        <Link key={item?.id} className="min-text">{getName(item)}</Link>
                    ))}
                </div>
                <div className="tool gap-1 mbot-2">
                    <Link className='text'>{t("infooo")}</Link>
                    <Link className="min-text">{t("about")}</Link>
                    <Link className="min-text">{t("kategoriyalar")}</Link>
                    <Link className="min-text">{t("negabiz")}</Link>
                    <Link className="min-text">{t("faq")}</Link>
                </div>
            </div>
            <div className="wrapper copyright gap-4">
                <p className="text mtop-1 mbot-1">{t("2023")}</p>
                {/* <a href="#" target={"_blank"} className="text mtop-1 mbot-1">Ommaviy taklif</a>
                <a href="#" target={"_blank"} className="text mtop-1 mbot-1">Melizz</a> */}
            </div>
        </div>
    );
};

export default Footer;