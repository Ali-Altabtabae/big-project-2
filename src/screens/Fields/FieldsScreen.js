import React from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
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
    console.log("API",)
    this.props.navigation.navigate("FieldDetails", { item });
  };

  renderField = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => this.onPressField(item)}
    >
      <View style={styles.fieldsItemContainer}>
        <Image style={styles.fieldsPhoto} source={{ uri: item.image }} />
        <Text style={styles.fieldsName}>{item.fieldname}</Text>
        <Text style={styles.fieldsInfo}>Capacity: {item.capacity}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <FlatList
          data={fieldStore.fields}
          renderItem={this.renderField}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    );
  }
}
