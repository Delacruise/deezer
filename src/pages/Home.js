import React, { useState, useEffect } from 'react';
//import { getArtists } from '../api/index';

const Home = (artist, activeArtistId) => {

    const [selectedArtist, setSelectedArtist] = useState();
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        async function _getArtists() {
            const artists = [
                {
                    "id": 339209,
                    "name": "J. Cole",
                    "link": "https://www.deezer.com/artist/339209",
                    "picture": "https://api.deezer.com/artist/339209/image",
                    "picture_small": "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/56x56-000000-80-0-0.jpg",
                    "picture_medium": "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/250x250-000000-80-0-0.jpg",
                    "picture_big": "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/500x500-000000-80-0-0.jpg",
                    "picture_xl": "https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/1000x1000-000000-80-0-0.jpg",
                    "radio": true,
                    "tracklist": "https://api.deezer.com/artist/339209/top?limit=50",
                    "position": 1,
                    "type": "artist"
                },
                {
                    "id": 246791,
                    "name": "Drake",
                    "link": "https://www.deezer.com/artist/246791",
                    "picture": "https://api.deezer.com/artist/246791/image",
                    "picture_small": "https://cdns-images.dzcdn.net/images/artist/5d2fa7f140a6bdc2c864c3465a61fc71/56x56-000000-80-0-0.jpg",
                    "picture_medium": "https://cdns-images.dzcdn.net/images/artist/5d2fa7f140a6bdc2c864c3465a61fc71/250x250-000000-80-0-0.jpg",
                    "picture_big": "https://cdns-images.dzcdn.net/images/artist/5d2fa7f140a6bdc2c864c3465a61fc71/500x500-000000-80-0-0.jpg",
                    "picture_xl": "https://cdns-images.dzcdn.net/images/artist/5d2fa7f140a6bdc2c864c3465a61fc71/1000x1000-000000-80-0-0.jpg",
                    "radio": true,
                    "tracklist": "https://api.deezer.com/artist/246791/top?limit=50",
                    "position": 2,
                    "type": "artist"
                },
                {
                    "id": 288166,
                    "name": "Justin Bieber",
                    "link": "https://www.deezer.com/artist/288166",
                    "picture": "https://api.deezer.com/artist/288166/image",
                    "picture_small": "https://cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/56x56-000000-80-0-0.jpg",
                    "picture_medium": "https://cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/250x250-000000-80-0-0.jpg",
                    "picture_big": "https://cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/500x500-000000-80-0-0.jpg",
                    "picture_xl": "https://cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/1000x1000-000000-80-0-0.jpg",
                    "radio": true,
                    "tracklist": "https://api.deezer.com/artist/288166/top?limit=50",
                    "position": 3,
                    "type": "artist"
                },
                {
                    "id": 4050205,
                    "name": "The Weeknd",
                    "link": "https://www.deezer.com/artist/4050205",
                    "picture": "https://api.deezer.com/artist/4050205/image",
                    "picture_small": "https://cdns-images.dzcdn.net/images/artist/c3cbc4309cf09aec8914784270f194e4/56x56-000000-80-0-0.jpg",
                    "picture_medium": "https://cdns-images.dzcdn.net/images/artist/c3cbc4309cf09aec8914784270f194e4/250x250-000000-80-0-0.jpg",
                    "picture_big": "https://cdns-images.dzcdn.net/images/artist/c3cbc4309cf09aec8914784270f194e4/500x500-000000-80-0-0.jpg",
                    "picture_xl": "https://cdns-images.dzcdn.net/images/artist/c3cbc4309cf09aec8914784270f194e4/1000x1000-000000-80-0-0.jpg",
                    "radio": true,
                    "tracklist": "https://api.deezer.com/artist/4050205/top?limit=50",
                    "position": 4,
                    "type": "artist"
                },
                {
                    "id": 195322,
                    "name": "Joyous Celebration",
                    "link": "https://www.deezer.com/artist/195322",
                    "picture": "https://api.deezer.com/artist/195322/image",
                    "picture_small": "https://cdns-images.dzcdn.net/images/artist/547d7bb0cb5b302e0391491d106a51ae/56x56-000000-80-0-0.jpg",
                    "picture_medium": "https://cdns-images.dzcdn.net/images/artist/547d7bb0cb5b302e0391491d106a51ae/250x250-000000-80-0-0.jpg",
                    "picture_big": "https://cdns-images.dzcdn.net/images/artist/547d7bb0cb5b302e0391491d106a51ae/500x500-000000-80-0-0.jpg",
                    "picture_xl": "https://cdns-images.dzcdn.net/images/artist/547d7bb0cb5b302e0391491d106a51ae/1000x1000-000000-80-0-0.jpg",
                    "radio": true,
                    "tracklist": "https://api.deezer.com/artist/195322/top?limit=50",
                    "position": 5,
                    "type": "artist"
                },
                {
                    "id": 12246,
                    "name": "Taylor Swift",
                    "link": "https://www.deezer.com/artist/12246",
                    "picture": "https://api.deezer.com/artist/12246/image",
                    "picture_small": "https://cdns-images.dzcdn.net/images/artist/90f7f6ce342a684aca306fec31a40f69/56x56-000000-80-0-0.jpg",
                    "picture_medium": "https://cdns-images.dzcdn.net/images/artist/90f7f6ce342a684aca306fec31a40f69/250x250-000000-80-0-0.jpg",
                    "picture_big": "https://cdns-images.dzcdn.net/images/artist/90f7f6ce342a684aca306fec31a40f69/500x500-000000-80-0-0.jpg",
                    "picture_xl": "https://cdns-images.dzcdn.net/images/artist/90f7f6ce342a684aca306fec31a40f69/1000x1000-000000-80-0-0.jpg",
                    "radio": true,
                    "tracklist": "https://api.deezer.com/artist/12246/top?limit=50",
                    "position": 6,
                    "type": "artist"
                },
                {
                    "id": 13,
                    "name": "Eminem",
                    "link": "https://www.deezer.com/artist/13",
                    "picture": "https://api.deezer.com/artist/13/image",
                    "picture_small": "https://cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/56x56-000000-80-0-0.jpg",
                    "picture_medium": "https://cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/250x250-000000-80-0-0.jpg",
                    "picture_big": "https://cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/500x500-000000-80-0-0.jpg",
                    "picture_xl": "https://cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/1000x1000-000000-80-0-0.jpg",
                    "radio": true,
                    "tracklist": "https://api.deezer.com/artist/13/top?limit=50",
                    "position": 7,
                    "type": "artist"
                },
                {
                    "id": 102,
                    "name": "Chris Brown",
                    "link": "https://www.deezer.com/artist/102",
                    "picture": "https://api.deezer.com/artist/102/image",
                    "picture_small": "https://cdns-images.dzcdn.net/images/artist/ed15b84067164aa25701fdd30cc34d33/56x56-000000-80-0-0.jpg",
                    "picture_medium": "https://cdns-images.dzcdn.net/images/artist/ed15b84067164aa25701fdd30cc34d33/250x250-000000-80-0-0.jpg",
                    "picture_big": "https://cdns-images.dzcdn.net/images/artist/ed15b84067164aa25701fdd30cc34d33/500x500-000000-80-0-0.jpg",
                    "picture_xl": "https://cdns-images.dzcdn.net/images/artist/ed15b84067164aa25701fdd30cc34d33/1000x1000-000000-80-0-0.jpg",
                    "radio": true,
                    "tracklist": "https://api.deezer.com/artist/102/top?limit=50",
                    "position": 8,
                    "type": "artist"
                },
                {
                    "id": 382937,
                    "name": "Nicki Minaj",
                    "link": "https://www.deezer.com/artist/382937",
                    "picture": "https://api.deezer.com/artist/382937/image",
                    "picture_small": "https://cdns-images.dzcdn.net/images/artist/a5693f3760b4543cf084c6330328b780/56x56-000000-80-0-0.jpg",
                    "picture_medium": "https://cdns-images.dzcdn.net/images/artist/a5693f3760b4543cf084c6330328b780/250x250-000000-80-0-0.jpg",
                    "picture_big": "https://cdns-images.dzcdn.net/images/artist/a5693f3760b4543cf084c6330328b780/500x500-000000-80-0-0.jpg",
                    "picture_xl": "https://cdns-images.dzcdn.net/images/artist/a5693f3760b4543cf084c6330328b780/1000x1000-000000-80-0-0.jpg",
                    "radio": true,
                    "tracklist": "https://api.deezer.com/artist/382937/top?limit=50",
                    "position": 9,
                    "type": "artist"
                },
                {
                    "id": 1170236,
                    "name": "Elevation Worship",
                    "link": "https://www.deezer.com/artist/1170236",
                    "picture": "https://api.deezer.com/artist/1170236/image",
                    "picture_small": "https://cdns-images.dzcdn.net/images/artist/01b253231de2ba0c70a5dbd1816d50d3/56x56-000000-80-0-0.jpg",
                    "picture_medium": "https://cdns-images.dzcdn.net/images/artist/01b253231de2ba0c70a5dbd1816d50d3/250x250-000000-80-0-0.jpg",
                    "picture_big": "https://cdns-images.dzcdn.net/images/artist/01b253231de2ba0c70a5dbd1816d50d3/500x500-000000-80-0-0.jpg",
                    "picture_xl": "https://cdns-images.dzcdn.net/images/artist/01b253231de2ba0c70a5dbd1816d50d3/1000x1000-000000-80-0-0.jpg",
                    "radio": true,
                    "tracklist": "https://api.deezer.com/artist/1170236/top?limit=50",
                    "position": 10,
                    "type": "artist"
                }
            ]
            //const _artists = await getArtists();
            //var artistArray = _artists.artists.data;
            //console.log("TTTT: " + JSON.stringify(_artists.artists.data));
            setArtists(artists);
         }

        _getArtists();
    }, [])  

    return (
        <div className="container home">
            {artists.map((artist) =>
                <div className="card mb-3" key={artist.id}>
                    <img src={artist.picture_medium} className="card-img-top" alt="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{artist.name}</h5>
                        <p className="card-text"><small className="text-muted">2323 Fans</small></p>
                    </div>
                </div>                                   
            )}  
        </div>
    )
}

export default Home;