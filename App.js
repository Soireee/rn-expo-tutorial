import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import logo from './assets/splash.png';
import BodyText from './src/elements/BodyText';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color:'#267c7c', fontSize: 18}}>HelloWorld</Text>
      <StatusBar style="auto" />
      <Image source={logo} style={{ width: 305, height: 159 }} /> 
      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
      </TouchableOpacity>
      {/* BodyTextにHiを送ると、そこにstyleが修正される。コレはBodyText,js側でthis.props.childrenを指定しているから */}
      <BodyText>Hi</BodyText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
