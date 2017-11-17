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

let style = StyleSheet.create({
    
})

export default SmallButton;