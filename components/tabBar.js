import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  ViewPropTypes,
  Image,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const propTypes = {
  name: PropTypes.string,
  sceneStyle: ViewPropTypes.style,
  title: PropTypes.string
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
    height: 70
  },
  cells: {
    width: '20%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#EFEFEF'
  },
  textStyles: {
    textAlign: 'center',
    fontSize: 10,
    color: '#BFBFBF'
  },
  homeButton: {
    flexGrow: 0,
    flexShrink: 10,
    flexBasis: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cellInner: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingTop: 7,
    paddingBottom: 7
  },
  icon: {
    width: 22,
    height: 18
  },
  homeIcon: {
    width: 40,
    height: 38
  },
  faqIcon: {
    width: 18,
    height: 25
  },
  buildingIcon: {
    width: 18,
    height: 21
  }
});

class TabView extends React.Component {
  render () {
    return (
      <View style={[styles.container, this.props.sceneStyle]}>
        <View style={styles.cells}>
          <View style={styles.cellInner}>
            <TouchableHighlight onPress={Actions.insuranceClaims}>
              <View style={styles.cellInner}>
                <Image style={styles.icon} source={require('../assets/images/tabs/umbrella.png')} />  
                <Text style={styles.textStyles}>INSURANCE {'\n'} CLAIMS</Text>   
              </View>   
            </TouchableHighlight>    
          </View>  
        </View>
        <View style={styles.cells}>
          <View style={styles.cellInner}>
            <TouchableHighlight onPress={Actions.commercialClaims}>
              <View style={styles.cellInner}>
                <Image style={styles.buildingIcon} source={require('../assets/images/tabs/building.png')} />    
                <Text style={styles.textStyles}>COMMERCIAL{'\n'}CLAIMS</Text>
              </View>  
            </TouchableHighlight>     
          </View>  
        </View>
        <View style={[styles.cells, styles.homeButton]}>
          <View style={styles.cellInner}>
            <TouchableHighlight onPress={Actions.home}>
              <View style={styles.cellInner}>
                <Image style={styles.homeIcon} source={require('../assets/images/tabs/logo.png')} /> 
              </View>     
            </TouchableHighlight>
          </View>  
        </View>
        <View style={styles.cells}>
          <View style={styles.cellInner}>
            <TouchableHighlight onPress={Actions.faq}>
              <View style={styles.cellInner}>
                <Image style={styles.faqIcon} source={require('../assets/images/tabs/faq.png')} />  
                <Text style={styles.textStyles}>FAQS</Text>
              </View>  
            </TouchableHighlight>    
          </View>  
        </View>
        <View style={styles.cells}>
          <View style={styles.cellInner}>
            <TouchableHighlight onPress={Actions.contactUs}>
              <View style={styles.cellInner}>
                <Image style={styles.icon} source={require('../assets/images/tabs/phone.png')} />  
                <Text style={styles.textStyles}>CONTACT {'\n'} US</Text>
              </View>  
            </TouchableHighlight>    
          </View>  
        </View>
      </View>
    )
  }
}

TabView.propTypes = propTypes;

export default TabView;