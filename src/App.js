import React from 'react';
import Firebase from './firestore/index';
import Navbar from "./components/Navbar/Navbar";
import Mixtape from "./components/Mixtape/Mixtape";
import Kitty from "./components/Kitty/Kitty";
import './App.css';
import computer from './Images/pixelcomputer.png';

function App() {
  const buttonFunction =() => {
    console.log("Someone said hi to console!")
  }
  const onChangeFunction = (event) => {
    console.log(event.target.value);
  }
  const instrumentsList = ["clarinet.", "piano."];
  const instrumentsMap = instrumentsList.map((instruments) => {
  return (
    <p>An instrument I can sort of play is the {instruments}</p>
  )
  });

  console.log(Firebase);
  console.log(Firebase.db);

  return (
    <div className="App">
        <Navbar />
    <div>
      <h1 className="red-text orange-bg">Hi! My name is Yuri.</h1>
        <img src={computer}></img>
    </div>

    <div>
      <button onClick={buttonFunction}>Click me to say hi to console!</button>
    </div>

    <div>
      <h2 className="red-text yellow-bg">Here are some fun facts about me!</h2>   
            <ul className="red-text">
              <li>I like to do a lot of art in my free time.</li>
              <li>My favorite historical figure is Juan Pujol García.</li>
              <li>I'm really craving cheesecake right now.</li>
              <li>I can't think of anything else.</li>
            </ul>
    </div>

    <div>{instrumentsMap}</div>

    <div>
        <h2 className="red-text green-bg">Storytime:</h2>
        <p className="red-text">One time my cat escaped my house and <br></br>I spent over 2 hours trying to chase and catch him.<br></br>I had to crawl underneath cars, go into backyards, <br></br>and basically make a fool of myself the entire time.<br></br>And after all that running around, he <br></br>literally just walked back in the house.<br></br>...I got him back, but at what cost?</p>
    </div>

    <div>
        <h2 className="red-text blue-bg">This is my favorite website right now.</h2>
        <a className="App-link" href="http://colormind.io/"> Colormind generates really cool palettes for you!</a>  
        <p className="red-text">Tell console what you think of it!</p>
    </div>

    <div>
     <input type='text' onChange={onChangeFunction}/>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <Kitty />
    <br></br>
    <br></br>
    <br></br>
    <Mixtape />
    </div>
  );
  }

export default App;
