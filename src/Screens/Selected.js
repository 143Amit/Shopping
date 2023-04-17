import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {BLACK, GRAY, LIGHT_VIOLET, WHITE} from '../constants/color';
import {HEIGHT, MyStatusBar, WIDTH} from '../constants/config';
import {Text} from 'react-native';
import {Image} from 'react-native';
import {
  CAMERA,
  CATEGORY,
  COMPARE,
  HEART,
  OFFER,
  PLUS,
  SALES,
  SEARCH,
  SHARE,
  SHOOES_1,
  SHOOES_2,
  SHOOES_3,
} from '../constants/imagepath';
import {TouchableOpacity} from 'react-native';
import {Alert} from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';
import {NewLineKind} from 'typescript';
import {useEffect} from 'react';
import {useState} from 'react';

export default Selected = ({navigation, route}) => {
  useEffect(() => {
    // console.log(route.params);
  });
  const [productData, setProductData] = useState(route.params);
  const [shoeSize, setShoeSize] = useState('');
  const [buy,setBuy] = useState('')

  const size = [
    {
      id: 1,
      size: '6',
    },
    {
      id: 2,
      size: '6.5',
    },
    {
      id: 3,
      size: '7',
    },
    {
      id: 4,
      size: '7.5',
    },
    {
      id: 5,

      size: '8',
    },
    {
      id: 6,
      size: '8.5',
    },
    {
      id: 7,
      size: '9',
    },
    {
      id: 8,
      size: '9.5',
    },
    {
      id: 9,
      size: '10',
    },
    {
      id: 10,
      size: '10.5',
    },
  ];
  const SizeView = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (item.id == shoeSize) {
            setShoeSize('');
          } else {
            setShoeSize(item.id);
          }
        }}
        style={{
          height: 45,
          width: 45,
          // alignSelf: 'center',
          alignItems: 'center',
          backgroundColor: item.id == shoeSize ? BLACK : WHITE,
          borderRadius: 5,
          marginHorizontal: 10,
          marginVertical: 5,
          justifyContent: 'space-evenly',
          borderWidth: 1,
          borderColor: GRAY,
        }}>
        <Text
          style={{
            color: item.id == shoeSize ? WHITE : BLACK,
            fontSize: 15,
          }}>
          {item.size}
        </Text>
      </TouchableOpacity>
    );
  };
  const ShoeView = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {}}
        style={{
          height: 70,
          width: WIDTH * 0.28,
          alignSelf: 'center',
          alignItems: 'center',
          backgroundColor: WHITE,
          borderWidth: 1,
          borderColor: WHITE,
          elevation: 5,
          marginHorizontal: 10,
          //   justifyContent: 'space-evenly',
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            height: 65,
            width: 80,
          }}
          source={item.img}
        />
      </TouchableOpacity>
    );
  };

  const PROMO = [
    {img: SHOOES_1, name: 'Nike Air Hineck', id: '1', price: '150'},
    {img: SHOOES_2, name: 'Nike Max Retro', id: '2', price: '199'},
    {img: SHOOES_3, name: 'Nike Pop Canva', id: '3', price: '299'},
    {img: SHOOES_2, name: 'Nike Max Retro', id: '4', price: '199'},
    {img: SHOOES_3, name: 'Nike Pop Canva', id: '5', price: '299'},
  ];

  const PROMO2 = [
    {img: CATEGORY, name: 'Category'},
    {img: COMPARE, name: 'Compare'},
    {img: SALES, name: 'Sales'},
    {img: OFFER, name: 'Offers'},
  ];

  const listView = ({item}) => {
    return (
      <>
        <TouchableOpacity
          style={{
            height: 70,
            width: WIDTH * 0.15,
            // backgroundColor:'green',
            marginHorizontal: 10,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              height: 50,
              width: WIDTH * 0.12,
              backgroundColor: '#ebdbfd',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                tintColor: LIGHT_VIOLET,
              }}
              source={item.img}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 20,
              width: WIDTH * 0.15,
              // backgroundColor:'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: BLACK,
                fontWeight: '400',
                fontSize: 14,
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </>
    );
  };

  const listView_2 = ({item}) => {
    return (
      <>
        <TouchableOpacity
          style={{
            height: 200,
            width: WIDTH * 0.35,
            // backgroundColor:"pink",
            backgroundColor: WHITE,
            marginHorizontal: 10,
            borderWidth: 1,
            borderColor: WHITE,
            elevation: 5,
            marginTop: 5,
            borderRadius: 5,
          }}>
          <View
            style={{
              height: 110,
              width: WIDTH * 0.33,
              alignSelf: 'center',
              // backgroundColor:GRAY,
              marginTop: 5,
              borderRadius: 5,
              // justifyContent:'center',
              // alignItems:'center'
            }}>
            <Image
              style={{
                height: 110,
                borderRadius: 5,
                width: 126,
                backgroundColor: GRAY,
              }}
              source={item.img}
            />
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Heart');
              }}
              style={{
                height: 35,
                width: 35,
                // backgroundColor:'green',
                position: 'absolute',
                // alignItems:'flex-end',
                marginLeft: 95,
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                }}
                source={HEART}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 26,
              width: WIDTH * 0.33,
              // backgroundColor:'yellow',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: BLACK,
                fontSize: 16,
                fontWeight: '700',
              }}>
              {item.name}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              Alert.alert('Choose Color');
            }}
            style={{
              height: 25,
              width: WIDTH * 0.15,
              backgroundColor: GRAY,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <Text
              style={{
                color: BLACK,
                fontSize: 14,
                fontWeight: '500',
              }}>
              Colors !
            </Text>
          </TouchableOpacity>

          <View
            style={{
              height: 30,
              width: WIDTH * 0.34,
              // backgroundColor:'yellow',
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: 30,
                width: WIDTH * 0.23,
                // backgroundColor:'green',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: BLACK,
                  fontSize: 16,
                  fontWeight: '900',
                  marginLeft: 10,
                }}>
                $ {item.price}
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                Alert.alert('Add');
              }}
              style={{
                height: 30,
                width: WIDTH * 0.11,
                // backgroundColor:'orange',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: 25,
                  width: 25,
                }}
                source={PLUS}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: WHITE,
      }}>
      <MyStatusBar backgroundColor={BLACK} barStyle={'light-content'} />

      <View
        style={{
          height: 200,
          width: WIDTH * 1,
          backgroundColor: LIGHT_VIOLET,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}>
        {/* start slider */}
        <View
          style={{
            height: 200,
            width: WIDTH * 0.85,
            backgroundColor: WHITE,
            position: 'absolute',
            marginTop: 50,
            alignSelf: 'center',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: WHITE,
            elevation: 5,
            // justifyContent:'center',
            // alignItems:'center'
          }}>
          <FlatListSlider
            data={PROMO}
            imageKey={'img'}
            loop={true}
            autoscroll={false}
            onPress={() => {
              return false;
            }}
            contentContainerStyle={{
              height: 170,
              borderRadius: 10,
              marginTop: 10,
              marginHorizontal: 12,
            }}
            indicatorActiveColor={LIGHT_VIOLET}
            indicatorStyle={{marginTop: 10}}
            //  separatorWidth={70}
            local
            timer={2000}
            indicator={true}
            height={180}
            width={WIDTH * 0.8}
            indicatorContainerStyle={{
              // position:'absolute',
              bottom: 30,
            }}
            //  indicatorActiveColor={'#8e44ad'}
            indicatorInActiveColor={GRAY}
            indicatorActiveWidth={30}
            animation
          />
        </View>
        {/* end slider */}
      </View>

      {/* start category  name*/}
      <View
        style={{
          height: 60,
          width: WIDTH * 0.85,
          alignSelf: 'center',
          //   backgroundColor: 'pink',
          marginTop: 70,
          flexDirection: 'row',
        }}>
        <View
          style={{
            height: 60,
            width: WIDTH * 0.57,
            // backgroundColor: 'red',
          }}>
          <View
            style={{
              height: 30,
              width: WIDTH * 0.45,
              alignSelf: 'center',
              //   backgroundColor: 'yellow',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Roboto-Bold',
                color: BLACK,
                // fontWeight:'bold'
              }}>
              $ {productData.price}
            </Text>
          </View>
          <View
            style={{
              height: 30,
              width: WIDTH * 0.45,
              alignSelf: 'center',
              //   backgroundColor: 'orange',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Roboto-Bold',
                // color: BLACK,
                // fontWeight:'bold'
              }}>
              {productData.name}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            height: 60,
            width: WIDTH * 0.12,
            // backgroundColor: 'cyan',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              Alert.alert('WIshList');
            }}
            style={{
              height: 30,
              width: 30,
              backgroundColor: GRAY,
              marginTop: 5,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <Image
              style={{
                //   margin: 5,
                height: 28,
                width: 28,
              }}
              source={HEART}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 60,
            width: WIDTH * 0.12,
            // backgroundColor: 'green',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              Alert.alert('Share');
            }}
            style={{
              height: 30,
              width: 30,
              backgroundColor: GRAY,
              marginTop: 5,
              borderRadius: 5,
            }}>
            <Image
              style={{
                height: 28,
                width: 28,
              }}
              source={SHARE}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      {/* end category name*/}

      {/* start shoe flatlist */}
      <View
        style={{
          height: 80,
          width: WIDTH,
          // alignSelf: 'center',
          alignItems: 'center',
          // backgroundColor: 'pink',
          margin: 6,
        }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          // scrollEnabled={false}
          data={PROMO}
          renderItem={ShoeView}
        />
      </View>
      {/* end shoe flatlist */}

      {/* start select size */}
      <View
        style={{
          height: 20,
          width: WIDTH * 0.9,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Roboto-Bold',
            color: BLACK,
          }}>
          Select Size
        </Text>
      </View>

      <View
        style={{
          height: 120,
          width: WIDTH * 0.9,
          alignSelf: 'center',
          // backgroundColor: 'yellow',
        }}>
        <FlatList numColumns={5} data={size} renderItem={SizeView} />
      </View>
      {/* end select size */}

      {/* start desc */}

      <View
        style={{
          flex: 1,
          width: WIDTH,
          // backgroundColor:'green'
        }}>
        <View
          style={{
            height: 20,
            width: WIDTH * 0.95,
            alignSelf: 'center',
            // backgroundColor:'pink'
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Roboto-Bold',
              color: BLACK,
            }}>
            Description
          </Text>
        </View>
        <ScrollView
          style={{
            height: 100,
            width: WIDTH * 0.95,
            alignSelf: 'center',
          }}>
          <View
            style={{
              height: 180,
              width: WIDTH * 0.95,
              alignSelf: 'center',
              margin: 10,
              // backgroundColor:'yellow'
            }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Roboto-Regular',
                color: BLACK,
              }}>
              The Nike Air Max 2090 is a bold new take on the Air Max 90. It
              features a new, more sculpted shape that's inspired by the Air Max
              270. The exaggerated tongue and heel are reminiscent of the Air
              Max 180, while the midsole is a nod to the Air Max 93. The shoe is
              finished with a translucent outsole that shows off the Air Max
              unit.
            </Text>
          </View>
        </ScrollView>
        <View
          style={{
            height: 60,
            width: WIDTH * 0.95,
            flexDirection: 'row',
            justifyContent: 'space-between',
            // alignItems:'center',
            alignSelf: 'center',
            // backgroundColor:'orange'
          }}>
          <TouchableOpacity
           onPress={()=>{
            setBuy(2)
          }}
            style={{
              height: 50,
              width: WIDTH * 0.45,
              // alignSelf: 'center',
              backgroundColor: buy == 2 ? LIGHT_VIOLET: WHITE,
              borderRadius: 10,
              borderColor: GRAY,
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: buy == 2 ? WHITE : BLACK,
                fontFamily: 'Roboto-Bold',
                fontSize: 18,
              }}>
              Add To Cart
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>{
            setBuy(1)
          }}
            style={{
              height: 50,
              width: WIDTH * 0.45,
              // alignSelf: 'center',
              backgroundColor:buy == 1 ? LIGHT_VIOLET : WHITE,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: GRAY,
              borderWidth: 1,
            }}>
            <Text
              style={{
                color: buy == 1 ? WHITE :BLACK,
                fontFamily: 'Roboto-Bold',
                fontSize: 18,
              }}>
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* start desc */}
    </View>
  );
};
