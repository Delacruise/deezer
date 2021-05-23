import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { searchArtists } from '../api/index';

const Search = () => {

  const [searchedArtists, setSearchedArtists] = useState([]);
  const {artistName} = useParams();
  var artist_Name = {artistName};

  useEffect(() => {
      async function _searchResults(artist_Name) {          
          const _searchedArtists = await searchArtists(artist_Name);
          var artistArray = _searchedArtists.data;
          setSearchedArtists(artistArray);         
       }    
      _searchResults(artist_Name.artistName)
  }, [])  

  return (
    <div className="container search">
      {searchedArtists.length == 0 ? (
        <div className="noResults">
          No results for current search term.
        </div>
      ) : null}      
      {searchedArtists.map((searchedArtist) =>
        <Link to={`/ArtistDetail/${searchedArtist.id}`}>
          <div className="card mb-3" key={searchedArtist.id}>
          <img src={searchedArtist.picture_medium} className="card-img-top" alt="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{searchedArtist.name}</h5>
              <p className="card-text"><small className="text-muted">{searchedArtist.nb_fan} Fans</small></p>
            </div>
          </div>   
        </Link>                                                
      )}  
    </div>
  )
}

export default Search;