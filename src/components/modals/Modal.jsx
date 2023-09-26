import React from 'react';
import '../../styles/modals/Modal.scss';
import { useTranslation } from 'react-i18next';

const Modal = ({ changeModal }) => {

    const { t } = useTranslation();

    return (
        <>
            <div className='Modal'>
                <h1>{t("modal")} &#128522;</h1>
                <button onClick={() => changeModal()}>OK</button>
            </div>
            <div className="contrast" onClick={() => changeModal()}></div>
        </>
    );
};

export default Modal;