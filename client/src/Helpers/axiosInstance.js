import axios from 'axios';
const axiosInstance=axios.create();
const BASE_URL="http://localhost:5000/api/v1/user";
axiosInstance.defaults.baseURL=BASE_URL;
axiosInstance.defaults.withCredentials=true;
 export default axiosInstance;