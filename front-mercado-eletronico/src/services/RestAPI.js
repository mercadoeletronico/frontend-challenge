import axios from 'axios';

const urlBase = 'https://me-frontend-challenge-api.herokuapp.com/orders/1';

export default {
    getResponse: (callback) => {
        axios.get(urlBase).then((response)=>{
            try {
                if (callback) {
                    callback(response);
                }
            } catch (error) {
                console.log(error)
            }
        })
    }
}