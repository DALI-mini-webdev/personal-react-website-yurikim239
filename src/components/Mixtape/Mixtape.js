import React, { Component } from 'react';
import { Map } from 'immutable';
import './Mixtape.css';
import MixtapePosting from './MixtapePosting'
import firebase from '../../firestore/index';

class Mixtape extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alltheSongs: [],
            songs: Map(),
            songID: 0,
            newSongName: '',
            newSongArtist: '',
            newSongDescription: '',
        };
    }

    delete = (id, field) => {
        this.setState({songs: this.state.songs.delete(id, field)})
    }

    save = (id, field) => {
        this.setState({songs: this.state.songs.update(id, (n) => { return Object.assign({}, n, field)})})
    }

    newSongNameFunction = (event) => {
        this.setState({ newSongName: event.target.value });
    }
    newSongArtistFunction = (event) => {
        this.setState({ newSongArtist: event.target.value });
    }
    newSongDescriptionFunction = (event) => {
        this.setState({ newSongDescription: event.target.value });
    }

    saveSongInfo = () => {
        let songData = {
            name: this.state.newSongName,
            artist: this.state.newSongArtist,
            description: this.state.newSongDescription,
        }
        this.setState({
            songs: this.state.songs.set(this.state.songID, songData),
            songID: this.state.songID + 1
        });
        firebase.db.collection('mixtape').add({
            name: this.state.newSongName,
            artist: this.state.newSongArtist,
            description: this.state.newSongDescription,
            songID: this.state.songID
        }).then(ref => {
            console.log('document reference id', ref.id);
            this.setState({
                songID: this.state.songID + 1
            })
        }).catch((e) => {
            console.log(e);
        })
    }

    fetchSongs = () => {
        const songList = [];
        firebase.db.collection('mixtape').get()
            .then(query => {
                query.forEach(doc => {
                    console.log(doc.data());
                    songList.push(doc.data());
                })
            }).then(() => {
                this.setState({
                    alltheSongs: songList
                })
            }).catch((e) => {
                console.log(e);
            })
    }

    render() {
        const alltheSongs = this.state.alltheSongs.map((mixtape) => {
            return (
                <MixtapePosting
                name={mixtape.name}
                artist={mixtape.artist}
                description={mixtape.description}
                id={mixtape.songID}
            />
            )
         }
        );

        const allSongs = this.state.songs.entrySeq().map(
            ([id, song]) => {
                return(
                    <MixtapePosting
                    save={this.save}
                    delete={this.delete}
                    name={song.name}
                    artist={song.artist}
                    description={song.description}
                    key={id}/>
                 )
            }
        );

        return (
            <div>
                <h2> Add songs to my mixtape!</h2>
            {allSongs}
                <p> Enter your song name. </p>
                <input type="text" value={this.state.newSongName} onChange={this.newSongNameFunction} />

                <p> Enter your song's artist. </p>
                <input type="text" value={this.state.newSongArtist} onChange={this.newSongArtistFunction} />

                <p> Enter what you like about the song.</p>
                <input type="text" value={this.state.newSongDescription} onChange={this.newSongDescriptionFunction} />

                <button onClick={this.saveSongInfo}>Save!</button>

                <div>
                    <button onCLick={this.fetchSongs}>Check out my Mixtape!</button>
                    {alltheSongs}
                </div>
            </div>
        );
    }
}
export default Mixtape;