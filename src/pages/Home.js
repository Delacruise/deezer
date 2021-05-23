import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getArtists } from '../api/index';
import { getArtist } from '../api/index';

const Home = (artist, activeArtistId) => {

    const [selectedArtist, setSelectedArtist] = useState();
    const [artists, setArtists] = useState([]);
    const [artistFans, setArtistFans] = useState([]);

    useEffect(() => {
        async function _getArtists() { 
           
            const _artists = await getArtists();
            var artistArray = _artists.artists.data;
            /*
            for (var i = 0; artistArray.length > i; i++){
                artistArray[i].nb_fan = _getArtistFans(artistArray.id);
            }    
            */
            setArtists(artistArray);
         }

        async function _getArtistFans(artistID) {
            const _artist = await getArtist();
            return _artist.nb_fan;
        }        
        _getArtists();
    }, [])  

    return (
        <div className="container home">
            {artists.map((artist) =>
                <Link to={`/ArtistDetail/${artist.id}`}>
                    <div className="card mb-3" key={artist.id}>
                        <img src={artist.picture_medium} className="card-img-top" alt="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{artist.name}</h5>
                            <p className="card-text"><small className="text-muted">{artist.nb_fan} Fans</small></p>
                        </div>
                    </div>   
                </Link>                                                
            )}  
        </div>
    )
}

export default Home;