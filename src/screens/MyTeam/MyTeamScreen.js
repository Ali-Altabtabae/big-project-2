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
} from "./styles";

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

  //console.log("GG, ",teamStore.teams.length)
  const handleAdd = async () => {
    await authStore.createTeam(team);
    //teamStore.teams[teamStore.teams.length - 1].teamLeader = authStore.user.username
    authStore.user.TeamId = teamStore.teams[teamStore.teams.length - 1].id;
    await authStore.updateUser(authStore.user);
  };

  return (
    <>
      <TeamPageContainer>
        <AuthTitle></AuthTitle>
        <AuthTitle>{teamInfo.teamName}</AuthTitle>
        <AuthTextInput
          onChangeText={(teamName) => setTeam({ ...team, teamName })}
          placeholder="team name"
          placeholderTextColor="#A6AEC1"
        />
        <TeamPageButton onPress={handleAdd}>
          <TeamPageButtonText>Create Team</TeamPageButtonText>
        </TeamPageButton>
      </TeamPageContainer>
    </>
  );
};
export default MyTeamScreen;
