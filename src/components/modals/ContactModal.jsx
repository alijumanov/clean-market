import React, { useState } from 'react';
import '../../styles/modals/ContactModal.scss';
import { useTranslation } from 'react-i18next';
import CloseIcon from '../../assets/icons/close.svg';

const ContactModal = ({ changeModal, changeContactModal, prodValue }) => {

    // input values

    const [nameValue, setNameValue] = useState("");
    const [numberValue, setNumberValue] = useState("");

    // invalid input states

    const [invalidName, setInvalidName] = useState(false);
    const [invalidNumber, setInvalidNumber] = useState(false);

    // change values and invalids functions

    function changeNumber(item) {
        setNumberValue(item);
        setInvalidNumber(false);
    };

    function changeName(item) {
        setNameValue(item);
        setInvalidName(false);
    };

    // send message to telegram bot

    let bot = {
        TOKEN: "6261569509:AAERpWccOMkKdkQpVPURVNkRBdtUi4c2KOE",
        chatID: "-1001603637510",
        message: `%0AIsmi: ${nameValue}; %0ATelefon raqami: ${numberValue}; %0AXarid qilmoqchi bo'lgan mahsulot nomi: "${prodValue}"`
    };

    function sendMessage() {
        if (nameValue === "") {
            setInvalidName(true)
        } else if (numberValue === "") {
            setInvalidNumber(true)
        } else {
            fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `, {
                method: "GET"
            })
                .then(success => {
                    console.log('send message')
                }, error => {
                    console.log(error)
                })

            changeModal();
            setNameValue("");
            setNumberValue("");
            changeContactModal();
        }
    };

    const { t } = useTranslation();

    return (
        <div className="ContactModal">
            <div className="forms">
                <img src={CloseIcon} className="close-icon" onClick={() => changeContactModal()} />
                <input type="text" className={`forms-control text ${invalidName && "red-line"}`} value={nameValue} onChange={(e) => changeName(e.target.value)} placeholder={`${t("contact2")}`} />
                <input type="number" className={`forms-control text ${invalidNumber && "red-line"}`} value={numberValue} onChange={(e) => changeNumber(e.target.value)} placeholder={`${t("contact3")}`} />
                <button className="send-btn text" onClick={sendMessage}>{t("contact")}</button>
            </div>
            <div className="contrast-05" onClick={() => changeContactModal()}></div>
        </div>
    );
};

export default ContactModal;