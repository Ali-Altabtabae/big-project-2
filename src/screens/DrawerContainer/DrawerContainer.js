import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";
import authStore from "../../../stores/authStore"
export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.content} backgroundColor='#E6E6E6'>
        <View style={styles.container}>
          <MenuButton
            title="HOME"
            source={require("../../../assets/icons/home.png")}
            onPress={() => {
              navigation.navigate("Home");
              navigation.closeDrawer();
            }}
          />

          <MenuButton
            title="MYTEAM"
            source={require("../../../assets/icons/category.png")}
            onPress={() => {
              navigation.navigate("MyTeam");
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="FIELDS"
            source={require("../../../assets/icons/category.png")}
            onPress={() => {
              navigation.navigate("Fields");
              navigation.closeDrawer();
            }}
          />
        
          <MenuButton
            title="TEAMS"
            source={require("../../../assets/icons/category.png")}
            onPress={() => {
              navigation.navigate("Teams");
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="SIGN OUT"
            source={require("../../../assets/icons/clear.png")}
            onPress={() => {
              authStore.signout();
              navigation.navigate("Signin");
            }}
          />
        </View>
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
