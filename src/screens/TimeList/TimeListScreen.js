import React from "react";
import {
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  Text,
} from "react-native";
import styles from "./styles";
import TimeButton from "../../components/TimeButton/TimeButton";
import TimeButton2 from "../../components/TimeButton/TimeButton2";
import TimeButton3 from "../../components/TimeButton/TimeButton3";
import TimeButton4 from "../../components/TimeButton/TimeButton4";
import TimeButton5 from "../../components/TimeButton/TimeButton5";
import TimeButton6 from "../../components/TimeButton/TimeButton6";

const TimeListScreen = ({ navigation }) => {

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/icons/football-background5.jpeg")}
      />
      <View style={styles.infoContainer}>
        <TimeButton6 onPress={()=>{}} />
      </View>
      <View style={styles.infoContainer}>
        <TimeButton onPress={()=>{}} />
      </View>
      <View style={styles.infoContainer}>
        <TimeButton2 onPress={()=>{}} />
      </View>
      <View style={styles.infoContainer}>
        <TimeButton3 onPress={()=>{}} />
      </View>
      <View style={styles.infoContainer}>
        <TimeButton4 onPress={()=>{}} />
      </View>
      <View style={styles.infoContainer}>
        <TimeButton5 onPress={()=>{}} />
      </View>
    </ScrollView>
  );
};
export default TimeListScreen;
