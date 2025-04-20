import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {useTheme} from '../theme/ThemeProvider';
import AppNavigator from './AppNavigator';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    const {colors, theme} = useTheme();

    const navigationTheme = theme === 'light' ? DefaultTheme : DarkTheme;

    return (
        <NavigationContainer theme={navigationTheme}>
            <StatusBar
                backgroundColor={colors.background}
                barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
            />
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="MainApp" component={AppNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
