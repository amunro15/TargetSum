import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

// TouchableOpacity (press down opacity of wrap view is decreased, uses animation)
// TouchableHighlight (wrap child in new view, which can affect layout, kind of adds a "border")
// wrappers for making views respond to touches
// onPress equivalent to onClick

class RandomNumber extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    number: PropTypes.number.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  handlePress = () => {
    if (this.props.isDisabled) {
      return;
    }
    this.props.onPress(this.props.id);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text style={[styles.random, this.props.isDisabled && styles.disabled]}>
          {this.props.number}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  random: {
    backgroundColor: '#462653',
    color: 'white',
    width: 125,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.3,
  },
});

export default RandomNumber;
