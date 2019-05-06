import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://myburger-36aca.firebaseio.com/'
});

export default instance;