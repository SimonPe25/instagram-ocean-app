 import axios from 'axios';
import { SERVER } from '../actions';

 const getUsersCards = () => {
    const req_url = SERVER
    return axios(req_url)
 }

 export default getUsersCards;

