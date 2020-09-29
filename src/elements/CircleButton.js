import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
  render() {
    return (
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonTitle}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 38,
    height: 38,
    backgroundColor: '#F31678',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButtonTitle: {
    position: 'absolute',
    lineHeight: 24,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CircleButton;