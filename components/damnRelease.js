import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  ScrollView
} from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import TabsView from './tabBar';
import Loader from './loading';
import ButtonSlim from './buttonSlim';
import Header from './header'
import SmallButton from './buttonSmall'

export default class DamnRelease extends Component {

  
  _renderHome () {
    return (
      <View style={[styles.container]}>
        <ScrollView>
          <Header
            subtitle={'HELPING HOMEOWNERS RECOVER AFTER'}
            title={'HURRICANE HARVEY'}
            image={require('../assets/images/homeOwner/homeOwner.jpg')} 
          />
          <View style={{flexDirection: 'row'}}>
            <SmallButton
              text={'GET ANSWERS'}
              action={Actions.faq}
            />
            <SmallButton
              text={'NEED HELP TO FILE A CLAIM'}
              action={Actions.contactUs}
            />
          </View>  
          <View style={styles.contentWrap}>
            <View style={styles.headerContent}>
              <Text style={styles.h2}>RESIDENTIAL</Text>
              <Text style={styles.h1}>DAM RELEASE{'\n'}FLOOD CLAIMS</Text>
            </View>  
            <View style={{marginBottom: 25, marginTop: 25}}>
              <Text style={styles.p}>
                The San Jacinto River Basin contains multiple floodplains
                that put hundreds of thousands of Texas home at risk
                including tens of thousands in the greater Houston area, the
                fastest growing region in the United States. Despite officials
                knowing about the risks of putting housing developments in
                places like Buffalo Bayou or below Lake Conroe, unregulated
                housing development allowed hundreds of thousands of
                homeowners to settle in the path of flood runoff. When flood
                management officials allowed for “controlled releases” during
                Harvey, it robbed tens of thousands of homeowners of their
                livelihoods and financial stability.
                {'\n'}
                {'\n'}
                Controlled releases are legally sanctioned when reservoir
                levels exceed a certain height or put the structural integrity of
                the dam at risk—but not before that point. The U.S. Army Corps
                of Engineers have an ethical obligation to consider the
                homeowners in the path of the controlled release. Runoff from
                the upper part of the river can magnify the impact of any
                storm—allowing a 10-year storm to flood homes like a 100-year
                storm simply through overflow.
                {'\n'}
                {'\n'}
                When officials facilitate a controlled release without any
                thought to communities downriver, even a routine storm
                becomes a catastrophe. During Harvey, runoff caused homes
                to completely detach from their foundations, teeter on the
                edge of sinkholes, and even become contaminated.
                Controlled releases “aggravate the flooding.” During a storm
                like Harvey, that’s no small thing.            
                {'\n'}
                {'\n'}
              </Text>
              <View style={styles.damnRelease}>
                <Text style={styles.damnReleaseContent}>
                  Affected by the {'\n'}Controlled Release{'\n'}of the Dams?
                  {'\n'}
                </Text> 
                <Text style={styles.damnReleaseContent}>Releasing water from the reservoirs caused unthinkable damage. Let us stand up and fight for you.</Text>
              </View>
            </View>
          </View> 
          <View style={styles.googleMap}>
            <View style={styles.googleMapImage}>
              <Image
                source={require('../assets/images/google_map.jpg')}
              />
            </View>
          </View>
          <View style={styles.tabs}>
            <TabsView />
          </View>  
        </ScrollView>
    </View> 
    )
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
    content: {
        zIndex: 2
    },
    contentWrap: {
        zIndex: 2,
        paddingLeft: 30,
        paddingRight: 30
    },
    contentWrapLast: {
        marginTop: 30,
        marginBottom: 30
    },
    damnRelease: {
        backgroundColor: '#343434',
        padding: 20,
        marginTop: 10
    },
    damnReleaseContent: {
        color: 'white'
    },
    googleMap: {
        height: 270,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: -45,
        zIndex: 1
    },
    googleMapImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        flex: 1
    },
    googleMapButtonContainer: {
        width: '80%'
    },
    tabs: {
        justifyContent: 'flex-end'
    }
})