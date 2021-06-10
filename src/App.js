import React from 'react';
import Header from './Component/Header';
import "./Component/Header";
import "./Component/Header.css";
import "./Component/cover.css";
import "./Component/Name.css";
import "./Component/Header2.css";


import Cover from './Component/Cover';
import Name from './Component/Name';
import Header2 from './Component/Header2';
import Post from './Component/Post';
function App() {
  return (
    <div className="App">
        <Header/>
        <Cover/>
        <Name/>
        <Header2/>
        <Post/>
    </div>
  );
}

export default App;
