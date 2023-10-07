import React from 'react';
import '../../styles/home/FAQ.scss';
import { useQuery } from 'react-query';
import { fetchFaq } from '../../api/Api';
import { getDescription, getName } from '../../languages/language';

const FAQ = () => {

    // API options

    const dataFAQ = useQuery('FAQ', fetchFaq);

    return (
        <div className='FAQ parent'>
            <div className="wrapper gap-2">
                <h1 className="sub-title">F.A.Q.</h1>
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