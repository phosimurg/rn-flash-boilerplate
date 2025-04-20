import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '../theme/ThemeProvider';
import Typography from '../theme/Typography';
import Metrics from '../theme/metrics';
import {useTranslation} from 'react-i18next';

// Screens
import HomeStackNavigator from './page-navigators/HomeStackNavigator.tsx';

// Route names enum
export enum Routes {
  HOME = 'routes.home',
}

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const {colors} = useTheme();
  const {t} = useTranslation();

  const getIconName = (routeName: string) => {
    switch (routeName) {
      case Routes.HOME:
        return 'home-outline';
      default:
        return 'home-outline';
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const iconName = getIconName(route.name);
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
        tabBarStyle: {
          borderTopColor: colors.borderColor,
          borderTopWidth: Metrics.moderateScale(1),
          backgroundColor: colors.inputBackground,
          height: Metrics.verticalScale(65),
        },
        tabBarLabelStyle: {
          fontFamily: Typography.MEDIUM,
          fontSize: Metrics.moderateScale(11),
        },
        headerShown: false,
      })}>
      <Tab.Screen
        name={Routes.HOME}
        component={HomeStackNavigator}
        options={{tabBarLabel: t(Routes.HOME)}}
      />
    </Tab.Navigator>
  );
}
