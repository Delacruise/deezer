import React, { useState, useEffect } from 'react';
import { getArtists } from '../api/index';

const Home = (activeArtistId) => {

    const [selectedArtist, setSelectedArtist] = useState();
    const [artists, setArtists] = useState([]);
    const [isDetailView, setDetailView] = useState(true);

    useEffect(() => {
        async function _getArtists() {
            const _Artists = await getArtists();
            setArtists(_Artists);
        }

        _getArtists();
    }, [])  

    //console.log("Artists: " + artists);

    return (
        <div className="container HOMEE">
            <div className="card margin-bottom-20">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9 order-md-1">
                            {artists.map((artist) =>
                                <div class="card">
                                    <img src="assets/images/bs-images/img-2x1.png" class="card-img-top" alt="card-img-top" />
                                    <div class="card-body">
                                        <h5 class="card-title">{artists.name}</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>                                   
                            )}   
                        </div>                     
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Home;