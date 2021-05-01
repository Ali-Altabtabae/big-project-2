import React, { useState } from "react";
import authStore from "../../../stores/authStore";
import userStore from "../../../stores/userStore";
import teamStore from "../../../stores/teamStore";
import {
  TeamPageContainer,
  AuthTextInput,
  AuthTitle,
  TeamPageButton,
  TeamPageButtonText,
  TeamDeleteButtonText,
  TeamDeleteButton,
} from "./styles";
import {
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  Text,
} from "react-native";
import styles from "./styles";
import DeleteTeamButton from "../../components/DeleteTeamButton/DeleteTeamButton";
import CreateTeamButton from "../../components/CreateTeamButton/CreateTeamButton";

const MyTeamScreen = ({ navigation }) => {
  const [team, setTeam] = useState({
    teamName: "",
  });

  let userInfo = "";
  userStore.users.map((element) => {
    if (element.username === authStore.user.username) userInfo = element;
  });

  let teamInfo = { teamName: null };
  teamStore.teams.map((element) => {
    if (element.id === userInfo.TeamId) teamInfo = element;
  });

  if (!teamInfo.teamName) teamInfo.teamName = "You don't have team yet";

  const handleAdd = async () => {
    await authStore.createTeam(team);
    //teamStore.teams[teamStore.teams.length - 1].teamLeader = authStore.user.username
    authStore.user.TeamId = teamStore.teams[teamStore.teams.length - 1].id;
    await authStore.updateUser(authStore.user);
  };

  const handleDelete = async () => {
    await authStore.deleteTeam(teamInfo.id);
    navigation.navigate("Teams");
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/icons/football-background5.jpeg")}
      />
      <View style={styles.carouselContainer}>
          <View style={styles.carousel}></View>
        </View>
      <View style={styles.infoRecipeContainer}>
        <View style={styles.infoContainer}>
          <TouchableHighlight onPress={() => {}}>
            <Text style={styles.category}>{teamInfo.teamName}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.infoContainer}>
          <AuthTextInput
            onChangeText={(teamName) => setTeam({ ...team, teamName })}
            placeholder="enter your team name"
            placeholderTextColor="#A6AEC1"
          />
        </View>
        <View style={styles.infoContainer}>
          <CreateTeamButton onPress={handleAdd} />
        </View>
        <View style={styles.infoContainer}>
          <DeleteTeamButton onPress={handleDelete} />
        </View>
      </View>
      
    </ScrollView>
  );
};
export default MyTeamScreen;
