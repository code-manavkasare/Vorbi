import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import theme from '../../../theme';
import { UserContext } from '../../../utils/context';
import { getFeedbacksForUser } from '../../../utils/db';

export default function Feedbacks() {
  const { user } = useContext(UserContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    handleGetItems();
  }, []);

  const handleGetItems = async () => {
    try {
      const _items = await getFeedbacksForUser(user.uid);
      setItems(_items);
    } catch (err) {
      console.log('err', err);
    }
  };

  return (
    <View style={styles.screen}>
      <FlatList data={items} keyExtractor={(item, index) => index.toString()} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.background.primary100,
  },
});
