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

  onPressField = () => {
    this.props.navigation.navigate("TimeList");
  };

  render() {
    const { activeSlide } = this.state;
    const { navigation } = this.props;
    const item = navigation.getParam("item");

    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../../assets/icons/football-background5.jpeg")}
        />
        <View style={styles.carouselContainer}>
          <View style={styles.carousel}>
            <Image style={styles.fieldsPhoto} source={{ uri: item.image }} />
          </View>
        </View>
        <View style={styles.infoRecipeContainer}>
          <Text style={styles.infoRecipeName}>{item.title}</Text>
          <View style={styles.infoContainer}>
            <TouchableHighlight onPress={() => {}}>
              <Text style={styles.category}>{item.fieldname}</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoRecipe}> {item.price} KD/hr </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoRecipe}> {item.capacity} </Text>
          </View>

          <View style={styles.infoContainer}>
            <Image
              style={styles.infoPhoto}
              source={require("../../../assets/icons/location-purple2.png")}
            />
            <Text style={styles.infoLocation}> {item.location} </Text>
          </View>
          <View style={styles.infoContainer}>
            <BookButton onPress={() => this.onPressField()} />
          </View>
          <Text style={styles.infoDescription}>
            {item.fieldname} field is one of the best fields in Kuwait, and
            famous football players played in this field such as Messi, Veron,
            and Riquelme. Also, this field witnessed great matches. One of them
            is Arabi vs Argentina when Al-Bloushi scored at the last minutes to
            let Arabi win 2-1.{"\n" + "\n"}On 2022, Qatar will use this field in
            the world cup. There is a great collaboration between Kuwait and
            Qatar to set some of the matches in Kuwait's stadiums, and this
            field is one of the chosen one.
          </Text>
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
