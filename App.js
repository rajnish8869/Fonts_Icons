import {View, Text} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View
      style={{
        margin: 50,
        padding:20,
        backgroundColor: 'lightgreen',
      }}>
      <Text
        style={{fontWeight: 'bold', fontSize: 30, backgroundColor: 'yellow'}}>
        NORMAL
      </Text>
      <Text
        style={{
          fontFamily: 'IndieFlower-Regular',
          fontSize: 30,
          backgroundColor: 'pink',
        }}>
        IndieFlower-Regular
      </Text>
      <Text
        style={{
          fontFamily: 'Pacifico-Regular',
          fontSize: 30,
          backgroundColor: 'skyblue',
        }}>
        Pacifico-Regular
      </Text>
      <Text
        style={{
          fontFamily: 'ShadowsIntoLight-Regular',
          fontSize: 30,
          backgroundColor: 'orange',
        }}>
        ShadowsIntoLight-Regular
      </Text>
    </View>
  );
};

export default App;
