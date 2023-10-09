import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

const sendRequest = async (method, endpoint, data = null, customHeaders = {}) => {
    try {
        const response = await axiosInstance({
            method,
            url: endpoint,
            data,
            headers: {
                ...axiosInstance.defaults.headers,
                ...customHeaders,
            },
        })

        return response.data
    } catch (error) {
        throw error
    }
}

const methods = {
    get: (endpoint, customHeaders = {}) => sendRequest('GET', endpoint, null, customHeaders).catch(e => console.log(e)),
    post: (endpoint, data, customHeaders = {}) => sendRequest('POST', endpoint, data, customHeaders).catch(e => console.log(e)),
    put: (endpoint, data, customHeaders = {}) => sendRequest('PUT', endpoint, data, customHeaders).catch(e => console.log(e)),
    delete: (endpoint, customHeaders = {}) => sendRequest('DELETE', endpoint, null, customHeaders).catch(e => console.log(e)),
}

export default methods