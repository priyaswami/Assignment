import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { navigateToHome } from '../../utils/Helpers';

const Splash = () => {
    const navigation = useNavigation()

    useEffect(() => {
        navigateToHome(navigation)
    }, [])

    return (
        <></>
    )
}

export default Splash
