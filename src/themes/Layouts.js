/**
 * Global Layouts for app
 */

import { StyleSheet, Dimensions } from "react-native";
import Colors from "./Colors";

const { height } = Dimensions.get('screen')

const Layouts = StyleSheet.create({
    flexContainer: {
        flex: 1,
        height: height,
        backgroundColor: Colors.APP_BG
    },
    flexFill: {
        flex: 1
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selfEnd: {
        alignSelf: 'flex-end',
    },
    flexRowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    selfAlign: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
    flexDirectionRow: {
        flexDirection: 'row',
    },
    justifyContentStart: {
        justifyContent: 'flex-start'
    },
    justifyContentEnd: {
        justifyContent: 'flex-end'
    },
    alignCenter: {
        alignItems: 'center'
    },
    rowAlignCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    selfCenter: {
        alignSelf: 'center'
    },
    flexAlignEnd: {
        flex: 1,
        alignItems: 'flex-end',
    },
    alignStart: {
        alignItems: 'flex-start'
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    textCenter: {
        textAlign: 'center'
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    fillEnd: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flex: 1
    },
    underlineText: {
        textDecorationLine: 'underline'
    },
    postionAbs: {
        position: 'absolute'
    },
    wrap: {
        flexWrap: 'wrap'
    },
    selfStart: {
        alignSelf: 'flex-start'
    }
});

export default Layouts
