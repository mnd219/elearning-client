import axios from "axios";
import keycloak from "../../auth/keycloak";


const httpClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

httpClient.interceptors.request.use( async (config) => {
    if (keycloak.authenticated) {
        await keycloak.updateToken(30);
        if (keycloak.token) {
            config.headers.Authorization = `Bearer ${keycloak.token}`
        }
    }
    return config
})

export default httpClient;