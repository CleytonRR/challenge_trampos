import axios from 'axios'

class Api {
    static async getJobs() {
        try {
            const response = await axios.get('http://trampos.co/api/oportunidades.json')
            console.log(response.data)
        } catch (error) {
            console.error('Erro ao buscar dados')
        }
    }
}

export default Api

