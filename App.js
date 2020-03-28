import React from 'react';
import { View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

// import { Container } from './styles';
import Routes from './src/routes';

export default function iBlood() {
  return (
    <Routes />
  );
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})