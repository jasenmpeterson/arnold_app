import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import TabsView from './tabBar';
import Header from './header';

let content = 
<Text style={{fontSize: 14, color: '#95989A'}}>
  Your first step is to understand the reason your claim
  was denied. Adjusters are required to provide an
  explanation for the denial. In most cases, the denial
  notice will come with the relevant excerpt from your
  policy to highlight why. {'\n'}
  {'\n'}Most common reasons for denial of a claim are:{'\n'}
  - Not Filed on Time{'\n'}
  - Damages not covered{'\n'}
  - Fraud is suspected{'\n'}
  - Policy limits are met/exceeded{'\n'}
  - Premiums are unpaid{'\n'}
  - Documentation is lacking{'\n'}{'\n'}
  Once you know why your claim was denied, you can
  appeal the decision in a letter. The letter needs to
  include new evidence or paperwork that would justify
</Text>

const SECTIONS = [
  {
    title: 'What are my rights as an insured party?',
    content: content,
  },
  {
    title: 'How much are my losses worth?',
    content: content,
  },
  {
    title: 'Why is my claim taking so long?',
    content: content,
  },
  {
    title: 'What if I had coverage but was still denied?',
    content: content,
  }
];

export default class FAQ extends Component {
  
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
          <Header
            subtitle={'THINKING ABOUT FILING A CLAIM?\nGET ALL OF YOUR QUESTIONS ANSWERED HERE'}
            title={'COMMON QUESTIONS'}
            image={require('../assets/images/homeOwner/homeOwner.jpg')} 
          />
          <Accordion
            sections={SECTIONS}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
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
    tabs: {
        justifyContent: 'flex-end'
    },
    accordion: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 20,
      paddingBottom:20
    },
    header: {
      borderBottomWidth: 1,
      borderBottomColor: '#DDDDDD'
    }
})