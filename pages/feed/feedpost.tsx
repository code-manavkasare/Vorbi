import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import Post from '../../components/feed/post';
import { firestore } from '../../firebase';

const FeedPost = ({ category }) => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
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
  }, [filteredPosts]);

  const handleFilterData = () => {
    const filtered = posts.filter(
      ({ type }) => type === category.toLowerCase()
    );
    setFilteredPosts(filtered);
    setLoading(false);
  };

  const handleUnfilterData = () => setFilteredPosts(posts);

  const servercall = useCallback(async () => {
    let data = [];
    await firestore
      .collection('posts')
      .orderBy('timestamp', 'desc')
      .get()
      .then((snap) => {
        snap.forEach((x) => {
          let y = x.data();
          y.id = x.id;
          data.push(y);
        });
        setFirstRender(false);
        setPosts(data);
        setFilteredPosts(data);
        console.log('posts', data);
        setrefresh(false);
      });
  }, []);

  const refreshControl = (
    <RefreshControl
      refreshing={refresh}
      onRefresh={async () => {
        servercall();
      }}
    />
  );

  const renderItem = ({ item }) => {
    return <Post name={item.name} data={item.data} type={item.type} />;
  };

  return (
    <View style={{ backgroundColor: '#1f2232', flex: 1 }}>
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
