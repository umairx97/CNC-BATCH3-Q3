import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

function ContactScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Contact Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate('Home Screen')}
      />
    </View>
  );
}

export default ContactScreen;
