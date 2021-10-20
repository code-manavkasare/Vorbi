import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../../../theme';
import ChevronDown from '../../../icons/ChevronDown';
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

      <View style={styles.container}>
        <View style={styles.tile}>
          <Text style={[styles.label, styles.active]}>Country</Text>
          <ChevronDown color="#fff" />
        </View>

        <View style={styles.tile}>
          <Text style={[styles.label, styles.inactive]}>State</Text>
          <ChevronDown color="#363C5A" />
        </View>

        <View style={styles.tile}>
          <Text style={[styles.label, styles.inactive]}>Pincode(s)</Text>
          <ChevronDown color="#363C5A" />
        </View>

        <View style={styles.tile}>
          <Text style={[styles.label, styles.inactive]}>Age</Text>
          <ChevronDown color="#363C5A" />
        </View>

        <View style={styles.tile}>
          <Text style={[styles.label, styles.inactive]}>Gender</Text>
          <ChevronDown color="#363C5A" />
        </View>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.buttonLabel}>Submit</Text>
        </TouchableOpacity>
      </View>
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
    flex: 1,
    alignItems: 'center',
  },
  tile: {
    width: theme.width * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  label: {
    fontSize: 18,
  },
  active: {
    color: '#fff',
  },
  inactive: {
    color: '#363C5A',
  },
  bottom: {
    height: theme.height * 0.05,
    alignItems: 'flex-end',
  },
  bottomButton: {
    backgroundColor: '#FFB30F',
    width: theme.width * 0.3,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: theme.background.primary100,
  },
});
