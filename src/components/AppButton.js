import React from 'react'
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import { Colors } from '../themes';


//loader is added to show once clicked on button 
const AppButton = ({ title, onPress, styles, textStyle, isDisabled, showLoader }) => {
    return (
        <TouchableOpacity style={styles} disabled={isDisabled} onPress={onPress}>
            {showLoader && <ActivityIndicator animating={showLoader} color={Colors.WHITE} />}
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AppButton;
