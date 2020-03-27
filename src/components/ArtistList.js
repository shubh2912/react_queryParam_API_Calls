import React from 'react';
import { Link } from 'react-router-dom'

const ArtistList = (props) => {
    return (
        <div>
            <h4>All Artist List</h4>
            {props.artistData.map((item) =>
                <Link to={`/artist/${item.id}`}>
                    <div>
                        <div>{item.name}</div>
                        <img src={`/images/covers/${item.cover}.jpg`}></img>
                    </div>
                </Link>
            )}
        </div>
    )
}

export default ArtistList;
