/**
 * navigation for app
 * entire navigation flow will be handled here
 */

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

// Define your screens here
import { UserScreen, DashboardScreen, Splash } from '../screens';

const Stack = createNativeStackNavigator();

// Wrap your Stack Navigator in your Drawer Navigator
const AppNavigations = () => {
    const navigationRef = useNavigationContainerRef();
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Dashboard" component={DashboardScreen} />
                <Stack.Screen name="UserScreen" component={UserScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigations;
