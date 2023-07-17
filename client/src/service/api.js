import axios from 'axios';

const URL = 'http://localhost:8000';

export const addNewItem = async (data) => {
    try {
        return await axios.post(`${URL}/newitem`, data);
    } catch (error) {
        console.log('Error while calling addUser API', error);
    }
}