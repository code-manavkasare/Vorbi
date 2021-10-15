import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import Animated, { SpringUtils } from 'react-native-reanimated';
import { mix, useSpringTransition } from 'react-native-redash';
import ChevronDown from '../../components/icons/ChevronDown';
import theme from '../../theme';

const categories = [
  'None',
  'Health',
  'Infrastructure',
  'Social',
  'Technology',
  'Environment',
];

export default function Sort({ category, setCategory }) {
  const [open, setOpen] = useState(false);

  const transition = useSpringTransition(open, {
    ...SpringUtils.makeDefaultConfig(),
    overshootClamping: true,
    damping: new Animated.Value(20),
  });
  const containerHeight = mix(transition, 50, theme.height * 0.3);
  const rotateZ = mix(transition, 0, Math.PI);

  const handleSelect = (item) => {
    if (item === category) return;
    setOpen(false);
    setTimeout(() => {
      setCategory(item === 'None' ? null : item);
    }, 400);
  };

  const renderItem = ({ item }) => (
    <TouchableWithoutFeedback onPress={() => handleSelect(item)}>
      <View style={styles.tile}>
        <Text style={styles.titleStyle}>{item}</Text>
        {category && category === item && (
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
    <Animated.View style={[styles.container, { height: containerHeight }]}>
      <TouchableWithoutFeedback onPress={() => setOpen(!open)}>
        <View style={styles.row}>
          <Text style={styles.label}>sort by</Text>
          <Animated.View style={{ transform: [{ rotateZ }], marginTop: 5 }}>
            <ChevronDown />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
      {open && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={categories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    width: theme.width,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: theme.background.primary100,
  },
  label: {
    color: '#B3B7CD',
    fontSize: 14,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  tile: {
    alignSelf: 'center',
    width: theme.width,
    height: 60,
    flexDirection: 'row',
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: theme.background.primary300,
  },
  titleStyle: {
    fontSize: 18,
    color: theme.text.primary100,
  },
});
