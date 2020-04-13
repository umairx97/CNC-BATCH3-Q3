import React from 'react';
import { View, Text, Button } from 'react-native';

function DetailsScreen(props) {
  console.log(JSON.stringify(props, null, 4));
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Hello {props.route.params.name} Age: {props.route.params.age}
      </Text>
      <Button
        title="Go to Contact"
        onPress={() => props.navigation.navigate('Contact')}
      />
    </View>
  );
}

export default DetailsScreen;
