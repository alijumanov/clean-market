let lang = localStorage.getItem('i18nextLng');

export const changeLang = (item) => {
    lang = item
};

export const getName = (item) => {
    if (lang == "uz") {
        return item.name_uz.split('/rn/')[0]
    } else if (lang == "ru") {
        return item.name_ru.split('/rn/')[0]
    } else {
        return item.name_en.split('/rn/')[0]
    }
};

export const getDescription = (item) => {
    if (lang == "uz") {
        return item.description_uz
    } else if (lang == "ru") {
        return item.description_ru
    } else {
        return item.description_en
    }
};

export const getQuestion = (item) => {
    if (lang == "uz") {
        return item.question_uz
    } else if (lang == "ru") {
        return item.question_ru
    } else {
        return item.question_en
    }
};

export const getAnswer = (item) => {
    if (lang == "uz") {
        return item.answer_uz
    } else if (lang == "ru") {
        return item.answer_ru
    } else {
        return item.answer_en
    }
};