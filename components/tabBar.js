import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  ViewPropTypes
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const propTypes = {
  name: PropTypes.string,
  sceneStyle: ViewPropTypes.style,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'red',
  },
});

class TabView extends React.Component {
  render () {
    return (
      <View style={[styles.container, this.props.sceneStyle]}>
        <Text onPress={Actions.insuranceClaims}>Insurance Claims</Text>
        <Text onPress={Actions.commercialClaims}>Commercial Claims</Text>
        <Text onPress={Actions.home}>Home</Text>
        <Text onPress={Actions.faq}>FAQS</Text>
        <Text onPress={Actions.contactUs}>Contact Us</Text>
      </View>
    )
  }
}

TabView.propTypes = propTypes;

export default TabView;