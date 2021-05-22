import axios from 'axios';

export function getArtists() {
  return axios.get('https://api.deezer.com/chart')
    .then(res => res.data)
}