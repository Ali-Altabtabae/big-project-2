import React from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
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
    this.props.navigation.navigate('TeamDetails', { item });
  };

  renderTeam = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => this.onPressTeam(item)}
    >
      <View style={styles.teamsItemContainer}>
        <Text style={styles.teamsName}>{item.teamName}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <FlatList
          data={teamStore.teams}
          renderItem={this.renderTeam}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    );
  }
}
