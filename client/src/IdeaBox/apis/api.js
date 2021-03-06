import axios from 'axios';
import { errorHandler } from './errorHandler';

const idea_url = 'http://localhost:3001/api/idea/';

export const getAll = async function() {
    try {
        const { data } = await axios.get(`${idea_url}`);
        return data;
    } catch(err) {
        errorHandler(err);
        return undefined;
    }   
}

export const getSome = async function() {
    try {
        const { data } = await axios.get(`${idea_url}/3`);
        return data;
    } catch(err) {
        errorHandler(err);
        return undefined;
    }   
}

export const getRandom = async function() {
    try {
        const { data } = await axios.get(`${idea_url}/generate/50`);
        return data;
    } catch(err) {
        errorHandler(err);
        return undefined;
    }   
}
