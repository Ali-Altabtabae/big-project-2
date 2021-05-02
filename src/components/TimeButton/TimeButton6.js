import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class DeleteTeamButton extends React.Component {
  render() {
    return (<>
        <View style={styles.container}>
          <Text style={styles.text}>2:00 pm - 3:00 pm</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>3:00 pm - 4:00 pm</Text>
        </View>
      </>
    );
  }
}

DeleteTeamButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};
