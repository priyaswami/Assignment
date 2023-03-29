import React from 'react'
import { AppFontStyles, AppStyles, Metrics } from '../themes'
import AppButton from './AppButton'

const FooterButton = ({ title, onPress, isDisabled }) => {
    return (
        <AppButton
            title={title}
            onPress={onPress}
            styles={[AppStyles.fullWidthButtonWrapper, Metrics.mt15, Metrics.mb17]}
            textStyle={AppFontStyles.buttonTextStyle}
            isDisabled={isDisabled}
        />
    )
}

export default FooterButton
