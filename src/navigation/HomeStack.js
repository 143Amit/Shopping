import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from 'react-native'
import TabStack from "./TabStack";
import Selected from "../Screens/Selected";
// import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator()
export default HomeStack = ()=>{
    return(
        
        
        <Stack.Navigator initialRouteName="TabStack" >
            <Stack.Group>
                {/* <Stack.Screen options={{headerShown:false}} name="TabStack" component={TabStack} /> */}
        <Stack.Screen options={{ headerShown: false }} name="TabStack" component={TabStack} />
        <Stack.Screen options={{ headerShown: false }} name="Selected" component={Selected} />

            </Stack.Group>

        </Stack.Navigator>

        
    )
}