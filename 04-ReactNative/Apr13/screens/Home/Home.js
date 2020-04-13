import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          props.navigation.navigate('Details', { name: 'Umair', age: 22 })
        }
      />
    </View>
  );
}

export default HomeScreen;
