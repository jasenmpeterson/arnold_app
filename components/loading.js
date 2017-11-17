import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
  
export default class Loader extends Component {
    _renderLoader() {
        return (
            <Text>Loading</Text>  
        )
    }
    render () {
        return (
            <View style={styles.loader}>
                { this._renderLoader() }     
            </View>
        )
    }
}


const styles = StyleSheet.create({
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})