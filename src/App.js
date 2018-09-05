import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PlayHeader from  './components/PlayHeader';
import Status from  './components/Status';
import VolumeBar from  './components/VolumeBar';
import SeekBar from  './components/SeekBar';

class ContraMusicPlayer extends Component {
  constructor(props) {
    super(props);

    var Highcharts = require('highcharts');
    require('highcharts/modules/funnel')(Highcharts);

    this.state = {
      volume: 70,
      status: 'pause'
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <PlayHeader type="Play Header">
            <Status/>
            <VolumeBar/>
            <SeekBar/>
          </PlayHeader>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

  // componentDidMount() {
  //   // fetch('https://api.highcharts.com/highcharts/tree.json');

  //   if (this.props.modules) {
  //     this.props.modules.forEach(function (module) {
  //         module(Highcharts);
  //     });
  //   }

  //   // Set container which the chart should render to.
  //   this.chart = new Highcharts[this.props.type || "Chart"](
  //     this.props.container, 
  //     this.props.options
  //   );
  // }
}

ContraMusicPlayer.defaultProps = {
  theme: 'dark'
};

export default ContraMusicPlayer;