/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { Button } from 'native-base';

const App = () => {
  return (
    <Fragment>
      <View style={styles.container}>
        <Image
          source={require('./assets/CardImg1.png')}
          style={styles.imageContainer}
        />
        <TextInput
          placeholder="Enter Username"
          textContentType="nickname"
          style={styles.inputField}
        />
        <TextInput
          placeholder="Enter Password"
          textContentType="password"
          style={styles.inputField}
        />
        <Button
          style={styles.loginBtn}
          onPress={() => console.log('Button was clicked')}
          success>
          <Text style={{ fontSize: 20, color: 'white' }}>Login</Text>
        </Button>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 200,
    width: 200,
  },
  inputField: {
    fontSize: 20,
    width: '70%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  loginBtn: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
