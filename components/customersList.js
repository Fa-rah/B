import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  TextInput,
} from 'react-native';
import CustomerSer from './customerSer';
import Customer from './customer';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerArray: [],
      customerName: '',
    };
  }

  render() {
    let customers = this.state.customerArray.map((val, key) => {
      return (
        <Customer
          key={key}
          keyval={key}
          val={val}
          doneMethod={() => this.doneCastomer(key)}
        />
      );
    });
    return (
      <View>
        <View
          style={{
            width: 350,
            height: 35,
            alignSelf: 'center',
            alignItems: 'center',
            marginBottom: 5,
            marginTop: 5,
            flexDirection: 'row',
            borderRadius: 15,
            backgroundColor: '#2D3244',
            borderColor: '#e9e9e9',
            borderWidth: 2,
          }}>
          <TextInput
            onChangeText={customerName => this.setState({ customerName })}
            value={this.state.customerName}
            style={{
              flex: 2,
              fontSize: 22,
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 7,
            }}
            placeholder="Enter customer name"
            placeholderTextColor="white"
            fontSize="18"
          />

          <TouchableOpacity
            onPress={this.addCustomer.bind(this)}
            style={{
              backgroundColor: '#e9e9e9',
              width: 75,
              height: 35,
              borderRadius: 5,
              borderTopRightRadius: 15,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 15,
            }}>
            <Text
              style={{
                flex: 1,
                fontSize: 18,
                color: '#2D3244',
                fontWeight: 'bold',
                alignSelf: 'center',
                marginTop: 6,
              }}>
              Add
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <CustomerSer />

          {customers}
        </ScrollView>
      </View>
    );
  }
  addCustomer() {
    if (this.state.customerName) {
      this.state.customerArray.push({
        customer: this.state.customerName,
      });

      this.setState({ customerArray: this.state.customerArray });
      this.setState({ customerName: '' });
    }
  }

  doneCastomer(key) {
    this.state.customerArray.splice(key, 1);
    this.setState({ customerArray: this.state.customerArray });
  }
}
