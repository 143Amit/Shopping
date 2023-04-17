import React from "react";
import { FlatList, View } from 'react-native'
import { BLACK, GRAY, LIGHT_VIOLET, WHITE } from "../constants/color";
import { HEIGHT, MyStatusBar, WIDTH } from "../constants/config";
import { Text } from "react-native";
import { Image } from "react-native";
import { CAMERA, CATEGORY, COMPARE, HEART, OFFER, PLUS, SALES, SEARCH, SHOOES_1, SHOOES_2, SHOOES_3 } from "../constants/imagepath";
import { TouchableOpacity } from "react-native";
import { Alert } from "react-native";
import { FlatListSlider } from "react-native-flatlist-slider";
import { NewLineKind } from "typescript";
import { useNavigation } from "@react-navigation/native";


export default Home = ({navigation})=>{
    // const navigation = useNavigation();

    const PROMO = [{img:SHOOES_1,name:"Nike Air Hineck",id:"1",price:"150"}, {img:SHOOES_2,name:"Nike Max Retro",id:"2",price:"199"}, {img:SHOOES_3,name:"Nike Pop Canva",id:"3",price:"299"}];

    const PROMO2 = [{img:CATEGORY,name:"Category"}, {img:COMPARE,name:"Compare"}, {img: SALES,name:"Sales"},{img:OFFER,name:"Offers"}];

    const listView = ({item})=>{
        return(
            <>
            <TouchableOpacity style={{
                height:70,
                width:WIDTH * 0.15,
                // backgroundColor:'green',
                marginHorizontal:10,
                alignItems:'center'
            }}>
                <TouchableOpacity style={{
                    height:50,
                width:WIDTH * 0.12,
                    backgroundColor:'#ebdbfd',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:5
                }}>
                    <Image 
                    style={{
                        height:30,
                        width:30,
                        tintColor:LIGHT_VIOLET
                    }}
                    source={
                        item.img
                    }
                    />

                </TouchableOpacity>
                <TouchableOpacity style={{
                    height:20,
                width:WIDTH * 0.15,
                    // backgroundColor:'red',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Text style={{
                        color:BLACK,
                        fontWeight:'400',
                        fontSize:14,
                        fontFamily:'Roboto-Regular'
                    }}>
                        {item.name}
                    </Text>
                </TouchableOpacity>

            </TouchableOpacity>
            </>
        )
    }

    const listView_2 = ({item})=>{
        return(
            <>
            <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=>{
                navigation.navigate('Selected',item,img=item.img)
                
            }}
            style={{
                height:200,
                width:WIDTH * 0.35,
                // backgroundColor:"pink",
                backgroundColor:WHITE,
                marginHorizontal:10,
                borderWidth:1,
                borderColor:WHITE,
                elevation:5,
                marginTop:5,
                borderRadius:5
            }}>
                <View style={{
                    height:110,
                    width:WIDTH * 0.33,
                    alignSelf:'center',
                    // backgroundColor:GRAY,
                    marginTop:5,
                    borderRadius:5,
                    // justifyContent:'center',
                    // alignItems:'center'
                }}>
                    <Image 
                    style={{
                    height:110,
                    borderRadius:5,
                    width:126,
                    backgroundColor:GRAY
                    }}
                    source={item.img}
                    />
                    <TouchableOpacity 
                    onPress={()=>{
                        Alert.alert('Heart')
                    }}
                    style={{
                        height:35,
                        width:35,
                        // backgroundColor:'green',
                        position:'absolute',
                        // alignItems:'flex-end',
                        marginLeft:95,
                        alignItems:'center'
                    }}>
                        <Image 
                        style={{
                            height:30,
                            width:30,
                        }}
                        source={
                            HEART
                        }
                        />
                    </TouchableOpacity>

                </View>
                <View style={{
                    height:26,
                    width:WIDTH * 0.33,
                    // backgroundColor:'yellow',
                    alignSelf:'center',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Text style={{
                        color:BLACK,
                        fontSize:16,
                        fontFamily:'Roboto-Regular'
                    }}>
                        {item.name}
                    </Text>
                </View>

                <TouchableOpacity 
                onPress={()=>{
                    Alert.alert('Choose Color')
                }}
                style={{
                    height:25,
                    width:WIDTH * 0.15,
                    backgroundColor:GRAY,
                    justifyContent:'center',
                    alignItems:'center',
                    marginLeft:10
                }}>
                    <Text style={{
                        color:BLACK,
                        fontSize:14,
                        fontFamily:'Roboto-Regular'
                    }}>
                        Colors !
                    </Text>
                </TouchableOpacity>
                
                <View style={{
                    height:30,
                    width:WIDTH * 0.34,
                    // backgroundColor:'yellow',
                    alignSelf:'center',
                    flexDirection:'row'

                }}>
                    <View style={{
                        height:30,
                        width:WIDTH * 0.23,
                        // backgroundColor:'green',
                        justifyContent:'center'
                    }}>
                        <Text style={{
                            color:BLACK,
                            fontSize:16,
                            fontFamily:'Roboto-Regular',
                            marginLeft:10
                        }}>
                            $ {item.price}
                        </Text>
                    </View>
                    <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={()=>{
                        Alert.alert('Add')
                    }}
                    style={{
                        height:30,
                        width:WIDTH * 0.11,
                        // backgroundColor:'orange',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <Image 
                        style={{
                            height:25,
                            width:25
                        }}
                        source={PLUS}
                        />

                    </TouchableOpacity>

                </View>


            </TouchableOpacity>
            </>
        )
    }

    return(
        <View style={{
            flex:1,
            backgroundColor:WHITE
        }}> 
            <MyStatusBar backgroundColor={BLACK} barStyle={'light-content'}/>

            <View style={{
                height:200,
                width:WIDTH * 1,
                backgroundColor:LIGHT_VIOLET,
                borderBottomRightRadius:20,
                borderBottomLeftRadius:20,

            }}>
                {/* Start hearder view */}
                <View style={{
                    height:80,
                    width:WIDTH * 0.85,
                    alignSelf:'center',
                    // backgroundColor:'green',
                    flexDirection:'row',
                    // justifyContent:'center',
                    alignItems:'center'
                }}>
                    <View style={{
                        height:60,
                        width:WIDTH * 0.3,
                        // backgroundColor:'pink',
                        justifyContent:'center'
                    }}>
                        <Text style={{
                            color:WHITE,
                            fontSize:23,
                            letterSpacing:1,
                            fontFamily:'Roboto-Bold'

                        }}>
                            SHOPIN
                        </Text>
                    </View>
                    <TouchableOpacity 
                    activeOpacity={0.9}
                    onPress={()=>{
                        Alert.alert('Search')
                    }}
                    style={{
                        height:40,
                        width:WIDTH * 0.4,
                        backgroundColor:WHITE,
                        borderRadius:5,
                        flexDirection:'row'
                    }}>
                        <View style={{
                            height:40,
                            width:WIDTH * 0.1,
                            // backgroundColor:'red',
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                            <Image 
                            style={{
                                height:25,
                                width:25,
                                tintColor:GRAY
                            }}
                            source={SEARCH}
                            />

                        </View>
                        <View style={{
                            height:40,
                            width:WIDTH * 0.3,
                            // backgroundColor:'red',
                            justifyContent:'center',
                            // alignItems:'center'
                        }}>
                          <Text style={{
                            color:GRAY,
                            fontSize:16,
                            // fontWeight:'600'
                            // fontFamily:'Roboto-Bold'
                            fontFamily:'Roboto-Regular'
                          }}>
                            Search
                          </Text>

                        </View>

                    </TouchableOpacity>
                    <View style={{
                        height:40,
                        width:WIDTH * 0.15,
                        // backgroundColor:'pink'
                    }}>
                        <TouchableOpacity 
                        activeOpacity={0.7}
                        onPress={()=>{
                        
                            Alert.alert('Open Camer')
                        }}
                        style={{
                            height:40,
                            width:WIDTH *0.1,
                            alignSelf:'center',
                            backgroundColor:WHITE,
                            justifyContent:'center',
                        borderRadius:5,
                        alignItems:'center',
                        }}>
                            <Image
                            style={{
                                height:25,
                                width:25
                            }}
                            source={CAMERA}
                            />

                        </TouchableOpacity>

                    </View>

                </View>
                {/* end hearder view */}

                {/* start slider */}
                <View style={{
                    height:180,
                    width:WIDTH * 0.85,
                    backgroundColor:WHITE,
                    position:'absolute',
                    marginTop:90,
                    alignSelf:'center',
                    borderRadius:10,
                    borderWidth:1,
                    borderColor:WHITE,
                    elevation:5
                    // justifyContent:'center',
                    // alignItems:'center'
                }}>
                    <FlatListSlider
                     data={PROMO}
                     imageKey={'img'}
                     loop={true}
                     autoscroll={true}
                     onPress={() => { return false }}
                     contentContainerStyle={{
                    height:170,
                    borderRadius:10,
                    marginTop:10,
                    marginHorizontal:20
                     }}
                     indicatorActiveColor={LIGHT_VIOLET}
                     indicatorStyle={{marginTop:10}}
                    //  separatorWidth={70}
                     local
                     timer={2000}
                     indicator={true}
                     height={170}
                     width={WIDTH * 0.7}
                     indicatorContainerStyle={{
                        // position:'absolute', 
                        bottom:50
                    }}
                    //  indicatorActiveColor={'#8e44ad'}
                     indicatorInActiveColor={GRAY}
                     indicatorActiveWidth={30}
                     animation

                    />

                </View>
                {/* end slider */}

              


            </View>

                {/* start category */}
            <View style={{
                    height:80,
                    width:WIDTH * 0.85,
                    // backgroundColor:'pink',
                    marginTop:90,
                    alignSelf:'center',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <FlatList 
                    horizontal
                    data={PROMO2}
                    renderItem={listView}
                    />

                </View>
                {/* end category */}
                
                <View style={{
                    height:50,
                    width:WIDTH * 0.95,
                    // backgroundColor:'red',
                    alignSelf:'center',
                    flexDirection:'row',
                    alignItems:'center'
                }}>
                    <View style={{
                          height:50,
                          width:WIDTH * 0.67,
                        //   backgroundColor:'pink',
                          marginLeft:16,
                          justifyContent:'center',
                    }}>
                        <Text style={{
                        color:BLACK,
                        fontSize:22,
                          fontFamily:'Roboto-Bold'
                         
                       }}>
                        New Arrivals
                       </Text>
                    </View>

                    <TouchableOpacity 
                    activeOpacity={0.9}
                    onPress={()=>{
                        Alert.alert('View All')
                    }}
                    style={{
                        height:35,
                        width:WIDTH * 0.22,
                        backgroundColor:LIGHT_VIOLET,
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:5
                    }}>
                       <Text style={{
                        color:WHITE,
                        fontSize:16,
                        fontFamily:'Roboto-Medium'
                       }}>
                        View All
                       </Text>
                    </TouchableOpacity>

                </View>
                
                <View style={{
                    height:220,
                    width:WIDTH * 0.95,
                    // backgroundColor:'red',
                    alignSelf:'center',
                    marginTop:20
                }}>
                    <FlatList 
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={PROMO}
                    renderItem={listView_2}
                    />

                </View>



        </View>
    )
}