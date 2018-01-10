import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    constructor(props) {
        super(props);

        this.state = { albums: [] };
    }

    componentWillMount() {
        console.log('componentWillMount');

        this.getAlbumList();
    }

    async getAlbumList() {
        try {
            const response = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
            const responseJson = await response.json();
            this.setState({ albums: responseJson });
        } catch (error) {
            console.error(error);
        }
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
