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
                            <Text style={style.h2}>{subtitle}</Text>
                            <Text style={style.h1}>{title}</Text>
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
      h1: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30
      },
      h2: {
        color: 'white',
        textAlign: 'center',
        fontSize: 12
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