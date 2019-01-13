import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default class Customers extends Component {
  render() {

    return (
      <View key={this.props.keyval}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#e9e9e9',
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
            {this.props.val.customer}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
            <TouchableOpacity
              onPress={this.props.doneMethod}
              style={{
                backgroundColor: '#2D3244',
                marginLeft: 145,
                width: 75,
                height: 25,
                borderRadius: 5,
                marginBottom: 5,
              }}>
              <Text
                style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>
                Done
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#2D3244',
                marginLeft: 145,
                width: 75,
                height: 25,
                borderRadius: 5,
              }}>
              <Text
                style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}