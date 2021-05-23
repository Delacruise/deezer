import axios from 'axios';

export function getArtists() {
  return axios.get('http://cors-anywhere.herokuapp.com/api.deezer.com/chart')
    .then(res => res.data)
}

export function getArtist(id) {
  return axios.get('http://cors-anywhere.herokuapp.com/api.deezer.com/artist/' + id)
    .then(res => res.data)
}

export function getArtistAlbums(artistName) {
  return axios.get('http://cors-anywhere.herokuapp.com/api.deezer.com/search/album?q=' + artistName +'&limit=10')
    .then(res => res.data)
}

export function getArtistTracks(id) {
  return axios.get('http://cors-anywhere.herokuapp.com/api.deezer.com/artist/' + id + '/top?limit=10')
    .then(res => res.data)
}