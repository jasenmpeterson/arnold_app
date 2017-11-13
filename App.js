import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore();
const RouterWithRedux = connect()(Router);

import Landing from './components/landing';
import Home from './components/home';

const TabIcon = ({ selected, title}) => {
  return (
      <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
  )
}


export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <RouterWithRedux>
            <Scene key="root">
              <Scene key="landing" component={Landing} title="Landing" initial={true}/>
              <Scene
                  key="rootTabBar"
                  tabs={true}
                  tabBarStyle={{backgroundColor: '#ffffff'}}>
                <Scene key="home" component={Home} title="Home" icon={TabIcon} initial />
              </Scene>
            </Scene>
          </RouterWithRedux>
        </Provider>
    
    )
  }
}

const styles = StyleSheet.create({
  tarBarStyle: {
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
  }
})