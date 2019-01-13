import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { CreateDrewerNavigator } from "react-navigation";
import HomeScreen from "./Drewer/HomeScreen";
import SettingsScreen from "./Drewer/SettingsScreen";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerStyle}>
        <Image source={require("../assets/icons/1.png")} style={styles.logoStyle} />
          <Text style={{ fontWeight: 'bold',color: "#FFFFFF", fontSize: 25 ,fontFamily: 'font' ,marginTop: 15, marginLeft: 10}}>Barbie</Text>
      </View>
    );
  }
}

/*const AppDrawer = CreateDrewerNavigator({
  Home:HomeScreen,
  Settings:SettingsScreen,
})*/

const styles = StyleSheet.create({
  headerStyle: {
    display:"flex",
    flexDirection: "row",
    height: 50,
    backgroundColor: "#2D3244",
    marginTop: 20
    },
  logoStyle: {
    marginTop: 5,
    marginLeft: 10
  }

});
