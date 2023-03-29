/**
 * Global styles for app
 */

import { StyleSheet, Dimensions } from "react-native"
import Colors from "./Colors"

const { width } = Dimensions.get('screen')

const AppStyles = StyleSheet.create({
    loaderStyle: {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: Colors.TRANSPARENT
    },
    navBarStyle: {
        height: 67,
        padding: 10,
        backgroundColor: Colors.PRIMARY,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: Colors.GRAY
    },
    headerText: {
        fontSize: 18,
        color: Colors.WHITE,
        alignSelf: 'center',
        // width: width,
        textAlign: 'center',
        // position: 'absolute',
        letterSpacing: 0.6
    },
    inputBox: {
        height: 44,
        fontSize: 18,
        borderRadius: 4,
        color: Colors.BLACK,
        backgroundColor: Colors.WHITE,
    },
    fullWidthButtonWrapper: {
        padding: 14,
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY,
    },
    hitSlop: {
        top: 15,
        left: 15,
        bottom: 15,
        right: 15
    },
    errorMessage: {
        marginTop: 6,
        fontSize: 12,
        lineHeight: 20,
        color: Colors.RED,
    },
    marginWrapperContainer: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'center',
    },
    commonBorderWrapper: {
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: Colors.BORDER,
        backgroundColor: Colors.WHITE,
    },
    upcomingBottomBorder: {
        borderBottomWidth: 0.5,
        height: 109,
        borderBottomColor: Colors.PRIMARY,
    },
    dayMonth: {
        // lineHeight: 14.8,
        fontSize: 14,
        color: Colors.CARD_TITLE,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    date: {
        // lineHeight: 25,
        fontSize: 14,
        color: '#484848',
        textAlign: 'center',
    },
    headerIcon: {
        alignSelf: 'center',
        width: '10%',
        zIndex: 999
    },
    border: {
        backgroundColor: 'white',
        borderRadius: 8,
    },
    denseInputBox: {
        fontSize: 16,
        borderRadius: 4,
        color: Colors.BLACK,
        backgroundColor: Colors.WHITE,
    },
    profilePicWrap: {
        position: 'absolute',
        alignItems: 'flex-end',
        width: 40,
        height: 40,
        right: 15,
        borderRadius: 25,
    },
    editProfilePicWrap: {
        height: 64,
        width: 64,
        borderRadius: 50,
        justifyContent: 'center',
        backgroundColor: Colors.PRIMARY,
    },
    editPenWrapper: {
        width: 18,
        height: 18,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        position: 'absolute',
        bottom: -3,
        borderWidth: 1,
        borderColor: Colors.APP_BG,
        backgroundColor: Colors.WHITE,
    },
    penEditWrap: {
        width: 22,
        height: 22,
    },
})

export default AppStyles
