import axios from 'axios';

export default axios.create({
  baseURL: "https://api.opendota.com/api/",
  headers: {
    Authorization:
      "Bearer 675060b7-6dcc-44bd-96d5-45188a1a1852",
  },
});

