import React, { useState, useEffect } from 'react';
import { View, Alert, FlatList } from 'react-native';
import { getArticles } from '../../config/newsinfo';
import NewsSnippet from '../../components/news/newsComponent';
import LoadingContainer from '../../components/loading/LoadingContainer';
import Sort from '../../components/Sort';

const categories = [
  'None',
  'Health',
  'Science',
  'Technology',
  'General',
  'Business',
  'Sports',
];

const News = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getArticles(category).then(
      (items) => {
        setData(items);
        setLoading(false);
      },
      (error) => {
        Alert.alert('Error', 'Something went wrong!');
      }
    );
  }, [category]);

  return (
    <View style={{ backgroundColor: '#1f2232', flex: 1 }}>
      <Sort
        categories={categories}
        category={category}
        setCategory={setCategory}
      />
      {loading ? (
        <LoadingContainer />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => {
            return <NewsSnippet {...item} />;
          }}
        />
      )}
    </View>
  );
};
export default News;
