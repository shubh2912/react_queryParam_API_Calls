import React from 'react';
import axios from 'axios';

import ArtistList from './ArtistList';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3006/artists").then(res => {
            this.setState({ artist: res.data })
        }
        )
    }

    render() {
        // De-structuring the state variable
        const { artist } = this.state;
        return (
            <div>
                <ArtistList artistData={artist} />
            </div>
        )
    }
}

export default Home;