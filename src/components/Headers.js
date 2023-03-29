import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { AppStyles, Colors, Layouts, Metrics } from '../themes'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Headers = ({ title, isBackIcon, onPress, }) => {
  return (
    <>
      <View style={[Layouts.row, Metrics.wp100, AppStyles.navBarStyle]}>
        {isBackIcon && <TouchableOpacity style={AppStyles.headerIcon} onPress={onPress} hitSlop={AppStyles.hitSlop}>
          <Icon name={'chevron-left'} size={35} color={Colors.WHITE} />
        </TouchableOpacity>}
        <View style={[Layouts.justifyCenter, { width: !isBackIcon ? '100%' : '80%' }]}>
          <Text style={AppStyles.headerText}>{title}</Text>
        </View>
      </View>
    </>
  )
}

export default Headers
