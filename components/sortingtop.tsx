import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Svg, { Path } from 'react-native-svg';
import { IconButton } from 'react-native-paper';

import { useTimingTransition, mix } from 'react-native-redash';
import Animated from 'react-native-reanimated';
import theme from '../theme';

const { width, height } = Dimensions.get('screen');

const categories = [
  'Health',
  'Science',
  'Technology',
  'General',
  'Business',
  'Sports',
];

const SortTop = ({ category, setCategory }) => {
  const [showSortOptions, setShowSortOptions] = useState(false);

  const transition = useTimingTransition(showSortOptions);
  const tileheight = mix(transition, height * 0.1, height * 0.3);

  const handleSelect = (item) => {
    if (item === category) return;
    setCategory(item);
    setShowSortOptions(false);
  };

  const renderItem = ({ item }) => (
    <TouchableWithoutFeedback onPress={() => handleSelect(item)}>
      <View style={styles.tile}>
        <Text style={styles.titleStyle}>{item}</Text>
        {category === item && (
          <IconButton
            icon="check"
            color={theme.background.iconFocused}
            size={20}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <>
      <Animated.View style={[styles.container, { height: tileheight }]}>
        <TouchableOpacity
          onPress={() => setShowSortOptions(true)}
          style={[styles.dropdown, { borderRadius: showSortOptions ? 0 : 40 }]}
          itemStyle={[styles.item, { color: 'white' }]}
        >
          <View>
            <Text style={[styles.text]}>
              Sort By
              {category && (
                <Text style={styles.category}>{'    ' + category}</Text>
              )}
            </Text>
          </View>
          <View style={{ marginRight: 10 }}>
            <Svg width="20" height="20" viewBox="0 0 47 47" fill="none">
              <Path
                d="M46.2998 23.2C46.1998 36.1 35.7998 46.3 23.0998 46.3C10.2998 46.3 -0.100193 35.9 -0.00019455 23.1C-0.00019455 10.2001 10.4998 -0.0999489 23.1998 4.95911e-05C35.7998 4.95911e-05 46.1998 10.1 46.2998 23.2ZM4.7998 23.2C4.7998 33.3 12.9998 41.5 23.0998 41.5C33.3998 41.5 41.3998 33.1 41.3998 23.1C41.3998 13.2001 33.3998 4.80005 22.9998 4.80005C12.9998 4.80005 4.7998 13.1 4.7998 23.2Z"
                fill="#6D7187"
              />
              <Path
                d="M23.0999 24.4C24.1999 23.3 25.2999 22.3 26.3999 21.2C27.1999 20.5 27.8999 19.7 28.6999 19C29.3999 18.4 30.1999 18.3 30.9999 18.7C31.7999 19 32.2999 19.7 32.4999 20.6C32.5999 21.4 32.3999 22.1 31.7999 22.7C29.4999 25 27.1999 27.3 24.8999 29.6C23.8999 30.5 22.4999 30.5 21.4999 29.6C19.1999 27.3 16.8999 25 14.5999 22.7C13.8999 22 13.6999 21.1 13.9999 20.1C14.2999 19.2 14.9999 18.7 15.9999 18.5C16.7999 18.4 17.4999 18.7 18.0999 19.3C19.6999 20.9 21.1999 22.5 22.7999 24.1C22.8999 24.2 22.9999 24.3 23.0999 24.4Z"
                fill="#6D7187"
              />
            </Svg>
          </View>
        </TouchableOpacity>
        {showSortOptions && (
          <FlatList
            data={categories}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
        )}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#1F2232',
    marginBottom: 10,
  },
  dropdown: {
    height: 50,
    width: width * 0.9,
    alignSelf: 'center',
    backgroundColor: '#2A2E42',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    paddingHorizontal: 20,
    fontFamily: 'Poppins-Regular',
  },
  tile: {
    alignSelf: 'center',
    width: width * 0.9,
    height: 60,
    flexDirection: 'row',
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2A2E42',
    borderBottomWidth: 0.5,
    borderBottomColor: theme.background.primary300,
  },
  titleStyle: {
    fontSize: 18,
    color: theme.text.primary100,
  },
  category: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 14,
  },
});

export default SortTop;
