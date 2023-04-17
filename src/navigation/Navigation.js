// import React from "react";
import * as React from 'react';
// import 'react-native-gesture-handler';
import { View } from 'react-native'
import HomeStack from "./HomeStack";
import { NavigationContainer } from "@react-navigation/native";
import {createRef} from 'react';


export default Navigation = ()=>{
    return(
        <>
        <NavigationContainer >
        <HomeStack />
        </NavigationContainer>
        </>
        
    )
}