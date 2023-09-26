import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/other/Categories.scss';
import Img from '../../assets/images/category.png';
import Icon from '../../assets/icons/category.svg';
import Settings from '../../assets/images/settings.png';

const Categories = () => {
    return (
        <div className='Categories parent'>
            <div className="wrapper">
                <div className="left gap-1">
                    <h1 className="name">Поломоичные машины</h1>
                    <p className="min-text"><b>под категории</b></p>
                    <Link className='link'>
                        <p className="min-text">поломоичные машины</p>
                        <img src={Icon} alt="icn" className="icn" />
                    </Link>
                    <Link className='link'>
                        <p className="min-text">поломоичные машины</p>
                        <img src={Icon} alt="icn" className="icn" />
                    </Link>
                    <Link className='link'>
                        <p className="min-text">поломоичные машины</p>
                        <img src={Icon} alt="icn" className="icn" />
                    </Link>
                    <Link className='link'>
                        <p className="min-text">поломоичные машины</p>
                        <img src={Icon} alt="icn" className="icn" />
                    </Link>
                    <Link className='link'>
                        <p className="min-text">поломоичные машины</p>
                        <img src={Icon} alt="icn" className="icn" />
                    </Link>
                    <Link className='link'>
                        <p className="min-text">поломоичные машины</p>
                        <img src={Icon} alt="icn" className="icn" />
                    </Link>
                    <Link className='link'>
                        <p className="min-text">поломоичные машины</p>
                        <img src={Icon} alt="icn" className="icn" />
                    </Link>
                    <div className="settings round-1 pd-1-5 mtop-1 gap-1">
                        <p className="text">Kale bepul service va kafolat xizmati</p>
                        <img src={Settings} alt="img" className="img" />
                        <p className="min-text">simply dummy text of the printing and typesetting industry. Lorem Ipsum has </p>
                    </div>
                </div>
                <div className="right gap-2">
                    <h1 className="name">Kategoriyalar</h1>
                    <div className="cards gap-1-5">
                        <Link to={`/`} className="product gap-1 pd-1 round-1">
                            <p className="text">Поломоичные Машины</p>
                            <img src={Img} alt="img" className="img" />
                            <p className="min-text">12 ta mahsulot</p>
                        </Link>
                        <Link to={`/`} className="product gap-1 pd-1 round-1">
                            <p className="text">Поломоичные Машины</p>
                            <img src={Img} alt="img" className="img" />
                            <p className="min-text">12 ta mahsulot</p>
                        </Link>
                        <Link to={`/`} className="product gap-1 pd-1 round-1">
                            <p className="text">Поломоичные Машины</p>
                            <img src={Img} alt="img" className="img" />
                            <p className="min-text">12 ta mahsulot</p>
                        </Link>
                        <Link to={`/`} className="product gap-1 pd-1 round-1">
                            <p className="text">Поломоичные Машины</p>
                            <img src={Img} alt="img" className="img" />
                            <p className="min-text">12 ta mahsulot</p>
                        </Link>
                        <Link to={`/`} className="product gap-1 pd-1 round-1">
                            <p className="text">Поломоичные Машины</p>
                            <img src={Img} alt="img" className="img" />
                            <p className="min-text">12 ta mahsulot</p>
                        </Link>
                        <Link to={`/`} className="product gap-1 pd-1 round-1">
                            <p className="text">Поломоичные Машины</p>
                            <img src={Img} alt="img" className="img" />
                            <p className="min-text">12 ta mahsulot</p>
                        </Link>
                        <Link to={`/`} className="product gap-1 pd-1 round-1">
                            <p className="text">Поломоичные Машины</p>
                            <img src={Img} alt="img" className="img" />
                            <p className="min-text">12 ta mahsulot</p>
                        </Link>
                        <Link to={`/`} className="product gap-1 pd-1 round-1">
                            <p className="text">Поломоичные Машины</p>
                            <img src={Img} alt="img" className="img" />
                            <p className="min-text">12 ta mahsulot</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;