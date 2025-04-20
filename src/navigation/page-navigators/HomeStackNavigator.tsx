import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home';
/*import CreateProduct from '../screens/home/CreateProduct.tsx';
import EditProduct from '../screens/home/EditProduct.tsx';*/

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            {/*<Stack.Screen name="CreateProduct" component={CreateProduct} />
            <Stack.Screen name="EditProduct" component={EditProduct} />*/}
        </Stack.Navigator>
    );
}
