import React from 'react';
import { Text, View } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default function CustomScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <View>
      <Text>This is the CustomScreen</Text>
    </View>
  )
}

CustomScreen.navigationOptions = {
  title: 'app.json',
};
