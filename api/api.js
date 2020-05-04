import axios from  'axios'

const TOKEN = "test_64091a5afb711cbff4ac4f211411ab"
// const TOKEN = "live_4e83956bd63826fda21ea01f83e53a"

export default api = axios.create( {
    baseURL: "https://api.api-futebol.com.br/v1",
    headers: { Authorization: "Bearer ".concat(TOKEN) }
})
