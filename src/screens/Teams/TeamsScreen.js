import React from "react";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { getNumberOfRecipes } from "../../data/MockDataAPI";
import teamStore from "../../../stores/teamStore";

export default class TeamsScreen extends React.Component {
  static navigationOptions = {
    title: "Teams",
  };

  constructor(props) {
    super(props);
  }

  onPressTeam = (item) => {
    this.props.navigation.navigate("TeamDetails", { item });
  };

  renderTeam = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => this.onPressTeam(item)}
    >
      <Image
        style={styles.image}
        source={require("../../../assets/icons/team.png")}
      />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.teamName}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View backgroundColor={"#306B34"}>
        <FlatList
          data={teamStore.teams}
          renderItem={this.renderTeam}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    );
  }
}
