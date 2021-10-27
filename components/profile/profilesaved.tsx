import React, { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { UserContext } from '../../utils/context';
import Post from '../feed/post';

const Saved = () => {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={user.savedPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Post screenType="saved" {...item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A2E42',
    flex: 1,
  },
  outer: {
    paddingVertical: 20,
    flex: 3.5,
    backgroundColor: '#2A2E42',
    flexDirection: 'row',
    marginTop: 10,
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftin: {
    flex: 1,
    marginLeft: 10,
    width: 23,
  },
  right: {
    flex: 6,
    paddingHorizontal: 10,
  },
  upper: {
    flex: 6,
  },
  lower: {
    flex: 1,
    flexDirection: 'row',
  },
  nametext: {
    color: 'white',
    marginBottom: 3,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  datatext: {
    color: 'white',
    paddingRight: 20,
    textAlign: 'justify',
    marginRight: 10,
    fontSize: 13,
    lineHeight: 14.5,
    fontFamily: 'Poppins-Regular',
  },
  icon: {
    marginTop: 6,
    flexDirection: 'row',
    textAlign: 'justify',
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#ffb30f',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Saved;
