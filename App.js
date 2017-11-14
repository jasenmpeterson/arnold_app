import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';
import configureStore from './store/configureStore';
const store = configureStore();
import Landing from './components/landing';
import Home from './components/home';
import InsuranceClaims from './components/insuranceClaims';
import CommercialClaims from './components/commercialClaims';
import FAQ from './components/faq'
import Contact from './components/contactUs';
import BusinessOwner from './components/businessOwner'
import HomeOwner from './components/homeOwner';

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    return defaultReducer(state, action);
  };
};

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
              />
              <Scene
                  key="homeOwner"
                  component={HomeOwner}
                  title="Home Owner"
              />
              <Scene
                  key="businessOwner"
                  component={BusinessOwner}
                  title="Business Owner"
              />
              <Scene
                  key="insuranceClaims"
                  component={InsuranceClaims}
                  title="Insurance Claims"
              />
              <Scene
                  key="commercialClaims"
                  component={CommercialClaims}
                  title="Commercial Claims"
              />
              <Scene
                  key="home"
                  component={Home}
                  title="Home"
              />
              <Scene
                  key="faq"
                  component={FAQ}
                  title="Common Questions"
              />
              <Scene
                  key="contactUs"
                  component={Contact}
                  title="Contact Us"
              />
            </View>
          </Provider>
        </Router>
    )
  }
}