import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import TabsView from './tabBar';
import Loader from './loading';
import Button from './button';

export default class Home extends Component {
  
  _renderHome () {
    return (
      <View style={[styles.container]}>
        <View style={styles.contentWrap}>
          <View style={styles.headerContent}>
            <Text style={styles.h2}>HELPING VICTIMS OF</Text>
            <Text style={styles.h1}>HURRICANE HARVEY</Text>
          </View>
          <View style={styles.content}>
            <Text style={[styles.p, styles.contentP]}>Who has been affected?</Text>
            <Button
              text={'HOME OWNER'}
              image={require('../assets/images/home/homeOwner.jpg')}
              action={Actions.homeOwner}
            />
            <Button
              text={'BUSINESS OWNER'}
              image={require('../assets/images/home/businessOwner.jpg')}  
              action={Actions.businessOwner}
            />
          </View>
        </View> 
        <View style={styles.tabs}>
          <TabsView />
        </View>
      </View>
    )
  }
  
  render () {
    
    return (
        <View style={[styles.container]}>
          { this._renderHome() }
        </View>
    )
  }
}

let headerColor = '#175492';
let sourceSansLight = 'Source Sans Pro Light';
let sourceSans = 'Source Sans Pro Semibold';

const styles = StyleSheet.create({
  h1: {
    color: headerColor,
    fontFamily: sourceSans,
    fontSize: 30,
    width: '100%',
    textAlign: 'center',
    alignSelf: 'stretch'
  },
  h2: {
    color: headerColor,
    fontFamily: sourceSans,
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'stretch'
  },
  p: {
    fontSize: 14,
    color: '#95989A',
    textAlign: 'center'
  },
  contentP: {
    marginBottom: 75
  },
  headerContent: {
    paddingTop: 75
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  content: {
    marginBottom: 75
  }
})