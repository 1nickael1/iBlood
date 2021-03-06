import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Pages/Login';
import SignUpPage1 from './Pages/Login/SignUp/Page1';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" headerMode="none">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SignUpPage1" component={SignUpPage1} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;