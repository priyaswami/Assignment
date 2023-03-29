/**
 * Global app font styles which includes fontSizes, colors, fontFamily for app
 */

import Colors from "./Colors"

//font sizes for the app
const SIZES = {
    f8: 8,
    f9: 9,
    f10: 10,
    f11: 11,
    f12: 12,
    f13: 13,
    f14: 14,
    f16: 16,
    f17: 17,
    f18: 18,
    f19: 19,
    f20: 20,
}

//Add font styles here
const AppFontStyles = {
    formLabel: { fontSize: SIZES.f14, color: Colors.BLACK },
    initialF13Label: { fontSize: SIZES.f13, color: Colors.INITIAL, fontWeight: '700' },
    f11LB: { fontSize: SIZES.f11, color: Colors.LIGHTBLACK },
    f11Edit: { fontSize: SIZES.f11, color: Colors.EDITCOLOR, fontWeight: '700' },
    titleF20: { fontSize: SIZES.f20, lineHeight: 26, color: Colors.TITLE },
    buttonTextStyle: { fontSize: SIZES.f16, color: Colors.WHITE, letterSpacing: 0.6 },
}

export default AppFontStyles
