import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

class ButtonSlim extends Component {
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

let style = StyleSheet.create({
    wrap: {
        alignSelf: 'stretch'
    },
    buttonStyles: {
        backgroundColor: 'transparent',
        marginBottom: 15,
      },
      buttonTextStyles: {
        color: 'white',
        textAlign: 'center'  
      },
      buttonBackgroundImageStyles: {
        resizeMode: 'cover',
        position: 'absolute',
        left: 0,
        top: 0,
        flex: 1,
        height: 65,
        width: '100%'
      },
      buttonContentStyles: {
        height: 65,
        alignItems: 'center',
        justifyContent: 'center'
      },
})

export default ButtonSlim;