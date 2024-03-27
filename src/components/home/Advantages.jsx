import React from 'react';
import "swiper/css";
import { useQuery } from 'react-query';
import '../../styles/home/Advantages.scss';
import { fetchWhyUs } from '../../api/Api';
import { useTranslation } from 'react-i18next';

const Advantages = () => {

    // API options

    const dataWhyUs = useQuery('why-us', fetchWhyUs);

    // i18next

    const { t } = useTranslation();

    return (
        <div className='Advantages parent'>
            <div className="wrapper">
                <h1 className="sub-title">{t("negabiz")}</h1>
                <div className="cards mtop-2 gap-1-5">
                    {dataWhyUs?.data?.data?.slice(0, 1)?.map((item) => (
                        <div key={item?.id} className="card gap-1">
                            <img src={item?.image} alt="img" className="img" />
                            <h1 className="text">{t("adv1")}</h1>
                        </div>
                    ))}
                    {dataWhyUs?.data?.data?.slice(1, 2)?.map((item) => (
                        <div key={item?.id} className="card gap-1">
                            <img src={item?.image} alt="img" className="img" />
                            <h1 className="text">{t("adv2")}</h1>
                        </div>
                    ))}
                    {dataWhyUs?.data?.data?.slice(2, 3)?.map((item) => (
                        <div key={item?.id} className="card gap-1">
                            <img src={item?.image} alt="img" className="img" />
                            <h1 className="text">{t("adv3")}</h1>
                        </div>
                    ))}
                    {dataWhyUs?.data?.data?.slice(3, 4)?.map((item) => (
                        <div key={item?.id} className="card gap-1">
                            <img src={item?.image} alt="img" className="img" />
                            <h1 className="text">{t("adv4")}</h1>
                        </div>
                    ))}
                    {dataWhyUs?.data?.data?.slice(4, 5)?.map((item) => (
                        <div key={item?.id} className="card gap-1">
                            <img src={item?.image} alt="img" className="img" />
                            <h1 className="text">{t("adv5")}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Advantages;