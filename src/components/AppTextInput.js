import React, { forwardRef } from 'react'
import { Text } from 'react-native'
import { TextInput } from 'react-native-paper'
import { Colors } from '../themes'
import AppStyles from '../themes/AppStyles'

const AppTextInput = forwardRef((props, ref) => {
    return (
        <>
            <TextInput
                style={props.inputStyle}
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderTextColor ? props.placeholderTextColor : Colors.GRAY_PLACEHOLDER}
                mode='outlined'
                onChangeText={props.onChangeText}
                value={props.value}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                autoCorrect={props.autoCorrect}
                autoCapitalize={props.autoCapitalize}
                underlineColor='transparent'
                keyboardType={props.keyboardType}
                returnKeyLabel={props.returnKeyLabel}
                returnKeyType={props.returnKeyType}
                ref={ref}
                secureTextEntry={props.secureTextEntry}
                onSubmitEditing={props.onSubmitEditing}
                theme={{
                    colors: {
                        placeholder: props.error ? `${Colors.RED}` : `${Colors.PRIMARY}`,
                        primary: props.error ? `${Colors.RED}` : `${Colors.PRIMARY}`,
                        underlineColor: 'transparent'
                    },
                }}
                editable={props.editable}
                maxLength={props.maxLength}
                left={props.left && <TextInput.Icon color={Colors.LINK} icon={() => props.left} />}
                multiline={props.multiline}
                dense={props.dense}
                outlineStyle={props.outlineStyle}
            />
            {props.errorMessage && <Text style={AppStyles.errorMessage}>{props.errorMessage}</Text>}
        </>
    )
})

export default AppTextInput;
