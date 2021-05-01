import React from "react";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import fieldStore from "../../../stores/fieldStore";

export default class FieldsScreen extends React.Component {
  static navigationOptions = {
    title: "Fields",
  };

  constructor(props) {
    super(props);
  }

  onPressField = (item) => {
    const title = item.fieldname;
    const fields = item;
    console.log("API");
    this.props.navigation.navigate("FieldDetails", { item });
  };
 
  renderField = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => this.onPressField(item)}
    >
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.fieldname}</Text>
        <Text style={styles.nameDetail}>{item.price} KD/hr</Text>
        <Text style={styles.nameDetail}>{item.capacity}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View backgroundColor={'#306B34'}>
        <FlatList
          data={fieldStore.fields}
          renderItem={this.renderField}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    );
  }
}
