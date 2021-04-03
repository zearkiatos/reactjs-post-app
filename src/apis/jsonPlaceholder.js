import axios from 'axios';
import config from '../config';

export default axios.create({
    baseURL: config.JSONPLACEHOLDER_BASE_URL
});