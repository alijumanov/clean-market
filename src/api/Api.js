import ProdImg from '../assets/images/prod.png';
import CategImg from '../assets/images/category.png';
import axios from 'axios';
import { CATEGORIES_URL } from './ApiUrl';

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

export const dataCategories = [
    { id: 1, image: CategImg, name: "Поломоичные Машины", description: "Строительный пылесос INGCO VC14122, Строительный пылесос INGCO VC14122" },
    { id: 2, image: CategImg, name: "Поломоичные Машины", description: "Строительный пылесос INGCO VC14122, Строительный пылесос INGCO VC14122" },
    { id: 3, image: CategImg, name: "Поломоичные Машины", description: "Строительный пылесос INGCO VC14122, Строительный пылесос INGCO VC14122" },
    { id: 4, image: CategImg, name: "Поломоичные Машины", description: "Строительный пылесос INGCO VC14122, Строительный пылесос INGCO VC14122" },
    { id: 5, image: CategImg, name: "Поломоичные Машины", description: "Строительный пылесос INGCO VC14122, Строительный пылесос INGCO VC14122" },
    { id: 6, image: CategImg, name: "Поломоичные Машины", description: "Строительный пылесос INGCO VC14122, Строительный пылесос INGCO VC14122" },
    { id: 7, image: CategImg, name: "Поломоичные Машины", description: "Строительный пылесос INGCO VC14122, Строительный пылесос INGCO VC14122" },
    { id: 8, image: CategImg, name: "Поломоичные Машины", description: "Строительный пылесос INGCO VC14122, Строительный пылесос INGCO VC14122" },
];