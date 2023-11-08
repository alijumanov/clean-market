import axios from 'axios';
import ProdImg from '../assets/images/prod.png';
import { CATEGORIES_URL, FAQ_URL, NEWS_URL, PARTNERS_URL, PRODUCTS_URL, SUB_CATEGORIES_URL, TOP_PRODUCTS_URL } from './ApiUrl';

export const dataTopProducts = [
    { id: 1, image: ProdImg, new: true, percent: null, recommend: false, name: "Any submit desc", description: "Строительный пылесос INGCO VC14122, Строительный пылесос INGCO VC14122" },
    { id: 2, image: ProdImg, new: false, percent: null, recommend: true, name: "Any submit desc", description: "Строительный пылесос INGCO VC14122, Строительный пылесос INGCO VC14122" },
    { id: 3, image: ProdImg, new: false, percent: "-45%", recommend: false, name: "Any submit desc", description: "Строительный пылесос INGCO VC14122, Строительный пылесос INGCO VC14122" },
    { id: 4, image: ProdImg, new: true, percent: null, recommend: false, name: "Any submit desc", description: "Строительный пылесос INGCO VC14122, Строительный пылесос INGCO VC14122" },
    { id: 5, image: ProdImg, new: false, percent: null, recommend: true, name: "Any submit desc", description: "Строительный пылесос INGCO VC14122, Строительный пылесос INGCO VC14122" },
    { id: 6, image: ProdImg, new: false, percent: "-45%", recommend: false, name: "Any submit desc", description: "Строительный пылесос INGCO VC14122, Строительный пылесос INGCO VC14122" },
    { id: 7, image: ProdImg, new: true, percent: null, recommend: false, name: "Any submit desc", description: "Строительный пылесос INGCO VC14122, Строительный пылесос INGCO VC14122" },
    { id: 8, image: ProdImg, new: false, percent: null, recommend: true, name: "Any submit desc", description: "Строительный пылесос INGCO VC14122, Строительный пылесос INGCO VC14122" },
];

// API of Categories

export const fetchCategories = () => {
    return axios.get(CATEGORIES_URL)
};

// API of SubCategories

export const fetchSubCategories = () => {
    return axios.get(SUB_CATEGORIES_URL)
};

// API of Products

export const fetchProducts = (filter) => {
    return axios.get(`${PRODUCTS_URL}/${filter}`)
};

// API of TopProducts

export const fetchTopProducts = () => {
    return axios.get(TOP_PRODUCTS_URL)
};

// API of ProductItem

export const fetchProductItem = (filter) => {
    return axios.get(`${PRODUCTS_URL}/${filter}`)
};

// API of News

export const fetchNews = () => {
    return axios.get(NEWS_URL)
};

// API of Faq

export const fetchFaq = () => {
    return axios.get(FAQ_URL)
};

// API of Partner

export const fetchPartner = () => {
    return axios.get(PARTNERS_URL)
};