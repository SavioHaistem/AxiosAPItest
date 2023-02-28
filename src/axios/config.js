import axios from "axios";

const configs = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json",
        "key":"ahsdhadhlfhd"
    }
})

export default configs;