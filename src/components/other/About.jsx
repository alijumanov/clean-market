import React from 'react';
import '../../styles/other/News.scss';
import Img from '../../assets/images/news.png';
import { useTranslation } from 'react-i18next';

const About = () => {

    // i18next

    const { t } = useTranslation();

    return (
        <div className='About News parent'>
            <div className="wrapper gap-2">
                <h1 className="sub-title">{t("about")}</h1>
                <img src={Img} alt="news_img" className="img round-1-5" />
                <p className="text desc">{t("about_text")}</p>
            </div>
        </div>
    );
};

export default About;