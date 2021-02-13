import React, { Component } from "react";
import axios from 'axios';

class Kitty extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }

    fetchData = () => {
        axios.get("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1")
        .then((response) => {
            console.log(response);
            this.setState({data: response.data[0]})
        }).catch((error) => {
            console.log(error)
        })

    };

    renderData = () => {
        if(this.state.data) {
            return(
                <div>
                    <div>{this.state.data.text}</div>
                </div>
            )
        }else{
            return null
        }
    }

    render(){
        return (
            <div>
                <div>Click for a random cat fact!</div>
                <button onClick = {this.fetchData}>Click me!</button>
                {this.renderData()}
            </div>
        );
    }
}

export default Kitty;