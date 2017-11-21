import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  TouchableHighlight
} from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import Loader from './loading'

class Landing extends Component {
  
  
  render () {
    
    return (
      <TouchableHighlight style={styles.container} onPress={Actions.home}>
        <View style={styles.container}>
            <View style={styles.backGroundContainer}>
              <Image
                  style={styles.backgroundImage}
                  source={require('../assets/images/splash/splash-page-background.jpg')}
              />
            </View>
          <View style={styles.contentContainer}>
              <Text style={styles.h2}>HELPING VICTIMS OF</Text>
              <Text style={styles.h1}>HURRICANE HARVEY</Text>
            </View>
          </View>
        </TouchableHighlight>
    );
    
  }
  
}

let headerColor = '#FFFFFF';
let sourceSansLight = 'Source Sans Pro Light';
let sourceSans = 'Source Sans Pro Semibold';

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1: {
    color: headerColor,
    fontFamily: sourceSans,
    fontSize: 30,
    textAlign: 'center',
    width: '100%'
  },
  h2: {
    color: headerColor,
    fontFamily: sourceSans,
    fontSize: 16
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'space-between'
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3
  },
  backGroundContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: 549
  }
})

module.exports = Landing