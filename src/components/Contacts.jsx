import React from 'react';
import '../styles/Contacts.scss';
import Twitter from '../assets/icons/twitter.svg';
import Facebook from '../assets/icons/facebook1.svg';
import Instagram from '../assets/icons/instagram1.svg';

const Contacts = () => {
    return (
        <div className='Contacts parent'>
            <div className="wrapper gap-4">
                <div className="left gap-2">
                    <div className="top gap-1">
                        <h1 className="sub-title">Biz bilan aloqa</h1>
                        <p className="text">Бизга алокага чикинг операторларимиз 24 соат ичида алокага чикади точно тел килишади ховотир омен</p>
                    </div>
                    <div className="bottom gap-1">
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
                    </div>
                </div>
                <form className="right gap-1">
                    <input type="text" className="input text round-07 pd-1-5" placeholder='Name and surname' />
                    <input type="number" className="input text round-07 pd-1-5" placeholder='Phone number' />
                    <textarea rows="5" className="input text round-07 pd-1-5" placeholder='Habaringizni yozib qoldiring'></textarea>
                    <button type="submit" className='send_btn round-07 pd-1-5 text op-07'>Send all informations</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;