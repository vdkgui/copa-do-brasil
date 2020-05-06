import axios from  'axios'

// const TOKEN = "live_d25078cf0217760f771ac70d471203"
const TOKEN = "live_d25078cf0217760f771ac70d471203"


const api = axios.create( {
    baseURL: "https://api.api-futebol.com.br/v1",
    headers: { Authorization: "Bearer ".concat(TOKEN) }
})

export default api