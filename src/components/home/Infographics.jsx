import React from 'react';
import '../../styles/home/Infographics.scss';
import { useTranslation } from 'react-i18next';

const Infographics = () => {

    // i18next

    const { t } = useTranslation();

    return (
        <div className='Infographics parent'>
            <div className="wrapper gap-2">
                <h1 className="sub-title">{t("bizson")}</h1>
                <div className="infos gap-4">
                    <div className="info gap-1 pd-1">
                        <h1 className="title">40K</h1>
                        <p className="text txt">{t("inf1")}</p>
                    </div>
                    <div className="info gap-1 pd-1">
                        <h1 className="title">10+</h1>
                        <p className="text txt">{t("inf2")}</p>
                    </div>
                    <div className="info gap-1 pd-1">
                        <h1 className="title">40K</h1>
                        <p className="text txt">{t("inf3")}</p>
                    </div>
                    <div className="info gap-1 pd-1">
                        <h1 className="title">40K</h1>
                        <p className="text txt">{t("inf4")}</p>
                    </div>
                </div>
                <p className="text desc">{t("sonlar_text")}</p>
            </div>
        </div>
    );
};

export default Infographics;