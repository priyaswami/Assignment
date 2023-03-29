import React, { useState } from 'react'
import { Alert, Image, Keyboard, Pressable, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AppFontStyles, AppStyles, Colors, Layouts, Metrics } from '../themes'
import { AppButton, AppTextInput, CustomStatusBar, Headers, LabelText } from '../components'
import { BUTTONS, DATEFORMATS, ERROR_MESSAGE, HEADERS, LABELS } from '../constants/TextConstants'
import { Controller, useForm } from 'react-hook-form'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import dayjs from 'dayjs'
import { Checkbox } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { imagePickerOptions } from '../utils/Helpers'
import { launchCamera } from 'react-native-image-picker'

const UserScreen = ({ route }) => {
    const navigation = useNavigation()
    const [isLoading, setIsLoading] = useState(false)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const { userData, handleAddUser, handleUpdateUser, item } = route.params;
    const [image, setImage] = useState('')

    const { control, handleSubmit, setFocus, setValue, trigger, formState: { errors } } = useForm({
        defaultValues: {
            firstName: item ? item.firstName : '', lastName: item ? item.lastName : '',
            dob: item ? item.dob : '',
            photo: item ? item.photo : '', checked: item ? item.married : false,
        },
    });

    const toggleDatePicker = () => {
        Keyboard.dismiss()
        setDatePickerVisibility(!isDatePickerVisible);
    };

    const handleConfirm = (date) => {
        setDatePickerVisibility(false);
        const formatedDate = dayjs(date).format(DATEFORMATS.MMDDYYYY);
        setValue('dob', formatedDate)
    };

    const takePhoto = async () => {
        const result = await launchCamera(imagePickerOptions);

        const base64Image = result.assets[0].base64
        setValue('photo', base64Image)
        setImage(base64Image)

        console.log("Results ===> ", result);
    }

    const onSubmit = async (data) => {
        console.log("data => ", data);
        try {
            setIsLoading(true);
            const newUser = {
                id: item ? item.id : userData.length + 1,
                firstName: data.firstName,
                lastName: data.lastName,
                dob: data.dob,
                married: data.checked,
                photo: data.photo
            };
            if (item) {
                Alert.alert('Updated', 'User has been updated Successfully',
                    [
                        { text: 'OK', onPress: () => { handleUpdateUser(item.id, newUser); navigation.goBack() } },
                    ]);
            } else {

                Alert.alert('Success', 'User has been added Successfully',
                    [
                        { text: 'OK', onPress: () => addUserAndGoBack(newUser) },
                    ]);
            }
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            console.log(err);
        }
    }

    /**
     * callback for adding user and go back to dashboard screen
     */
    const addUserAndGoBack = (newUser) => {
        handleAddUser(newUser);
        navigation.goBack()
    }

    return (
        <View style={[Layouts.flexContainer]}>
            <CustomStatusBar statusBarColor={Colors.PRIMARY} barStyle='dark-content' />
            <Headers title={item ? HEADERS.UPDATEUSER : HEADERS.ADDUSER} isBackIcon={true} onPress={() => navigation.goBack()} />
            <View style={[Layouts.flexContainer,]}>
                <KeyboardAwareScrollView showsVerticalScrollIndicator={true} keyboardShouldPersistTaps="handled" contentContainerStyle={[Metrics.mh18]}>

                    <View style={{ marginTop: 26, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => takePhoto()} style={AppStyles.editProfilePicWrap}>
                            <Image
                                source={{ uri: `data:image/png;base64,${image}` }}
                                style={{ width: "100%", height: "100%", borderRadius: 50, marginRight: 40 }}
                                resizeMode="cover"
                            />
                            <View style={[AppStyles.editPenWrapper, AppStyles.penEditWrap, { alignSelf: 'flex-end' }]}>
                                <Icon name='pencil' size={16} color={Colors.BLACK} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <LabelText labelStyle={[AppFontStyles.formLabel, Metrics.mt12]} label={LABELS.FIRST_NAME} isRequired />
                    <Controller
                        name="firstName"
                        defaultValue=""
                        control={control}
                        rules={{ required: { value: true, message: ERROR_MESSAGE.REQUIRED } }}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <View style={[Metrics.mb6, { width: '100%' }]}>
                                <AppTextInput
                                    dense={true}
                                    inputStyle={AppStyles.denseInputBox}
                                    error={errors.firstName}
                                    errorMessage={errors?.firstName?.message}
                                    keyboardType={'default'}
                                    onChangeText={text => onChange(text)}
                                    value={value}
                                    onBlur={onBlur}
                                    returnKeyLabel="next"
                                    returnKeyType="next"
                                    autoCapitalize={'sentences'}
                                    ref={ref}
                                    onSubmitEditing={() => setFocus('lastName')}
                                />
                            </View>
                        )}
                    />
                    <LabelText labelStyle={[AppFontStyles.formLabel, Metrics.mt12]} label={LABELS.LAST_NAME} isRequired />
                    <Controller
                        name="lastName"
                        defaultValue=""
                        control={control}
                        rules={{ required: { value: true, message: ERROR_MESSAGE.REQUIRED } }}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <View style={[Metrics.mb6, { width: '100%' }]}>
                                <AppTextInput
                                    dense={true}
                                    inputStyle={AppStyles.denseInputBox}
                                    error={errors.lastName}
                                    errorMessage={errors?.lastName?.message}
                                    keyboardType={'default'}
                                    onChangeText={text => onChange(text)}
                                    value={value}
                                    onBlur={onBlur}
                                    returnKeyLabel="next"
                                    returnKeyType="next"
                                    autoCapitalize={'sentences'}
                                    ref={ref}
                                    onSubmitEditing={() => setFocus('dob')}
                                />
                            </View>
                        )}
                    />

                    <LabelText labelStyle={[AppFontStyles.formLabel, Metrics.mt12]} label={LABELS.DOB} isRequired />
                    <Controller
                        name="dob"
                        defaultValue=""
                        control={control}
                        rules={{ required: { value: true, message: ERROR_MESSAGE.REQUIRED } }}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Pressable onBlur={onBlur} onPress={toggleDatePicker}>
                                <View style={[Metrics.mt6, Metrics.mb15]} pointerEvents="none">
                                    <AppTextInput
                                        dense={true}
                                        inputStyle={AppStyles.denseInputBox}
                                        error={errors.dob}
                                        errorMessage={errors?.dob?.message}
                                        keyboardType={'default'}
                                        value={value}
                                        onBlur={onBlur}
                                        returnKeyLabel="next"
                                        returnKeyType="next"
                                        autoCapitalize={'none'}
                                        placeholder={DATEFORMATS.MMDDYYYY.toLowerCase()}
                                        editable={false}
                                        ref={ref}
                                    />
                                    <DateTimePickerModal
                                        isVisible={isDatePickerVisible}
                                        mode="date" date={new Date()}
                                        onConfirm={date => handleConfirm(date)}
                                        onCancel={() => toggleDatePicker()}
                                        maximumDate={new Date()}
                                    />
                                </View>
                            </Pressable>
                        )}
                    />

                    <View style={{}}>
                        <LabelText labelStyle={[AppFontStyles.formLabel,]} label={LABELS.MARITAL_STATUS} />
                        <View style={[Metrics.mh18, {}]}>
                            <Controller
                                name="checked"
                                defaultValue=""
                                control={control}
                                rules={{ required: { value: false, message: ERROR_MESSAGE.REQUIRED } }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <View style={[Layouts.row, { left: -25, }]}>
                                        <View>
                                            <View>
                                                <Checkbox.Item
                                                    status={value ? 'checked' : 'unchecked'}
                                                    onPress={() => { setValue('checked', !value); trigger('checked') }}
                                                    mode='android'
                                                    position='leading'
                                                    color={Colors.PRIMARY}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                )}
                            />
                        </View>
                    </View>

                    <AppButton
                        title={item ? BUTTONS.UPDATE : HEADERS.ADDUSER}
                        onPress={handleSubmit(onSubmit)}
                        styles={[AppStyles.fullWidthButtonWrapper, Metrics.mt12,]}
                        textStyle={AppFontStyles.buttonTextStyle}
                        isDisabled={false}
                    />

                </KeyboardAwareScrollView>
            </View>
        </View>
    )
}

export default UserScreen
