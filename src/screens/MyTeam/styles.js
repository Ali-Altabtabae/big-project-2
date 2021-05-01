import styled from "styled-components/native";
import { StyleSheet, Dimensions } from 'react-native';
const { width: viewportWidth } = Dimensions.get('window');

export const AuthTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
  color: #05668d;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  border-bottom-width: 2px;
  border-color: #306B34
  color: #306B34
`;

// Team Page
export const TeamPageContainer = styled.View`
  flex: 8;
  align-self: stretch;
  align-items: center;
  background-color: white;
  padding-right: 60px;
  padding-left: 60px;
`;
export const TeamPageButton = styled.TouchableOpacity`
  height: 50px;
  width: 270px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 100px;
  border-color: #05668d;
  border-width: 1px;
  justify-content: center;
  align-items: center;
`;

// text: {
//   fontSize: 14,
//   color: '#2cd18a'
// }
// });
export const TeamPageButtonText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #05668d;
`;

export const TeamDeleteButton = styled.TouchableOpacity`
  height: 50px;
  width: 270px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 100px;
  border-color: red;
  border-width: 1px;
  justify-content: center;
  align-items: center;
`;

export const TeamDeleteButtonText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: red;
`;

///////////////////////

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  carouselContainer: {
    minHeight: 150
  },
  carousel: {},

  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: 800,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    width: viewportWidth,
    height: 250
  },
  paginationContainer: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    paddingVertical: 8,
    marginTop: 200
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0
  },
  infoRecipeContainer: {
    flex: 1,
    margin: 5,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image2: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: 350,
    marginTop: 500
  },
  infoRecipe: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  category: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
    marginBottom: 20,
    color: "black",
  },
  infoDescriptionRecipe: {
    textAlign: 'left',
    fontSize: 16,
    marginTop: 30,
    margin: 15
  },
  infoRecipeName: {
    fontSize: 28,
    margin: 10,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  }
});

export default styles;
