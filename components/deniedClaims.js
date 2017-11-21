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

export default class DeniedClaims extends Component {
  
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
            <View style={styles.headerContent}>
                <Text style={styles.h2}>RESIDENTIAL</Text>
                <Text style={styles.h1}>DENIED{'\n'}INSURANCE CLAIMS</Text>
            </View>
            </View>
            <View style={{marginBottom: 25, marginTop: 25}}>
              <Text style={styles.p}>First Step:</Text>
              <Text style={styles.p}>Speak with an Insurance Claims Attorney</Text>
            </View>  
            <View>
              <Text style={styles.p}>
                Harvey left homeowners with massive amounts of
                damage—but maybe you weren’t worried about your own
                claims. After all, you’ve been paying for insurance for years
                to protect you from exactly this type of situation. You simply
                expected to get the payout you were promised when you
                bought the policy. Then the unthinkable happened: Your
                claim was denied. How could that be? How could an
                insurance company deny your claim, and deprive you of
                promised resources at the most desperate moment in your
                life? Don’t they realize you won’t be able to rebuild unless
                they pay your claim? They do realize that. In fact, they’re 
                counting on it. They know that despite having legal options,
                denying a claim is enough to get most people to give up on
                seeking compensation.
                {'\n'}{'\n'}
                #1{'\n'}
                FIND OUT WHY YOUR CLAIM WAS DENIED{'\n'}
                The first step to filing an appeal is countering the reasons
                for the denial.
                {'\n'}{'\n'}
                The common reasons for denial are:{'\n'}
                - Not filed on time{'\n'}
                - Damages are not covered{'\n'}
                - Fraud is suspected{'\n'}
                - Policy limits are met/exceeded{'\n'}
                - Premiums are unpaid{'\n'}
                - Documentation is lacking{'\n'}{'\n'}
                
                #2{'\n'}
                WRITE AN APPEAL LETTER{'\n'}
                Once you know why your claim was denied, you can gather
                documents to prove that you should receive a payout. You
                may have to hire independent contractors and engineers to
                inspect your home and provide counter-evidence that could
                be presented court. The key here is to provide enough
                evidence that the insurance adjuster is forced to settle with
                you, rather than go to court. Unfortunately, gathering this
                evidence may be as mentally-taxing and time-consuming as
                paying for repairs yourself.{'\n'}{'\n'}
                
                Without legal training or experience, gathering the evidence 
                for the letter of appeal can be difficult at best. Furthermore,
                the insurance company has virtually unlimited resources (or
                so they would have you believe). They’re willing to make the
                process incredibly costly for both sides, knowing that you’re
                more likely to give in than they are.{'\n'}{'\n'}
                
                The best solution for this step is to hire an attorney to help
                you with the appeal.{'\n'}{'\n'}
                
                #3{'\n'}
                TAKE THE INSURANCE COMPANY TO COURT{'\n'}
                If the insurance company denies your appeal, then your last
                option is to file a claim against them in civil court. To be frank,
                insurance companies often deny appeals—their job is to limit
                your relief, not give you the maximum compensation you
                deserve. As a result, denying your claim is simply the
                insurance companies’ way of hedging their bets. They are
                betting that you’ll quit after they deny your appeal. If they
                are right, they won’t pay you a dime. If they’re wrong, they
                will likely attempt to settle with you anyway. Our firm has
                settled thousands of claims after threatening to take an
                insurance company to court. Our knowledge of insurance
                tactics has helped us secure billions in verdicts 
                and settlements.
              </Text>
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
let sourceSansLight = 'Source Sans Pro SemiBold';

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
    paddingRight: 30,
    paddingBottom: 30
  }
})