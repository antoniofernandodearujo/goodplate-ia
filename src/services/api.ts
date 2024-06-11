import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.clarifai.com/",
    headers: {
        "Authorization": "Key 5116e0379669450bb6d296baa53809ad"
    }

});