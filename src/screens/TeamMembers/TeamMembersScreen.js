import React from "react";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { players } from "../../data/dummyData";

export default class TeamMembersScreen extends React.Component {
  static navigationOptions = {
    title: "TeamMembers",
  };

  constructor(props) {
    super(props);
  }

  renderCategory = ({ item }) => (
    <TouchableOpacity underlayColor="rgba(73,182,77,0.9)" style={styles.card}>
      <Image
        style={styles.image}
        source={item.pic}
      />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.name2}>{item.position}</Text>
        <Text style={styles.name2}>{item.test}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View backgroundColor={"#306B34"}>
        <FlatList
          data={players}
          renderItem={this.renderCategory}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    );
  }
}
