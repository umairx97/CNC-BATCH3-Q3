import React, { Component, Fragment } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Button,
  FlatList,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { Container, Header, Content, List, ListItem } from 'native-base';
export class App extends Component {
  state = {
    todoText: '',
    todos: [],
  };

  addTodo = () => {
    const { todoText, todos } = this.state;
    const merged = [...todos, todoText];
    this.setState({ todos: merged });
  };

  _renderItem = ({ item, index }) => {
    return (
      <View>
        <Text style={{ backgroundColor: 'dodgerblue', height: 150 }}>
          {item}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(value) => this.setState({ todoText: value })}
          placeholder="Enter Todo"
          style={{ width: '100%', backgroundColor: 'lightgrey' }}
        />
        <Text>{'\n'}</Text>
        <Button title="Add Todo" onPress={() => this.addTodo()} />
        <Carousel
          layout={'stack'}
          data={this.state.todos}
          renderItem={this._renderItem}
          sliderWidth={Dimensions.get('screen').width}
          itemWidth={150}
        />
        {/* <List
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {this.state.todos.map((todo, index) => (
              <ListItem
                style={{
                  borderBottomColor: 'red',
                  borderBottomWidth: 1,
                }}
                key={index}>
                <Text style={{ textAlign: 'center' }}>{todo}</Text>
              </ListItem>
            ))}
          </List> */}
      </View>
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
