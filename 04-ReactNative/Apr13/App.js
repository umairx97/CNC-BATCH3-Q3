import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home/Home';
import DetailsScreen from './screens/Details/Details';
import ContactScreen from './screens/Contact/Contact';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home Screen"
            component={HomeScreen}
            options={{
              headerTitleAlign: 'center',
              title: 'MY HOME SCREEN',
              headerTintColor: 'red',
              headerTransparent: true,
            }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
