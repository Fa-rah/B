import React, { Component } from 'react';
import { Font } from 'expo';

export default class Fonts extends Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      font: require('./fonts/Montserrat-Medium.ttf'),
      font1: require('./fonts/Montserrat-Regular.ttf'),
      font2: require('./fonts/bank gothic light bt.ttf'),
    });

    this.setState = { fontLoaded: true };
  }
}