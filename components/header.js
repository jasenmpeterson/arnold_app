import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

class Header extends Component {
    static propTypes = {
        subtitle: PropTypes.string,
        title: PropTypes.string,
        image: PropTypes.number
    }

    render = () => {
        const {
            title,
            subtitle,
            image
        } = this.props;
        return (
            <TouchableHighlight style={style.buttonStyles}>
                <View style={style.wrap}>
                    <View>
                        <Image
                            style={style.buttonBackgroundImageStyles}    
                            source={image}
                        />
                        <View style={style.buttonContentStyles}>
                            <Text style={style.buttonTextStyles}>{subtitle}</Text>
                            <Text style={style.buttonTextStyles}>{title}</Text>
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
        marginBottom: 15
      },
      buttonTextStyles: {
        color: 'red',
        textAlign: 'center'
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

export default Header;