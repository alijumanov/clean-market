import React from 'react';
import '../../styles/home/Infographics.scss';

const Infographics = () => {
    return (
        <div className='Infographics parent'>
            <div className="wrapper gap-2">
                <h1 className="sub-title">Biz sonlarda</h1>
                <div className="infos gap-4">
                    <div className="info gap-1 pd-1">
                        <h1 className="title">40K</h1>
                        <p className="text txt">nominal product</p>
                        <div className="child pd-05">
                            <p className="name">+</p>
                            <p className="min-text">foreign partners</p>
                        </div>
                    </div>
                    <div className="info gap-1 pd-1">
                        <h1 className="title">10+</h1>
                        <p className="text txt">partners</p>
                        <div className="child pd-05">
                            <p className="name">+</p>
                            <p className="min-text">foreign partners</p>
                        </div>
                    </div>
                    <div className="info gap-1 pd-1">
                        <h1 className="title">40K</h1>
                        <p className="text txt">nominal product</p>
                        <div className="child pd-05">
                            <p className="name">+</p>
                            <p className="min-text">foreign partners</p>
                        </div>
                    </div>
                    <div className="info gap-1 pd-1">
                        <h1 className="title">40K</h1>
                        <p className="text txt">nominal product</p>
                        <div className="child pd-05">
                            <p className="name">+</p>
                            <p className="min-text">foreign partners</p>
                        </div>
                    </div>
                </div>
                <p className="text desc">As an effort to keep polishing our services for a more satisfactory customer experience, we are very happy to announce the establishment of our new SamAutoTrans warehouse! This stands as an embodiment of our striving for ever-improving professionalism and quality customer service.</p>
            </div>
        </div>
    );
};

export default Infographics;