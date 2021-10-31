import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { getAllSurveys } from '../../utils/db';
import LoadingContainer from '../loading/LoadingContainer';
import Surveyitem from '../survey/surveyitem';

const data = [];

const Post = ({ category }) => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [refresh, setrefresh] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    servercall();
  }, []);

  useEffect(() => {
    if (!firstRender && category) handleFilterData();
    if (!category) handleUnfilterData();
  }, [category]);

  useEffect(() => {
    setrefresh(false);
  }, [filteredItems]);

  const servercall = async () => {
    const data = await getAllSurveys();
    setLoading(false);
    setFirstRender(false);
    setItems(data);
    setFilteredItems(data);
    setrefresh(false);
  };

  const handleFilterData = () => {
    const filtered = items.filter(
      ({ topic }) => topic === category.toLowerCase()
    );
    setFilteredItems(filtered);
    setLoading(false);
  };

  const handleUnfilterData = () => setFilteredItems(items);

  const renderItem = ({ item }) => {
    return <Surveyitem {...item} />;
  };

  const refreshControl = (
    <RefreshControl
      refreshing={refresh}
      onRefresh={() => {
        servercall();
      }}
    />
  );

  return (
    <View style={[styles.container]}>
      {loading ? (
        <LoadingContainer />
      ) : (
        <FlatList
          refreshControl={refreshControl}
          data={filteredItems}
          keyExtractor={(item, index) => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Post;
const posts = [
  {
    type: 'Poll',
    data: 'do you support the huawei ban',
    topic: 'technology',
    list: ['yes', 'no', 'maybe', "don't know"],
  },
  {
    type: 'Rating',
    data: 'how much do you support the Governments decision to introduce the Farmers Bill',
    topic: 'social',
    list: [],
  },
  {
    type: 'Rating',
    data: 'Rate the health facilities available in your locality',
    topic: 'health',
    list: [],
  },
  {
    type: 'Poll',
    data: 'What do you think govt needs to work on in your locality',
    topic: 'infrastructure',
    list: ['hospitals', 'roads', 'markets', 'safety'],
  },
  {
    type: 'Rating',
    data: 'Rate the cleanliness in your locality',
    topic: 'environment',
    list: [],
  },
  {
    type: 'Poll',
    data: 'Do you think demonetisation was the right step for indian economy',
    topic: 'social',
    list: ['yes', 'no', 'maybe', "don't know"],
  },
];
