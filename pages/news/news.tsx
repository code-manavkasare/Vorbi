import React, { useState, useEffect } from 'react';
import { View, Alert, FlatList } from 'react-native';
import { getArticles } from '../../config/newsinfo';
import NewsSnippet from '../../components/news/newsComponent';
import SortTop from '../../components/sortingtop';

const News = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getArticles().then(
      (items) => {
        setData(items);
      },
      (error) => {
        Alert.alert('Error', 'Something went wrong!');
      }
    );
  }, []);

  return (
    <View style={{ backgroundColor: '#1f2232', flex: 1 }}>
      <SortTop />
      <FlatList
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return <NewsSnippet {...item} />;
        }}
      />
    </View>
  );
};
export default News;
