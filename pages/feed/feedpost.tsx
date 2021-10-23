import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import Post from '../../components/feed/post';
import { firestore } from '../../firebase';
import { getAllPosts } from '../../utils/db';
import Sort from './Sort';

const FeedPost = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [refresh, setrefresh] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    servercall();
  }, []);

  useEffect(() => {
    if (!firstRender && category) handleFilterData();
    if (!category) handleUnfilterData();
  }, [category]);

  useEffect(() => {
    setrefresh(false);
  }, [filteredPosts]);

  const handleFilterData = () => {
    const filtered = posts.filter(
      ({ type }) => type === category.toLowerCase()
    );
    setFilteredPosts(filtered);
  };

  const handleUnfilterData = () => setFilteredPosts(posts);

  const servercall = async () => {
    const data = await getAllPosts();
    setFirstRender(false);
    setPosts(data);
    setFilteredPosts(data);
    setrefresh(false);
  };

  const refreshControl = (
    <RefreshControl
      refreshing={refresh}
      onRefresh={async () => {
        servercall();
      }}
    />
  );

  const renderItem = ({ item }) => {
    return <Post {...item} />;
  };

  return (
    <View style={{ backgroundColor: '#1f2232', flex: 1 }}>
      <Sort category={category} setCategory={setCategory} />
      <FlatList
        data={filteredPosts}
        refreshControl={refreshControl}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};
export default FeedPost;
