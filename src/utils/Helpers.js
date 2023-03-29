/**
 * Add application required helper functions here
 */

import { Alert } from "react-native";

/**
 * 
 * @param {*} navigation 
 * @param {*} screenName screen name for navigation
 */
export const gotoScreen = (navigation, screenName) => {
    navigation.navigate(screenName)
}

/**
 * 
 * @param {*} navigation 
 * reset navigation state
 */
export const navigateToHome = (navigation) => {
    navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
    });
}

/**
 * imagePickerOptions
 */
export const imagePickerOptions = {
    includeBase64: true,
    quality: 0.5,
    mediaType: 'photo',
    aspect: [4, 3],
}

export const initalLetter = (firstName) => {
    return `${firstName.charAt(0).toUpperCase()}`;
}
