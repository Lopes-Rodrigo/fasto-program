import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import NewsScreen from "../screens/NewsScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
   
      <Stack.Navigator>
       
      <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
