import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { AppStyles, Colors } from '../themes';

const Loader = ({ isLoading }) => {
    return (
        <>
            {isLoading && <View style={AppStyles.loaderStyle}>
                <ActivityIndicator
                    color={Colors.PRIMARY}
                    size={'large'}
                    style={AppStyles.loaderStyle}
                />
            </View>}
        </>
    )
}

export default Loader;
