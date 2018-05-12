import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-481cb.firebaseio.com/'
});

export default instance;