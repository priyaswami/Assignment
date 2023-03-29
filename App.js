import * as React from 'react';
import { LogBox, View } from 'react-native'
import { StateProvider } from './src/context/StateProvider';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Layouts from './src/themes/Layouts';
import { initialState, reducer } from './src/context/Reducer';
import AppNavigations from './src/navigations/AppNavigations';
import { Colors } from './src/themes';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: Colors.PRIMARY,
        secondary: 'yellow',
    },
};

const App = () => {
    return (
        <View style={Layouts.flexFill}>
            <PaperProvider theme={theme}>
                <StateProvider initialState={initialState} reducer={reducer}>
                    <AppNavigations />
                </StateProvider>
            </PaperProvider>
        </View>
    )
}

LogBox.ignoreAllLogs();

export default App;
