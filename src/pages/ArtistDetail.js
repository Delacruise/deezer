import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import { getArtist } from '../api/index';
import { getArtistTracks } from '../api/index';
import { getArtistAlbums } from '../api/index';

const ArtistDetail = () => {
  const [artist, setArtist] = useState([]);
  const [artistAlbums, setArtistAlbums] = useState([]);
  const [artistTracks, setArtistTracks] = useState([]);
  const {artistId} = useParams();
  var artis_ID = {artistId};

  useEffect(() => {
    async function _getArtist(artis_ID) {
      const _artist = await getArtist(artis_ID.artistId);
      //artistName = _artist.name;
      _getArtistAlbums(_artist.name);
      _getArtistTracks(artis_ID.artistId);
      setArtist(_artist);
    }

    async function _getArtistTracks(artis_ID) {      
      const _tracks = await getArtistTracks(artis_ID);
      setArtistTracks(_tracks.data);
    }

    async function _getArtistAlbums(artistName) {
      const _albums = await getArtistAlbums(artistName);     
      setArtistAlbums(_albums.data);
    }
    _getArtist(artis_ID);
    
    
  }, []);

  return (
    <div className="container artistDetail">
      <div className="card mb-3">
        <div className="row section1">
          <div className="col-sm-8 imageContainer">
            <img src={artist.picture_medium} className="" alt={artist.name} />
            <div className="imageFloaterContainer">
              <h2>{artist.name}</h2>
              <p className="card-text">
                <small>{artist.nb_fan}</small>
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card-body">
              <h5 className="card-title">Top Tracks</h5>
              <ol>
                {artistTracks.map((artistTrack) => (
                  <li>{artistTrack.title_short}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Albums</h5>
          <div className=" albums pt-3">
            {artistAlbums.map((artistAlbum) => (
              <div className="card mb-3" key={artistAlbum.id}>
                <img
                  src={artistAlbum.cover_medium}
                  className="card-img-top"
                  alt={artistAlbum.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{`${artistAlbum.title.substring(
                    0,
                    20
                  )}`}</h5>
                  <p className="card-text">
                    <small className="text-muted">
                      Tracks: {artistAlbum.nb_tracks}
                    </small>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
