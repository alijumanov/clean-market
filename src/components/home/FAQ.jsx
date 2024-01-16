import React from 'react';
import '../../styles/home/FAQ.scss';
import { useQuery } from 'react-query';
import { fetchFaq } from '../../api/Api';
import { useTranslation } from 'react-i18next';
import { getAnswer, getQuestion } from '../../languages/language';

const FAQ = () => {

    // API options

    const dataFAQ = useQuery('FAQ', fetchFaq);

    // i18next

    const { t } = useTranslation();

    return (
        <div className='FAQ parent'>
            <div className="wrapper gap-2">
                <h1 className="sub-title">{t("faq")}</h1>
                {dataFAQ?.data?.data?.map((item) => (
                    <div key={item?.id} className="texts gap-1">
                        <p className="text"><b>{getQuestion(item)}</b></p>
                        <p className="text answer">{getAnswer(item)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;