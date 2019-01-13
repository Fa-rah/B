import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TextInput } from 'react-native';
import { Component } from 'react';
import Header from './components/header';
import CustomersList from './components/customersList';
import {
  DrawerNavigator,
  StackNavigator,
  DrawerItems,
  SafeAreaView,
} from 'react-navigation';

class App extends Component {
  render() {
    return (
      <View

      
        /*key={this.props.keyval} */
        style={{ flex: 1, backgroundColor: '#2D3244' }}>
        <Header />

        <CustomersList />
      </View>
    );
  }
}
export default App;
