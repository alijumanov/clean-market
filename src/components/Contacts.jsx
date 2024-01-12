import React from 'react';
import '../styles/Contacts.scss';
import { useTranslation } from 'react-i18next';
import Twitter from '../assets/icons/twitter.svg';
import Facebook from '../assets/icons/facebook1.svg';
import Instagram from '../assets/icons/instagram1.svg';

const Contacts = () => {

    // i18next

    const { t } = useTranslation();

    return (
        <div className='Contacts parent'>
            <div className="wrapper gap-4">
                <div className="left gap-2">
                    <div className="top gap-1">
                        <h1 className="sub-title">{t("con")}</h1>
                        <p className="text">{t("con_text")}</p>
                    </div>
                    {/* <div className="bottom gap-1">
                        <p className="text">Бизга алокага чикинг мессенджердан</p>
                        <p className="text">Бизнинг телефон ракамимиз</p>
                        <div className="btns">
                            <a href="tel:+998990118934" className="tel round-1 scale-05 text">+998 99 011 89 34</a>
                            <a href="#" target={"_blank"} className="icon scale-1">
                                <img src={Facebook} alt="icn" className="icn" />
                            </a>
                            <a href="#" target={"_blank"} className="icon scale-1">
                                <img src={Twitter} alt="icn" className="icn" />
                            </a>
                            <a href="#" target={"_blank"} className="icon scale-1">
                                <img src={Instagram} alt="icn" className="icn" />
                            </a>
                        </div>
                    </div> */}
                </div>
                <form className="right gap-1">
                    <input type="text" className="input text round-07 pd-1-5" placeholder={`${t("name")}`} />
                    <input type="number" className="input text round-07 pd-1-5" placeholder={`${t("phone")}`} />
                    <textarea rows="5" className="input text round-07 pd-1-5" placeholder={`${t("text")}`}></textarea>
                    <button type="submit" className='send_btn round-07 pd-1-5 text op-07'>{t("send")}</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;