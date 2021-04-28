import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
import { getCategoryName } from '../../data/MockDataAPI';
import fieldStore from "../../../stores/fieldStore"

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: () => <MenuImage
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  });

  constructor(props) {
    super(props);
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('FieldDetails', { item });
  };

  renderField = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressRecipe(item)}>
      <View style={styles.container} >
        <Image style={styles.photo} source={{ uri: item.image }} />
        <Text style={styles.title}>{item.fieldname}</Text>
        <Text style={styles.category}>{item.capacity}</Text>
        <Text style={styles.category}>{item.price} KD</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View >
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={fieldStore.fields}
          renderItem={this.renderField}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}
