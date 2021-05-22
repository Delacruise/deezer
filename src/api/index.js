import axios from 'axios';

export function getArtists() {
  return axios.get('http://cors-anywhere.herokuapp.com/api.deezer.com/artists')
    .then(res => res.data)
    
}