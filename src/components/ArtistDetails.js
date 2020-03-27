import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class ArtistDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            details: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3006/artists/${this.props.match.params.artistId}`).then(res => this.setState({ details: res.data }))
    }

    render() {
        const { details } = this.state;
        return (
            <div>
                <Link to={"/"}>Home</Link>
                <div>{details.name}</div><br />
                <div>{details.bio}</div>
                <h1>Albums List</h1> <br />
                {details.albums ? details.albums.map((item, index) => {
                    return <div>
                        <img key={index} src={`/images/albums/${item.cover}.jpg`} />
                        <h1>{item.title}</h1>
                        <h1>{item.year}</h1>
                    </div>
                }) : undefined}
            </div>
        )
    }
}