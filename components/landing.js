import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import TabsView from './tabBar'

class Landing extends Component {
  
  render () {
    
    return (
      <View style={styles.outerContainer}>
        <Text onPress={Actions.homeOwner}>Home Owner</Text>
        <Text onPress={Actions.businessOwner}>Business Owner</Text>
        <TabsView/>
      </View>
    );
    
  }
  
}


const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1
  }
})

module.exports = Landing