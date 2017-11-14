import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import TabsView from './tabBar'

class Landing extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  
  componentDidMount () {
    return axios.get('http://192.168.0.238:9999/wp-json/wp/v2/pages/')
        .then((response) => {
          let ds = response;
          this.setState({
            isLoading: false,
            dataSource: ds
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
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text onPress={Actions.homeOwner}>Home Owner</Text>
          <Text onPress={Actions.businessOwner}>Business Owner</Text>
        </View>
        <TabsView/>
      </View>
    );
    
  }
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'space-between'
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3
  }
})

module.exports = Landing