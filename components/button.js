import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

class Button extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        image: PropTypes.number
    }

    render = () => {
        const {
            text,
            image,
            action
        } = this.props;
        return (
            <TouchableHighlight style={style.buttonStyles} onPress={action}>
                <View style={style.wrap}>
                    <View>
                        <Image
                            style={style.buttonBackgroundImageStyles}    
                            source={image}
                        />
                        <View style={style.buttonContentStyles}>
                            <Text style={style.buttonTextStyles}>{text}</Text>
                        </View>       
                    </View>        
                </View>        

            </TouchableHighlight>   
        )
    }
}
let sourceSans = 'Source Sans Pro Semibold';
let style = StyleSheet.create({
    wrap: {
        width: '80%',
        alignSelf: 'center'
    },
    buttonStyles: {
        backgroundColor: 'transparent',
        marginBottom: 15,
      },
      buttonTextStyles: {
        color: 'white',
        textAlign: 'center',
        fontFamily: sourceSans,
        fontSize: 18
      },
      buttonBackgroundImageStyles: {
        resizeMode: 'cover',
        position: 'absolute',
        left: 0,
        top: 0,
        flex: 1,
        height: 130,
        width: '100%'
      },
      buttonContentStyles: {
        height: 130,
        alignItems: 'center',
        justifyContent: 'center'
      },
})

export default Button;