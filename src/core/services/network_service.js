import axios from "axios";

class NetworkService {
    get(url, params, headers, data) {
        return axios.get(url, {
            params: params,
            headers: headers,
            data: data
        });
    }

    post(url, params, headers, data) {
        return axios.post(url, {
            params: params,
            headers: headers,
            data: data
        });
    }

    put(url, params, headers, data) {
        return axios.put(url, {
            params: params,
            headers: headers,
            data: data
        });
    }

    delete(url, params, headers, data) {
        return axios.delete(url, {
            params: params,
            headers: headers,
            data: data
        });
    }


}


export default NetworkService;