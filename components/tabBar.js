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
  title: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 30
  },
  cells: {
    width: '20%',
    display: 'flex',
    alignItems: 'center',
  },
  textStyles: {
    textAlign: 'center'
  }
});

class TabView extends React.Component {
  render () {
    return (
      <View style={[styles.container, this.props.sceneStyle]}>
        <View style={styles.cells}>
          <Text style={styles.textStyles} adjustsFontSizeToFit={true} numberOfLines={2} onPress={Actions.insuranceClaims}>Insurance Claims</Text>
        </View>
        <View style={styles.cells}>
          <Text style={styles.textStyles} adjustsFontSizeToFit={true} numberOfLines={2} onPress={Actions.commercialClaims}>Commercial Claims</Text>
        </View>
        <View style={styles.cells}>
          <Text style={styles.textStyles} adjustsFontSizeToFit={true} numberOfLines={1} onPress={Actions.home}>Home</Text>
        </View>
        <View style={styles.cells}>
          <Text style={styles.textStyles} adjustsFontSizeToFit={true} numberOfLines={1} onPress={Actions.faq}>FAQS</Text>
        </View>
        <View style={styles.cells}>
          <Text style={styles.textStyles} adjustsFontSizeToFit={true} onPress={Actions.contactUs}>Contact {'\n'} Us</Text>
        </View>
      </View>
    )
  }
}

TabView.propTypes = propTypes;

export default TabView;