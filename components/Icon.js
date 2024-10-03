import React from "react";
import { Text,  TouchableOpacity,  View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
export default function Icon(props) {
  return (
    <View style={{ flex: 1 , alignItems : "center"  }}>
        <View style={{ backgroundColor : '#142959',flex : 1 ,flexDirection : 'row',justifyContent:'space-around'}}>
   
    
   <View style={{flexDirection : 'column',alignItems:'center'}}>
   
      <View style={{ width:75, height :125, borderRadius:10 , backgroundColor: 'steelblue' ,borderWidth : 3, borderColor:'white',marginTop:40}}>
      <Image style={{ width:75, height :125, borderRadius:10 }} source={{ uri : "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg"}} />
      </View>
      <Text style={{ fontSize: 10, color : "white" }}>รูป1</Text>
    </View>

    <View style={{flexDirection : 'column',alignItems:'center'}}>
      <View style={{ width:75, height :125, borderRadius:10 , backgroundColor: 'steelblue' ,borderWidth : 3, borderColor:'white',marginTop:40}}>
      <Image style={{ width:75, height :125, borderRadius:10 }} source={{ uri : "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg"}} />
      </View>
      <Text style={{ fontSize: 10, color : "white" }}>รูป2</Text>
    </View>

    <View style={{flexDirection : 'column',alignItems:'center'}}>
      <View style={{ width:75, height :125, borderRadius:10 , backgroundColor: 'steelblue' ,borderWidth : 3, borderColor:'white',marginTop:40}}>
      <Image style={{ width:75, height :125, borderRadius:10 }} source={{ uri : "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg"}} />
      </View>
      <Text style={{ fontSize: 10, color : "white" }}>รูป3</Text>
    </View>
    
</View>
    </View>
  );
}