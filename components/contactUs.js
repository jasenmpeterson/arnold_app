import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
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
        <ScrollView>
          <View style={styles.contentWrap}>
            <View style={styles.headerContent}>
              <Text style={styles.h2}>CONTACT US</Text>
              <Text style={styles.h1}>888.400.2101</Text>
            </View>
            <Text style={styles.p}>
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
          </View>
          <View style={styles.tabs}>
            <TabsView />
          </View>  
        </ScrollView>
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

let headerColor = '#175492';
let sourceSansLight = 'Source Sans Pro Light';

const styles = StyleSheet.create({
  h1: {
    color: headerColor,
    fontFamily: sourceSansLight,
    fontSize: 30,
    width: '100%',
    alignSelf: 'stretch',
    lineHeight: 30
  },
  h2: {
    color: headerColor,
    fontFamily: sourceSansLight,
    fontSize: 16,
    alignSelf: 'stretch',
    marginBottom: 5
  },
  p: {
    fontSize: 14,
    color: '#95989A'
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
    backgroundColor: 'white'
  },
  contentWrap: {
    paddingLeft: 30,
    paddingRight: 30
  },
})