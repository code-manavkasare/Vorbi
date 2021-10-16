import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../../../theme';
import Info from '../../../icons/Info';

export default function CustomSettings({ navigation, route: { params } }) {
  const { type } = params;
  return (
    <View style={styles.screen}>
      {/* <View style={styles.descriptionContainer}> */}
      <Text style={styles.desription}>
        Our users will see your{' '}
        <Text style={{ fontWeight: 'bold' }}>
          {type === 'Post' ? 'post' : 'survey'}
        </Text>{' '}
        based on these settings, you can use these to target a better audience.
        {'   '}
        <Text onPress={() => navigation.navigate('Info')}>
          <Info />
        </Text>
      </Text>

      <View style={styles.container}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.background.primary100,
    paddingVertical: theme.height * 0.1,
    paddingHorizontal: theme.width * 0.1,
  },
  descriptionContainer: {
    flexDirection: 'row',
  },
  desription: {
    color: '#B3B7CD',
    fontSize: 16,
  },
  container: {
    marginTop: theme.height * 0.1,
  },
});
