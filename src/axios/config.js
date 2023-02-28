import axios from "axios";

const config = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json",
        "key":"ahsdhadhlfhd"
    }
})

export default config;