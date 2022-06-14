// Note: Navigation component...!

import React, { Fragment } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

// Note: For using stack navigation of RN...!
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

// Note: Importing reuseable components...!
import UsersList from '../users-list/users-list';

const Navigation = () => {

    return (
        <Fragment>
            <NavigationContainer>
                <Navigator screenOptions={{ headerShown: false }}>
                    <Screen name='users-list' component={UsersList} />
                </Navigator>
            </NavigationContainer>
        </Fragment>
    );
};

export default Navigation;