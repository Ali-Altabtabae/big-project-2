import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#eeeeee",
  },
  header: {
    backgroundColor: "#00CED1",
    height: 200,
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
    flex: 1,
  },
  detailContent: {
    top: 80,
    height: 500,
    marginHorizontal: 30,
    flexDirection: "row",
    position: "absolute",
    backgroundColor: "#ffffff",
  },
  userList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 30,
  },
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,

    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "white",
    flexBasis: "46%",
    padding: 10,
    flexDirection: "row",
  },

  name: {
    fontSize: 16,
    flex: 1,
    alignSelf: "stretch",
    color: "#306B34",
    fontWeight: "bold",
    //marginTop: 5,
    textAlign: "left",
  },
  name2: {
    fontSize: 16,
    flex: 1,
    alignSelf: "stretch",
    //color: "#008080",
    //marginTop: 5,
    textAlign: "left",
  },
  position: {
    fontSize: 14,
    flex: 1,
    alignSelf: "center",
    color: "#696969",
  },
  about: {
    marginHorizontal: 10,
  },

  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  followButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});

export default styles;
