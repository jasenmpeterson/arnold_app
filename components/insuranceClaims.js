import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import TabsView from './tabBar';
import Header from './header'
import SmallButton from './buttonSmall'

export default class InsuranceClaims extends Component {
  
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
          image={require('../assets/images/homeOwner/homeOwner.jpg')}
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
                <Text style={styles.h1}>INSURANCE CLAIMS{'\n'}PROCESS</Text>
            </View>
            </View>
            <View style={{marginBottom: 25, marginTop: 25}}>
              <Text style={styles.p}>First Step:</Text>
              <Text style={styles.p}>Speak with an Insurance Claims Attorney</Text>
            </View>  
            <View>
              <Text style={styles.p}>
              The process for filing a claim should be fairly
              straightforward. First, you call an insurance company to
              report damage to your home. They will either ask you to
              fill out a report or will send an adjuster to assess the damage.
              Once the adjuster finishes up, the insurance company makes
              an offer to cover the damages up to your policy’s limit, and
              you use the money to rebuild your house.{'\n'}{'\n'}
              
              Even if your initial claim is denied, you’d have the chance to
              submit an appeal where you can contest the reason for the
              denial. Failing that, you’d be able to file a civil suit to claim
              all the damages and expenses associated with the hurricane.{'\n'}{'\n'}
              
              In an ideal world, this would be the insurance claims process:{'\n'}
              - File the paperwork{'\n'}
              - Receive a fair offer{'\n'}
              - Use payout to rebuild{'\n'}{'\n'}
              
              Unfortunately, here’s how it will usually go:{'\n'}{'\n'}
              
              #1{'\n'}
              THE ADJUSTER WILL LOW-BALL YOU{'\n'}
              The largest insurance companies use a business model
              that offers an initial settlement significantly lower than
              what you actually deserve. The idea capitalizes on the fact
              that you’re not an expert on property damage, so you’ll
              take the settlement. The catch is that once you accept the
              settlement, that’s it—you’ve waived your right to demand
              more. On the other hand, if you ask for more, your claim
              could be delayed. Insurance companies know most
              residents don’t have the money or time to wait that long.{'\n'}{'\n'}
              
              #2{'\n'}
              YOU’LL FILE AN APPEAL{'\n'}
              (THAT TAKES MONTHS TO RESOLVE){'\n'}
              The letter of appeal is practically a legal document.{'\n'}{'\n'}
              
              It needs to include an argument for why your claim was
              wrongfully denied, as well as evidence. You may need to
              hire independent inspectors, a public adjuster, or other
              professionals to document the damage and provide an
              alternative assessment.{'\n'}{'\n'}
              
              #3{'\n'}
              YOUR APPEAL WILL BE DENIED{'\n'}
              (DESPITE YOUR BEST EFFORTS){'\n'}
              The profits-first business model for large insurance
              providers means making it as expensive as possible for
              you to get full payment for your claim. If they’ve already
              denied your claim once, they’re more likely to deny it a
              second time—forcing you to sue them or give up. The
              key here is to find an attorney who has experience with
              insurance companies for Houston residents.{'\n'}{'\n'}
              
              #4{'\n'}
              YOU TAKE THEM TO COURT & LET THE JURY DECIDE{'\n'}
              Despite their efforts to squash your claim, insurance
              companies don’t want to go to court. They know that a jury
              of your peers will have endured the same exact tragedies as
              the rest of us. We’ve represented countless claims where
              insurance companies played “courtroom chicken” with our 
              clients—only to settle days before trial was scheduled
              to begin.{'\n'}{'\n'}
              
              In the end, insurance companies are used to dealing with
              regular people who are easy to intimidate.{'\n'}{'\n'}
              
              Having an attorney on your side means you won’t scare
              easy—and being Texans means we won’t quit until our
              neighbors get what they need. Arnold & Itkin LLP has won
              billions for our clients against the same insurance companies
              you’re facing now. More importantly, we’re from Houston—
              we’re facing Harvey’s damage same as you. It’s not right
              what the insurance companies are doing to our communities
              and friends, and we’re not going to let them take
              advantage of us.{'\n'}{'\n'}
              
              If you haven’t filed your claim yet, hiring us from the start
              means you’ll have a stronger, more proactive process from
              the get-go. Our team of expert adjusters, damage assessors,
              and seasoned litigators pressure the insurance company to
              handle your claim honestly and quickly—potentially
              resulting in a much higher payout. Learn more about how
              our firm can help you (and the worth of your claim) by
              reaching out to us as soon as possible.
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