import axios from 'axios';

const instance = () => axios.create({
  baseURL: "https://api.opendota.com/api",
  headers: {
  },
});

export const dotaListApi = {
  getHeroStats() {
    let heroStats = []
    instance()
    .get('/heroStats')
    .then((response) => {
      heroStats = response.data})
    .catch((error) => error.response)
    return heroStats
  }
} 
