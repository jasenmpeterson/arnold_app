import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
  _renderHome () {
    if (Actions.currentScene === 'customNavBar1') {
      return (
          <View style={[styles.container]}>
          <Text>Home</Text>
          </View>
      )
    }
  }
  
  render () {
    return (
        <View style={[styles.container]}>
          { this._renderHome() }
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bb0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  }
})