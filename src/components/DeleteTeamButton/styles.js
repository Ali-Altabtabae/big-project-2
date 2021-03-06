import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    width: 270,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 100,
    //borderColor: '#2cd18a',
    borderColor: "#b20000",
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8e9ec",
    shadowColor: "#000",
    shadowOffset: {
      width: 0, 
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  text: {
    fontSize: 14,
    color: "#b20000",
    fontWeight: "bold",

    //color: '#2cd18a'
    // backgroundColor: 'green'
  },
});

export default styles;
