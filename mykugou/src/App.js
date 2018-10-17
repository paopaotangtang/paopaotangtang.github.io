import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import "./App.css";
import "./views/views.css";
import Header from "./component/header/header";
import Routes from "./views/Routes";
import Musicplay from "../src/component/musicplay";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className = "content">
          <Routes/>
          <Musicplay />
        </div>
      </div>
    );
  }
}

export default App;
