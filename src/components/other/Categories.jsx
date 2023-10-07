import React from 'react';
import { useQuery } from 'react-query';
import '../../styles/other/Categories.scss';
import Icon from '../../assets/icons/category.svg';
import { getName } from '../../languages/language';
import { Link, useParams } from 'react-router-dom';
import Settings from '../../assets/images/settings.png';
import { fetchCategories, fetchSubCategories } from '../../api/Api';

const Categories = () => {

    // router options

    const { id } = useParams();

    // API options

    const dataCategories = useQuery('categories', fetchCategories);
    const dataSubCategories = useQuery('sub-categories', fetchSubCategories);

    // i18next

    let lang = localStorage.getItem('i18nextLng');

    return (
        <div className='Categories parent'>
            <div className="wrapper">
                <div className="left gap-1">
                    {id ?
                        dataCategories?.data?.data?.filter((c) => c?.id == id)?.map((item) => (
                            <h1 className="name">{getName(item)}</h1>
                        ))
                        :
                        <h1 className="name">Barcha kategoriyalar</h1>
                    }
                    <p className="min-text"><b>категории</b></p>
                    {dataCategories?.data?.data?.map((item) => (
                        <Link key={item?.id} to={`/categories/${item?.id}`} className='link'>
                            <p className="min-text">{getName(item)}</p>
                            <img src={Icon} alt="icn" className="icn" />
                        </Link>
                    ))}
                    <div className="settings round-1 pd-1-5 mtop-1 gap-1">
                        <p className="text">Kale bepul service va kafolat xizmati</p>
                        <img src={Settings} alt="img" className="img" />
                        <p className="min-text">simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>
                    </div>
                </div>
                <div className="right gap-2">
                    <h1 className="name">Subkategoriyalar</h1>
                    <div className="cards gap-1-5">
                        {id ?
                            dataSubCategories?.data?.data?.filter((c) => c?.category == id)?.map((item) => (
                                <Link key={item?.id} to={`/sub-categories/${item?.id}`} className="product gap-1 pd-1 round-1">
                                    <p className="text">{getName(item)}</p>
                                    <img src={item?.image} alt="img" className="img" />
                                    <p className="min-text">12 ta mahsulot</p>
                                </Link>
                            ))
                            :
                            dataSubCategories?.data?.data?.map((item) => (
                                <Link key={item?.id} to={`/sub-categories/${item?.id}`} className="product gap-1 pd-1 round-1">
                                    <p className="text">{getName(item)}</p>
                                    <img src={item?.image} alt="img" className="img" />
                                    <p className="min-text">12 ta mahsulot</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;