import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class TeamMembersButton extends React.Component {
  render() {
    return (
      <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>Team Members</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

TeamMembersButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};
