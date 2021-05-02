import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class DeleteTeamButton extends React.Component {
  render() {
    return (<>
        <View style={styles.container}>
          <Text style={styles.text}>12:00 am - 1:00 am</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>1:00 am - 2:00 am</Text>
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
