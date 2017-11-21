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

export default class HomeOwner extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  
  _renderHome () {
    return (
      <View style={[styles.container]}>
        <Header
          subtitle={'HELPING HOMEOWNERS RECOVER AFTER'}
          title={'HURRICANE HARVEY'}
          image={require('../assets/images/home/homeOwner.jpg')}
        />
        <View style={{ alignItems: 'center', alignSelf: 'stretch', zIndex: 2, marginTop: -30 }}>
          <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-around', alignItems: 'center' }}>
            <SmallButton
              text={'GET ANSWERS'}
              action={Actions.faq}
            />
            <SmallButton
              text={'NEED HELP TO FILE A CLAIM'}
              action={Actions.contactUs}
            />
          </View>
        </View>    
        <ScrollView>
          <View style={styles.contentWrap}>
            <View style={styles.headerContent}>
              <Text style={styles.h2}>RESIDENTIAL</Text>
              <Text style={styles.h1}>HARVEY{'\n'}INSURANCE CLAIMS</Text>
            </View>
            <View style={{marginBottom: 25, marginTop: 25}}>
              <Text style={styles.p}>We Are Texans.</Text>
              <Text style={styles.p}>Helping Each Other Is What We Do.</Text>
            </View>  
            <View>
              <Text style={styles.p}>
                In August 2017, Harvey made landfall off the Gulf Coast in
                Texas. Within only a few days, the massive storm poured
                over 9 trillion gallons of water on Houston and surrounding
                areas, causing the reservoirs, river banks, and floodplains
                and basins to fill to unprecedented levels. Tens of thousands
                of homes were flooded or damaged; hundreds of thousands
                of people were displaced. When people returned to their
                homes, many of them were left with nothing—no homes, no
                cars, few belongings of any kind. For most of them, their
                expected insurance payment would be all that would
                separate them from total ruin.
                {'\n'}
                {'\n'}
                That's when the nightmare really started.
                {'\n'}
                {'\n'}
              </Text>
              <ButtonSlim
                text={'HAVEN\'T SUBMITTED A CLAIM?'}
                image={require('../assets/images/home/homeOwner.jpg')}
                action={Actions.insuranceClaims}
              />
              <ButtonSlim
                text={'HAVING TROUBLE WITH INSURANCE?'}
                image={require('../assets/images/home/businessOwner.jpg')}  
                action={Actions.deniedClaims}
              />
              <View style={styles.damnRelease}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
                  <Text style={styles.damnReleaseContent}>
                    Affected by the {'\n'}Controlled Release{'\n'}of the Dams?
                    {'\n'}
                  </Text>
                  <View style={styles.faqIcon}>
                    <Image
                      source={require('../assets/images/faq/icon.png')}
                      style={{width: 52, height:58}}
                    />
                  </View>
                </View>
                <Text style={styles.damnReleaseContent}>Releasing water from the reservoirs caused unthinkable damage. Let us stand up and fight for you.</Text>
              </View>
            </View>
          </View> 
          <View style={styles.googleMap}>
            <View style={styles.googleMapImage}>
              <Image
                style={{resizeMode: 'cover', width: '100%'}}  
                source={require('../assets/images/google_map.jpg')}
              />
            </View>
            <View style={styles.googleMapButtonContainer}>
              <ButtonSlim
                text={'LEARN OPTIONS AVAILABLE TO YOU'}
                image={require('../assets/images/home/homeOwner.jpg')}
                action={Actions.damnRelease}
              />
            </View>  
          </View>
          <View style={[styles.contentWrap, styles.contentWrapLast]}>
            <Text style={styles.p}>Want to know what happens next?</Text>
            <Text style={styles.p}>Let us guide you every step of the way.</Text>
            <Text style={styles.p}>
              {'\n'}
              {'\n'}  
              If you’re unsure of where to turn or what you need to know,
              let our site be your guide. We’ve put together some of the
              most important information about insurance claims—why
              claims take so long, what you can do to expedite the process,
              the tactics insurance companies use to pressure you into
              accepting settlements, and what you can do to level the
              playing field. Use our site as a resource: file claims, ask
              questions, become informed. We’ll keep you updated on the
              latest developments regarding insurance law while making
              sure that you understand every aspect of what is going on
              with your claim. When you’re ready to work with us, we’ll be
              here—ready to hold your insurance company accountable
              for the way they treat you.
            </Text>
            <View style={{width: '80%', marginTop: 25, alignSelf: 'center'}}>
              <ButtonSlim
                text={'UNDERSTANDING THE\nINSURANCE CLAIMS PROCESS'}
                image={require('../assets/images/home/businessOwner.jpg')}  
                action={Actions.insuranceClaims}
              />
            </View>    
          </View> 
        </ScrollView>
        <View style={styles.tabs}>
          <TabsView />
        </View>  
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
let sourceSans= 'Source Sans Pro SemiBold';

const styles = StyleSheet.create({
  h1: {
    color: headerColor,
    fontFamily: sourceSans,
    fontSize: 30,
    width: '100%',
    alignSelf: 'stretch',
    lineHeight: 30
  },
  h2: {
    color: headerColor,
    fontFamily: sourceSans,
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
    paddingLeft: 45,
    paddingRight: 45
  },
  contentWrapLast: {
    marginTop: 30,
    marginBottom: 30
  },
  damnRelease: {
    backgroundColor: '#343434',
    padding: 20,
    marginTop: 30
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
    marginTop: -25,
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
  }
})