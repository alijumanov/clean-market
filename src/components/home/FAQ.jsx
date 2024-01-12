import React from 'react';
import '../../styles/home/FAQ.scss';
import { useQuery } from 'react-query';
import { fetchFaq } from '../../api/Api';
import { useTranslation } from 'react-i18next';
import { getDescription, getName } from '../../languages/language';

const FAQ = () => {

    // API options

    const dataFAQ = useQuery('FAQ', fetchFaq);

    console.log(dataFAQ?.data?.data)

    // i18next

    const { t } = useTranslation();

    return (
        <div className='FAQ parent'>
            <div className="wrapper gap-2">
                <h1 className="sub-title">{t("faq")}</h1>
                {dataFAQ?.data?.data?.map((item) => (
                    <div key={item?.id} className="texts gap-1">
                        <p className="text"><b>{getName(item)}</b></p>
                        <p className="text answer">{getDescription(item)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;