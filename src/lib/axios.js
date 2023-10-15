import axios from "axios";

const Api = axios.create({
    baseURL: `//apis.economicexpressbd.com/public/api`,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: false,
})

export default Api
