 import axios from 'axios';

 const getUsersCards = () => {
    const req_url = "https://instagramserver23.onrender.com"
    return axios(req_url)
 }

 export default getUsersCards;

