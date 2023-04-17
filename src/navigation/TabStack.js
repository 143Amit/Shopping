import * as React from "react";
import Home from '../Screens/Home'
import User from '../Screens/User'
import Cart from '../Screens/Cart'
import Message from '../Screens/Message'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Image } from "react-native";
import { CART, FEED, HOME, MESSAGE, USER } from "../constants/imagepath";
import { HEIGHT, WIDTH } from "../constants/config";
import { GRAY, LIGHT_VIOLET, WHITE } from "../constants/color";
import Feed from "../Screens/Feed";
// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
export default TabStack = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            backBehavior="history"
            screenOptions={({ route, focused }) => (
                {
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        // ...STYLESCONFIG.elevation,
                        height: HEIGHT * 0.08,
                        borderRadius: 10,
                        width: WIDTH ,
                        backgroundColor: WHITE,
                        // marginHorizontal: WIDTH * 0.05,
                        // position: 'absolute',
                        borderColor: WHITE,
                        borderWidth: 0.5,
                        // bottom: Platform.OS == 'ios' ? 20 : 10,
                        display: (route.name == 'Home'  
                        || route.name == 'Feed' 
                        || route.name == 'Message'
                        ||  route.name == 'Cart') ? 'flex' : 'none'
                    },
                    // tabBarIconStyle: {
                    //     position: Platform.OS == 'ios' ? "absolute" : 'relative',
                    // },
                    tabBarIcon: ({ focused }) => {

                        let icon;
                        if (route.name === 'Home') {
                            icon = (
                                <Image
                                    source={HOME}
                                    style={{
                                        height: 40,
                                        width: 40,
                                        tintColor: focused ? LIGHT_VIOLET : GRAY,
                                    }}
                                />
                            );
                        } 
                        else if (route.name === 'Feed') {
                            icon = (
                                <Image
                                    source={FEED}
                                    style={{
                                        height: 40,
                                        width: 40,
                                        tintColor: focused ? LIGHT_VIOLET : GRAY,
                                    }}
                                />
                            );
                        }
                         else if (route.name === 'Cart') {
                            icon = (
                                <Image
                                    source={CART}
                                    style={{
                                        height: 40,
                                        width: 40,
                                        tintColor: focused ? LIGHT_VIOLET : GRAY ,
                                    }}
                                />
                            );
                        }
                        else if (route.name === 'Message') {
                            icon = (
                                <Image
                                    source={MESSAGE}
                                    style={{
                                        height: 40,
                                        width: 40,
                                        tintColor: focused ? LIGHT_VIOLET : GRAY ,
                                    }}
                                />
                            );
                        }
                         else if (route.name === 'User') {
                            icon = (
                                <Image
                                    source={USER}
                                    style={{
                                        height: 40,
                                        width: 40,
                                        tintColor: focused ? LIGHT_VIOLET : GRAY ,
                                    }}
                                />
                            );
                        }
                        return icon;
                    },
                })}>
            <Tab.Screen options={{ headerShown: false, gestureEnabled: false }} name="Home" component={Home} />
            <Tab.Screen options={{ headerShown: false }} name="Feed" component={Feed} />
            <Tab.Screen options={{ headerShown: false }} name="Cart" component={Cart} />
            <Tab.Screen options={{ headerShown: false }} name="Message" component={Message} />
            <Tab.Screen options={{ headerShown: false }} name="User" component={User} />
            {/* <Tab.Screen options={{ headerShown: false }} name="Profile" component={Profile} /> */}
        </Tab.Navigator >
    )
}