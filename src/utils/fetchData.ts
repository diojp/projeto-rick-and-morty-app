import axios from 'axios';

export const getDataByPage = async (selector: string, page?: string) => {
    try {
        const resposta = await axios.get(`https://rickandmortyapi.com/api/${selector}/?page=${page}`);
        return resposta.data;

    } catch (err) {
        console.error(err);
    }
};

export const getDataByID = async (selector: string, id?: string) => {
    try {
        const resposta = await axios.get(`https://rickandmortyapi.com/api/${selector}/${id}`);
        return resposta.data;

    } catch (err) {
        console.error(err);
    }
};
