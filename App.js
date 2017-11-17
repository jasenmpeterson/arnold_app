import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  View
} from 'react-native';
import {
  Scene,
  Router,
  Reducer
} from 'react-native-router-flux';
import configureStore from './store/configureStore';
import Landing from './components/landing';
import Home from './components/home';
import InsuranceClaims from './components/insuranceClaims';
import CommercialClaims from './components/commercialClaims';
import FAQ from './components/faq'
import Contact from './components/contactUs';
import BusinessOwner from './components/businessOwner'
import HomeOwner from './components/homeOwner';
import DamnRelease from './components/damnRelease';
import DeniedClaims from './components/deniedClaims'

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    return defaultReducer(state, action);
  };
};

const store = configureStore();

export default class App extends Component {
  render() {
    return (
        <Router createReducer={reducerCreate}>
          <Provider store={store}>
            <View>
              <Scene
              key="landing"
              component={Landing}
              title="Landing"
              initial
              hideNavBar={true}
              />
              <Scene
              key="homeOwner"
              component={HomeOwner}
              title="Home Owner"
              hideNavBar={true}
              />
              <Scene
              key="businessOwner"
              component={BusinessOwner}
              title="Business Owner"
              hideNavBar={true}
              />
              <Scene
              key="insuranceClaims"
              component={InsuranceClaims}
              title="Insurance Claims"
              hideNavBar={true}
              />
              <Scene
              key="commercialClaims"
              component={CommercialClaims}
              title="Commercial Claims"
              hideNavBar={true}
            />
                <Scene
                key="deniedClaims"
                component={DeniedClaims}
                title="Denied Claims"
                hideNavBar={true}
              />
              <Scene
                key="damnRelease"
                component={DamnRelease}
                title="Damn Release"
                hideNavBar={true}
              />
              <Scene
              key="home"
              component={Home}
              title="Home"
              hideNavBar={true}
              />
              <Scene
              key="faq"
              component={FAQ}
              title="Common Questions"
              hideNavBar={true}
              />
              <Scene
              key="contactUs"
              component={Contact}
              title="Contact Us"
              hideNavBar={true}
              />
            </View>
          </Provider>
        </Router>
    )
  }
}