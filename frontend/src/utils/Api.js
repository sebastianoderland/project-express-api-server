import axios from "axios"

function request(endpoint, data = null, method = "GET") {
    const baseUrl = process.env.REACT_APP_API_BASE_URL.replace(/\/$/, "")
    const port = process.env.REACT_APP_API_PORT
    const url = `${baseUrl}:${port}/${endpoint}`

    return axios.request({
        url: url,
        method: method,
        data: data,
    })
}

export { request }
