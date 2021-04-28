import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import styles from "./styles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  getIngredientName,
  getCategoryName,
  getCategoryById,
} from "../../data/MockDataAPI";
import BackButton from "../../components/BackButton/BackButton";
import JoinTeamButton from "../../components/JoinTeamButton/JoinTeamButton";
import BookButton from "../../components/BookButton/BookButton";

const { width: viewportWidth } = Dimensions.get("window");

export default class FieldDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTransparent: "true",
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }

  renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );

  onPressIngredient = (item) => {
    var name = getIngredientName(item);
    let ingredient = item;
    this.props.navigation.navigate("Ingredient", { ingredient, name });
  };

  render() {
    const { activeSlide } = this.state;
    const { navigation } = this.props;
    const item = navigation.getParam("item");

    return (
      <ScrollView style={styles.container}>
        <View style={styles.carouselContainer}>
          <View style={styles.carousel}>
            <Image style={styles.fieldsPhoto} source={{ uri: item.image }} />
          </View>
        </View>
        <View style={styles.infoRecipeContainer}>
          <Text style={styles.infoRecipeName}>{item.title}</Text>
          <View style={styles.infoContainer}>
            <TouchableHighlight onPress={() => {}}>
              <Text style={styles.category}>
                {item.fieldname}
              </Text>
            </TouchableHighlight>
          </View>

          <View style={styles.infoContainer}>
  
            <Text style={styles.infoRecipe}> {item.price} KD/hr </Text>

          </View>
          <View style={styles.infoContainer}>
            
            <Text style={styles.infoRecipe}> {item.capacity} </Text>

          </View>
          <View style={styles.infoContainer}>
            <BookButton
              onPress={() => {
                alert(`You booked ${item.fieldname} field`);
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

/*cooking steps
<View style={styles.infoContainer}>
  <Image style={styles.infoPhoto} source={require('../../../assets/icons/info.png')} />
  <Text style={styles.infoRecipe}>Cooking Steps</Text>
</View>
<Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
*/
