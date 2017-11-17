import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';
import TabsView from './tabBar';

export default class ContactUs extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  
  _renderHome () {
    return (
      <View style={[styles.container]}>
        <View style={styles.gradientContainer}>
          <Image
            source={require('../assets/images/gradient_bg.jpg')}
            style={styles.gradientBackground}
          />
          <ScrollView>
            <View style={styles.contentWrap}>
              <View style={styles.headerContent}>
                <Text style={styles.h2}>CONTACT US</Text>
                <Text style={styles.h1}>888.400.2101</Text>
              </View>
              <Text style={styles.p}>
                {'\n'}{'\n'}  
                If you are looking for assistance in the aftermath of
              Hurricane Harvey, our team is here to help you however we
              can. As Houstonians, we understand just how devastating
              this storm has been to our community, and we are committed
              to doing everything that we can to help our neighbors recover.
              {'\n'}
                {'\n'}
                To learn more about how we can help with your insurance
              claim, or to talk about your legal options, contact us as soon
              as possible. We look forward to helping you.
              {'\n'}
                {'\n'}
                TEXAS OFFICE{'\n'}
                6009 Memorial Drive{'\n'}
                Houston, TX 77007{'\n'}
                Phone: (888) 400-2101{'\n'}
                Fax: (713) 222-3850{'\n'}{'\n'}
                Get Legal Help with Your Claim{'\n'}
                Let our Texas law firm protect your best interests.
            </Text>
              <Image
                source={require('../assets/images/contact/logo.png')}
                style={{width: 123, height: 62, marginTop: 15, alignSelf: 'center'}}
              />  
            </View>
          </ScrollView>
          <View style={styles.tabs}>
            <TabsView />
          </View>  
        </View>  
    </View> 
    )
  }

   _renderHeader(section) {
    return (
      <View style={[styles.header, styles.accordion]}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  }
 
  _renderContent(section) {
    return (
      <View style={[styles.content, styles.accordion]}>
        {section.content}
      </View>
    );
  }
  
  render() {
    
    return (
        <View style={[styles.container]}>
          { this._renderHome() }
        </View>
    )
  }
}

let headerColor = 'white';
let sourceSansLight = 'Source Sans Pro SemiBold';

const styles = StyleSheet.create({
  gradientContainer: {
    height: '100%'
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    flex: 1
  },
  h1: {
    color: headerColor,
    fontFamily: sourceSansLight,
    fontSize: 50,
    width: '100%',
    alignSelf: 'stretch',
    lineHeight: 50,
    marginTop: -10
  },
  h2: {
    color: headerColor,
    fontFamily: sourceSansLight,
    fontSize: 40,
    alignSelf: 'stretch',
    marginBottom: 5
  },
  p: {
    fontSize: 14,
    color: 'white'
  },
  contentP: {
    marginBottom: 75
  },
  headerContent: {
    paddingTop: 25
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'transparent'
  },
  contentWrap: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 50
  },
})