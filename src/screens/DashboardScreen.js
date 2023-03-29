import React, { useState } from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import dayjs from 'dayjs'
import { useStateValue } from '../context/StateProvider'
import { AppFontStyles, AppStyles, Colors, Layouts, Metrics } from '../themes'
import { AppButton, CustomStatusBar, FooterButton, Headers, LabelText } from '../components'
import { BUTTONS, DATEFORMATS, HEADERS, HEADERS_TITLE } from '../constants/TextConstants'
import { gotoScreen, initalLetter } from '../utils/Helpers'
import { isNullOrEmpty } from '../utils/Validations'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DashboardScreen = () => {
    const navigation = useNavigation()
    const [isLoading, setIsLoading] = useState(false)
    const [{ }, dispatch] = useStateValue();

    const [userData, setUserData] = useState([
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            dob: '05/02/1999',
            married: true,
            photo: ''
        },
    ])

    const deleteRecord = (id) => {
        setUserData((data) => data.filter((user) => user.id !== id));
    };

    /**
     * @param {*} key 
     * @param {*} item 
     */
    const handleOnPress = (key, item) => {
        if (key === 'edit') {
            navigation.navigate('UserScreen', { item, handleUpdateUser })
        } else {
            navigation.navigate('UserScreen', { userData, handleAddUser })
        }
    }

    const renderUserData = ({ item, index }) => {
        return (
            <TouchableOpacity style={[AppStyles.commonBorderWrapper, Metrics.mt12]} onPress={() => handleOnPress('edit', item)}>
                <View style={[Metrics.mtl20, Layouts.row]}>
                    <LabelText label={`${item.firstName} ${item.lastName}`} labelStyle={[AppFontStyles.titleF20, { width: '85%' }]} />
                    <View style={[AppStyles.profilePicWrap, { backgroundColor: Colors.PRIMARY }]}>
                        {!isNullOrEmpty(item.photo) ? <Image
                            source={{ uri: `data:image/png;base64,${item.photo}` }}
                            style={{ width: "100%", height: "100%", borderRadius: 50 }}
                            resizeMode="cover"
                        /> :
                            <LabelText label={initalLetter(item.firstName, item.lastName)} labelStyle={[AppFontStyles.initialF13Label, Layouts.selfAlign, { top: 12 }]} />}
                    </View>
                </View>
                <View style={[Metrics.wp75, Metrics.ml20]}>
                    <LabelText label={`Maritial Status: ${item.married ? 'Married' : 'Unmarried'}`} labelStyle={[AppFontStyles.f11LB, Metrics.pt6]} />
                    <LabelText label={item.dob} labelStyle={[AppFontStyles.f11LB, Metrics.pt10]} />
                </View>

                <View style={[Layouts.flexRowSpaceBetween, Metrics.mt12]}>
                    <TouchableOpacity onPress={() => handleOnPress('edit', item)} style={[Metrics.ml20]}>
                        <LabelText label={'Edit'} labelStyle={[AppFontStyles.f11Edit, Metrics.mb15]} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteRecord(item.id)} style={Metrics.mr20}>
                        <Icon name='close' size={22} color={Colors.RED} style={[Metrics.mr8]} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }

    /**
     * @param {*} newUser 
     * if prevUserData is defined before spreading it, 
     * and if it's not defined, it initializes it to an empty array with the ? operator.
     */
    const handleAddUser = (newUser) => {
        console.log("userData on dashboard ", newUser);
        setUserData((prevUserData) => {
            const updatedUserData = prevUserData ? [...prevUserData, newUser] : [newUser];
            return updatedUserData;
        });
    };

    const handleUpdateUser = (userId, updatedUserData) => {
        console.log("handleUpdateUser on dashboard ", userId, updatedUserData);
        setUserData((prevUserData) => {
            const updatedUsers = prevUserData.map((user) => {
                if (user.id === userId) {
                    return { ...user, ...updatedUserData };
                } else {
                    return user;
                }
            });
            return updatedUsers;
        });
    };


    return (
        <View style={[Layouts.flexContainer]}>
            <CustomStatusBar statusBarColor={Colors.PRIMARY} barStyle='dark-content' />
            <Headers title={HEADERS.DASHBOARD} />
            <View style={[Layouts.flexContainer, Metrics.mh18]}>
                {/* <View style={Metrics.mt12}>
                    <LabelText label={HEADERS_TITLE.USERINFO} labelStyle={[AppFontStyles.titleF20]} />
                </View> */}

                <FlatList
                    data={userData}
                    extraData={userData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(item, index) => renderUserData(item, index)}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={!isLoading && <FooterButton title={HEADERS.ADDUSER} onPress={() => handleOnPress()} isDisabled={false} />}
                />

            </View>
        </View>
    )
}

export default DashboardScreen
