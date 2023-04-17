import React from "react";
import{Dimensions, SafeAreaView, StatusBar, View} from "react-native"

export const {width:WIDTH ,height:HEIGHT} = Dimensions.get("screen")

export const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={{ height: StatusBar.currentHeight, backgroundColor }}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );