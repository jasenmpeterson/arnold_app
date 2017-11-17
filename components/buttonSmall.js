import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

class SmallButton extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired
    }

    render = () => {
        const {
            text,
            action
        } = this.props;
        return (
            <TouchableHighlight style={style.buttonStyles} onPress={action}>
                <View style={style.wrap}>
                    <View style={style.buttonContentStyles}>
                        <Text style={style.buttonTextStyles}>{text}</Text>
                    </View>               
                </View>        
            </TouchableHighlight>   
        )
    }
}

let sourceSans = 'Source Sans Pro Semibold';

let style = StyleSheet.create({
    buttonContentStyles: {
        borderWidth: 1,
        borderColor: '#175492',
        padding: 3,
        backgroundColor: 'white'
    },
    buttonTextStyles: {
        color: '#175492',
        fontFamily: sourceSans,
        textAlign: 'center'
    }
})

export default SmallButton;