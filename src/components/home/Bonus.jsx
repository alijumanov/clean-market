import React from 'react';
import '../../styles/home/Bonus.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Img2 from '../../assets/images/deposit.png';
import Img1 from '../../assets/images/discount.png';

const Bonus = () => {

    // i18next

    const { t } = useTranslation();

    return (
        <div className='Bonus parent'>
            <div className="wrapper gap-2">
                <h1 className="sub-title">{t("yangiliklar")}</h1>
                <div className="cards">
                    <div className="left round-1 pd-2">
                        <div className="texts gap-1">
                            <h1 className="big-text">{t("rassrochka")}</h1>
                            <p className="min-text desc">{t("rassrochka_txt")}</p>
                            <Link to={`/news/2`} className="more_btn scale-05 round-05 text">{t("more")}</Link>
                        </div>
                        <img src={Img1} alt="img" className="img" />
                    </div>
                    <div className="right round-1 pd-2">
                        <div className="texts gap-1">
                            <h1 className="big-text">{t("aksiya")}</h1>
                            <p className="min-text desc">{t("aksiya_txt")}</p>
                            <Link to={`/news/3`} className="more_btn scale-05 round-05 text">{t("more")}</Link>
                        </div>
                        <img src={Img2} alt="img" className="img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bonus;