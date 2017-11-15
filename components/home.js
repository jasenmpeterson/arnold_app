import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import TabsView from './tabBar';

export default class Home extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  
  componentDidMount () {
    return axios.get('http://192.168.0.238:9999/wp-json/wp/v2/pages/11')
        .then((response) => {
          let ds = response;
          this.setState({
            isLoading: false,
            dataSource: ds.data
          });
        })
        .catch((error) => {
          console.warn(error);
        });
  }
  
  _renderHome () {
    return (
        <View style={[styles.container]}>
          <View style={styles.contentWrap}>
            <View style={styles.headerContent}>
              <Text style={styles.h2}>{this.state.dataSource.acf.sub_title.toUpperCase()}</Text>
              <Text style={styles.h1}>{this.state.dataSource.acf.title.toUpperCase()}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.p}>{this.state.dataSource.acf.content}</Text>
              <TouchableHighlight style={styles.buttons}>
                <View>
                  <Text style={styles.buttonsText} onPress={Actions.homeOwner}>Home Owner</Text>
                  <Text style={styles.buttonsText} onPress={Actions.businessOwner}>Business Owner</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.tabs}>
            <TabsView/>
          </View>
        </View>
    )
  }
  
  render () {
    
    if (this.state.isLoading) {
      return (
          <View><Text>Loading...</Text></View>
      )
    }
    
    return (
        <View style={[styles.container]}>
          { this._renderHome() }
        </View>
    )
  }
}

let headerColor = '#175492';
let sourceSansLight = 'Source Sans Pro Light';

const styles = StyleSheet.create({
  h1: {
    color: headerColor,
    fontFamily: sourceSansLight,
    fontSize: 30,
    width: '100%',
    textAlign: 'center',
    alignSelf: 'stretch'
  },
  h2: {
    color: headerColor,
    fontFamily: sourceSansLight,
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'stretch'
  },
  p: {
    fontSize: 14,
    color: '#95989A',
    textAlign: 'left'
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    alignSelf: 'stretch'
  },
  contentWrap: {
    flex: 1
  },
  headerContent: {
    flex: 2,
    justifyContent: 'flex-end'
  },
  content: {
    flex: 2,
    marginTop: 30
  },
  tabs: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  buttons: {
    backgroundColor: '#175492'
  },
  buttonsText: {
    color: '#FFFFFF'
  }
})