import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://formsapi.jabwn.com/key/'

});

export default instance