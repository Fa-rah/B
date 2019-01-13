import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Customer from './customer';

export default class CustomerSer extends Component {

  state = {
    toggle: false,
  };

  _onPress() {
    const newState = !this.state.toggle;
    this.setState({ toggle: newState });
  }
  render() {
    const { toggle } = this.state;
    const colorValue = toggle ? '#e9e9e9' : 'rgba(233, 233, 233, 0.3)';
    const TextValue = toggle ? 'Done' : 'Accept';

    return (

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: colorValue,
          height: 70,
          padding: 10,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 10,
          alignItems: 'center',
          margin: 5,
        }}>
        <Image
          source={require('../assets/icons/2.png')}
          style={{
            height: 50,
            width: 50,
            marginRight: 10,
          }}
        />
        <Text style={{ fontSize: 20, fontFamily: 'font1' }}>
John Doe
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          <TouchableOpacity
            onPress={()=>this._onPress()}
            style={{
              backgroundColor: '#2D3244',
              marginLeft: 115,
              width: 75,
              height: 25,
              borderRadius: 5,
              marginBottom: 5,
            }}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>
              {TextValue}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>this._onPress()}
            style={{
              backgroundColor: '#2D3244',
              marginLeft: 115,
              width: 75,
              height: 25,
              borderRadius: 5,
            }}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>
            Decline
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
