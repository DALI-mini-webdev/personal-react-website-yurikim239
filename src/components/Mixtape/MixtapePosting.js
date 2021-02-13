import React, { Component } from 'react';

class MixtapePosting extends Component {
    constructor(props) {
        super(props);
        this.state = {editing: false, newSongName: '', newSongArtist: '', newSongDescription: ''};
    }

    deletePosting = () => {
        this.props.delete(this.props.id)
        //console.log("deleted")
    }
    
    editAll = () => {
        this.setState({editing: true})
    }

    changenewName = (event) => {
        this.setState({newSongName: event.target.value})
    }

    changenewArtist = (event) => {
        this.setState({newSongArtist: event.target.value})
    }

    changenewDescription = (event) => {
        this.setState({newSongDescription: event.target.value})
    }

    submitAll = () => {
        var newSongName = {
            name: this.state.newSongName
        }
        var newSongArtist = {
            artist: this.state.newSongArtist
        }
        var newSongDescription = {
            description: this.state.newSongDescription
        }
        this.props.save(this.props.id, newSongName, newSongArtist, newSongDescription);

        this.setState({editing: false});
    }

    render() {
        var editBoxOrEditButton = null;

        if(this.state.editing){
            editBoxOrEditButton = (
                <div>
                    <input value= {this.state.newSongName} onChange={this.changenewName}/>
                    <input value= {this.state.newSongArtist} onChange={this.changenewArtist}/>
                    <input value= {this.state.newSongDescription} onChange={this.changenewDescription}/>
                    <button onClick={this.submitAll}>Submit</button>
                </div>
            )
        }
        else {
            editBoxOrEditButton = (
                <div>
                <button onClick={this.editAll}>Edit</button>
                </div>
            )
        }

        return(
        <div>
            <p>{this.props.name}, by {this.props.artist}, because {this.props.description}</p>
            <button onClick={this.deletePosting}>Delete</button>
            {editBoxOrEditButton}
        </div>
        );
    }
}

export default MixtapePosting;
