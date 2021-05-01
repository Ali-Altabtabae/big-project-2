import { StyleSheet } from "react-native";
import { RecipeCard } from "../../AppStyles";

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  image: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: 800,
  },
});

export default styles;
