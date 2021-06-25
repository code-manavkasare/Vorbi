import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const NewsSnippet = (
  { title, description, content, urlToImage, publishedAt, author, source },
  props,
) => {
  const handleClick = () => {
    return <Text>ABC</Text>;
  };
  let date = new Date(publishedAt);
  let year = date.getFullYear();
  let month = date.getMonth();
  let dt = date.getDate();
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={[styles.outer]}>
        <View style={styles.left}>
          <View style={[styles.upper]}>
            <View style={[styles.name]}>
              <Text style={[styles.nametext]}>{title}</Text>
            </View>
          </View>
          <View style={[styles.lower]}>
            <Text
              style={[{ fontSize: 9, fontWeight: '500', color: '#686C82' }]}
            >
              {source.name}
            </Text>
            <Text
              style={[{ fontSize: 9, fontWeight: '500', color: '#686C82' }]}
            >
              {dt} {months[month]} {year}
            </Text>
          </View>
        </View>
        <View style={[styles.right]}>
          <Image style={styles.tinyLogo} source={{ uri: urlToImage }} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  tinyLogo: {
    width: 80,
    height: 80,
    backgroundColor: '#363C5A',
  },
  outer: {
    padding: 20,
    flex: 3.5,
    backgroundColor: '#2A2E42',
    flexDirection: 'row',
    marginTop: 10,
  },
  left: {
    flex: 5,
    paddingHorizontal: 10,
  },
  leftin: {
    flex: 1,
    marginLeft: 10,
    width: 23,
  },
  right: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upper: {
    flex: 6,
  },
  lower: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nametext: {
    color: 'white',
    marginBottom: 3,
    fontWeight: '600',
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
});
export default NewsSnippet;
