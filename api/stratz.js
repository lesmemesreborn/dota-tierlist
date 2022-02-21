import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.opendota.com/api',
})

export const dotaListApi = {
  getHeroStats() {
    return instance
      .get('/heroStats')
      .then((response) => {
        return response.data
      })
      .catch((error) => error.response)
  },
}
