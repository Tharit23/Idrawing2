
import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

export default function Homepage() {
  const navigation = useNavigation();
  const icons = [
    { id: "1", title: "user name : ", uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" },
    { id: "2", title: "user name : ", uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-2.jpg" },
    { id: "3", title: "user name : ", uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-3.jpg" },
    { id: "4", title: "user name : ", uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-4.jpg" },
    { id: "5", title: "user name : ", uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-5.jpg" }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          {["I", "D", "r", "a", "w", "i", "n", "g"].map((char, index) => (
            <Text key={index} style={styles.titleText(char === "D")}>{char}</Text>
          ))}
        </View>
        <View style={styles.iconContainer}>
          {["Gallorypage", null, null].map((route, index) => (
            <View key={index} style={styles.iconColumn}>
              <View style={styles.iconButton}>
                <FontAwesome 
                  name={index === 0 ? 'pencil' : index === 1 ? 'circle' : 'cog'} 
                  size={40} 
                  color="white" 
                  onPress={() => route && navigation.navigate(route)} 
                />
              </View>
              <Text style={styles.iconLabel}>{index === 0 ? 'แกลลอรี่' : index === 1 ? 'แกลลอรี่ออนไลน์' : 'ตั้งค่า'}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.dailyImagesHeader}>
        <Text style={styles.dailyImagesTitle}>รูปประจำวัน</Text>
      </View>

      <FlatList 
        horizontal 
        data={icons}
        renderItem={({ item, index }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.uri }} style={styles.image} />
            <Text style={styles.TextImagesTitle}>อันดับที่ {index + 1}</Text>
            <Text style={styles.TextImagesTitle}>{item.title}{index + 1}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'steelblue',
  },
  header: {
    flex: 2,
    backgroundColor: 'steelblue',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 100,
    backgroundColor: 'steelblue',
  },
  titleText: (isGreen) => ({
    fontSize: 100,
    color: isGreen ? '#83d487' : 'white',
  }),
  iconContainer: {
    flexDirection: 'row',
    marginTop: 70,
    marginRight: 40,
    backgroundColor: 'steelblue',
  },
  iconColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 40,
    backgroundColor: 'steelblue',
  },
  iconButton: {
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#3767d5',
  },
  iconLabel: {
    fontSize: 10,
    color: "white",
    marginBottom: 100,
  },
  dailyImagesHeader: {
    backgroundColor: '#142959',
    alignItems: 'center',
    marginTop: 150,
  },
  dailyImagesTitle: {
    fontSize: 20,
    color: "white",
    marginTop: 20,
    marginBottom: 20,
  },
  imageContainer: {
    backgroundColor: '#142959',
  },
  image: {
    width: 200,
    height: 100,
    borderRadius: 10,
  },
  TextImagesTitle: {
    fontSize: 20,
    color: "white",
    marginTop: 20,
    
  },
});
