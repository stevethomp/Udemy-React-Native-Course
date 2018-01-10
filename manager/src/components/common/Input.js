import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = (props) => {
    const { onChangeText, value, title, placeholder, secureTextEntry } = props;
    const { containerStyle, textInputStyle, titleStyle } = styles;
    
    return (
        <View style={containerStyle}>
            <Text style={titleStyle}>{title}</Text>
            <TextInput
                style={textInputStyle}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='email-address'
                returnKeyType='next'
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    textInputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };
