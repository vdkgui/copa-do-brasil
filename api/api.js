import axios from  'axios'


const TOKEN = "live_63504907703a83faa7ec7d1b895b32"
// const TOKEN = "live_4e83956bd63826fda21ea01f83e53a"
// const TOKEN = "live_aff5a1a46c2065b636d9d3b85fa798"

export default api = axios.create( {
    baseURL: "https://api.api-futebol.com.br/v1",
    headers: { Authorization: "Bearer ".concat(TOKEN) }
})
