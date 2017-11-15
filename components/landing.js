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

class Landing extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  
  componentDidMount () {
    return axios.get('http://192.168.0.238:9999/wp-json/acf/v3/options/options')
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
  
  render () {
  
    if (this.state.isLoading) {
      return (
          <View><Text>Loading...</Text></View>
      )
    }
    
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
              <Text style={styles.h2}>{this.state.dataSource.acf.splash_page_sub_title.toUpperCase()}</Text>
              <Text style={styles.h1}>{this.state.dataSource.acf.splash_page_title.toUpperCase()}</Text>
            </View>
          </View>
        </TouchableHighlight>
    );
    
  }
  
}

let headerColor = '#FFFFFF';
let sourceSansLight = 'Source Sans Pro Light';

const styles = StyleSheet.create({
  h1: {
    color: headerColor,
    fontFamily: sourceSansLight,
    fontSize: 30,
    textAlign: 'center',
    width: '100%'
  },
  h2: {
    color: headerColor,
    fontFamily: sourceSansLight,
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
    height: '100%'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: 375,
    height: 549
  }
})

module.exports = Landing